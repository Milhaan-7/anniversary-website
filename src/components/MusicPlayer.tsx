import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface MusicPlayerHandle {
  start: () => void;
}

/**
 * Persistent play/pause/mute control, fixed to a corner.
 * Music never autoplays — `start()` is only called after the visitor
 * presses "Begin Our Journey", and fades in smoothly from there.
 */
const MusicPlayer = forwardRef<MusicPlayerHandle, { visible: boolean }>(({ visible }, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useImperativeHandle(ref, () => ({
    start: () => {
      const audio = audioRef.current;
      if (!audio || started) return;
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setStarted(true);
          setPlaying(true);
          let v = 0;
          const fade = setInterval(() => {
            v += 0.04;
            if (v >= 0.55) {
              audio.volume = 0.55;
              clearInterval(fade);
            } else {
              audio.volume = v;
            }
          }, 90);
        })
        .catch(() => {
          // Autoplay was blocked by the browser; the visitor can press play manually.
        });
    },
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
      setStarted(true);
    }
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  }

  return (
    <>
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}music/anniversary-piano.mp3`} preload="auto" />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gold/30 bg-ink/70 px-3 py-2 backdrop-blur-md shadow-[0_0_24px_rgba(201,162,39,0.15)]"
          >
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause music" : "Play music"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
            >
              {playing ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="0" width="4" height="12" /><rect x="7" y="0" width="4" height="12" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M1 0L11 6L1 12Z" /></svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute music" : "Mute music"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-xs"
            >
              {muted ? "🔇" : "🔊"}
            </button>
            <span className="hidden sm:inline text-[11px] tracking-wide text-sand pr-1">Our song</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default MusicPlayer;
