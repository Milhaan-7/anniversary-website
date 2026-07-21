import { useEffect, useRef } from "react";
import * as THREE from "three";

interface StarfieldProps {
  className?: string;
  density?: number;
  glow?: boolean;
}

/**
 * A quiet, drifting field of stars with a soft golden glow.
 * Subtle by design — this is atmosphere, not a spectacle.
 */
export default function Starfield({ className = "", density = 1, glow = true }: StarfieldProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const starCount = Math.floor(700 * density);
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120 - 20;
      sizes[i] = Math.random() * 1.6 + 0.3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color("#F3ECDD"),
      size: 0.9,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // A faint golden glow sprite near the horizon.
    let glowSprite: THREE.Sprite | null = null;
    if (glow) {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(201,162,39,0.35)");
      grad.addColorStop(1, "rgba(201,162,39,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
      glowSprite = new THREE.Sprite(spriteMaterial);
      glowSprite.scale.set(140, 140, 1);
      glowSprite.position.set(0, -20, -40);
      scene.add(glowSprite);
    }

    let frameId: number;
    let t = 0;
    function animate() {
      if (!prefersReduced) {
        t += 0.0006;
        points.rotation.y = t;
        points.rotation.x = Math.sin(t * 0.5) * 0.03;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      if (glowSprite) {
        (glowSprite.material as THREE.SpriteMaterial).map?.dispose();
        (glowSprite.material as THREE.SpriteMaterial).dispose();
      }
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [density, glow]);

  return <div ref={mountRef} className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true" />;
}
