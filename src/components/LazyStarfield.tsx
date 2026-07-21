import { lazy, Suspense } from "react";

const StarfieldImpl = lazy(() => import("./Starfield"));

interface Props {
  className?: string;
  density?: number;
  glow?: boolean;
}

/** Code-split wrapper so three.js only loads once the visitor begins the journey. */
export default function LazyStarfield(props: Props) {
  return (
    <Suspense fallback={null}>
      <StarfieldImpl {...props} />
    </Suspense>
  );
}
