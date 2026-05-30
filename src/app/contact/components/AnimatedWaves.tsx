"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

type Wave = {
  d: string;
  fill: string;
  duration: number;
  blur: string;
  opacity: string;
};

const waves: Wave[] = [
  {
    d: "M0,200 C200,80 400,340 600,220 C800,100 1000,380 1200,200 L1200,600 L0,600 Z",
    fill: "url(#wave-grad-1)",
    duration: 14,
    blur: "blur-[14px]",
    opacity: "opacity-25",
  },
  {
    d: "M0,350 C300,180 600,460 900,280 C1050,190 1150,320 1200,300 L1200,600 L0,600 Z",
    fill: "url(#wave-grad-2)",
    duration: 18,
    blur: "blur-[8px]",
    opacity: "opacity-35",
  },
  {
    d: "M0,400 C200,280 500,500 800,350 C950,270 1100,420 1200,380 L1200,600 L0,600 Z",
    fill: "url(#wave-grad-3)",
    duration: 11,
    blur: "blur-[4px]",
    opacity: "opacity-25",
  },
];

export default function AnimatedWaves() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return (
    <>
      {/* radial glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,125,66,0.10),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(224,125,66,0.14),transparent_55%)]" /> */}
      {waves.map((wave, index) => (
        <motion.div
          key={wave.fill}
          className={`absolute inset-0 ${wave.blur} ${wave.opacity}`}
          animate={
            isMobile
              ? undefined
              : {
                  x: [0, -40, 30, 0],
                  y: [0, 20, -15, 0],
                  scaleY: [1, 1.03, 0.98, 1],
                }
          }
          transition={
            isMobile
              ? {}
              : {
                  duration: wave.duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          <svg
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            className="absolute -left-[20%] h-[140%] w-[140%]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id={`wave-grad-${index + 1}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                {index === 0 && (
                  <>
                    <stop offset="0%" stopColor="#c2692a" />
                    <stop offset="100%" stopColor="#e0c35c" />
                  </>
                )}

                {index === 1 && (
                  <>
                    <stop offset="0%" stopColor="#4a7c6f" />
                    <stop offset="100%" stopColor="#6aad9e" />
                  </>
                )}

                {index === 2 && (
                  <>
                    <stop offset="0%" stopColor="#d6b449" />
                    <stop offset="100%" stopColor="#c2692a" />
                  </>
                )}
              </linearGradient>
            </defs>

            <path d={wave.d} fill={wave.fill} />
          </svg>
        </motion.div>
      ))}
    </>
  );
}
