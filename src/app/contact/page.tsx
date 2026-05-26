"use client";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { TbMail } from "react-icons/tb";
import { RxLinkedinLogo } from "react-icons/rx";
import { fadeUpClass } from "../lib/animation";

const waves = [
  {
    d: "M0,200 C200,80 400,340 600,220 C800,100 1000,380 1200,200 L1200,600 L0,600 Z",
    fill: "url(#wave-grad-1)",
    duration: 9,
    blur: "blur-[14px]",
    opacity: "opacity-25",
  },
  {
    d: "M0,350 C300,180 600,460 900,280 C1050,190 1150,320 1200,300 L1200,600 L0,600 Z",
    fill: "url(#wave-grad-2)",
    duration: 12,
    blur: "blur-[8px]",
    opacity: "opacity-35",
  },
  {
    d: "M0,400 C200,280 500,500 800,350 C950,270 1100,420 1200,380 L1200,600 L0,600 Z",
    fill: "url(#wave-grad-3)",
    duration: 7,
    blur: "blur-[4px]",
    opacity: "opacity-25",
  },
];

export default function ContactPage() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="relative min-h-screen overflow-hidden bg-background-alt">
      {/* radial glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,125,66,0.10),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(224,125,66,0.14),transparent_55%)]" /> */}

      {/* Wave layers */}
      {waves.map((wave, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 ${wave.blur} ${wave.opacity}`}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 20, -15, 0],
            scaleY: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: wave.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <svg
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            className="absolute -left-[20%] h-[140%] w-[140%]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id={`wave-grad-${i + 1}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                {i === 0 && (
                  <>
                    <stop offset="0%" stopColor="#c2692a" />
                    <stop offset="100%" stopColor="#e0c35c" />
                  </>
                )}

                {i === 1 && (
                  <>
                    <stop offset="0%" stopColor="#4a7c6f" />
                    <stop offset="100%" stopColor="#6aad9e" />
                  </>
                )}

                {i === 2 && (
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

      {/* content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:px-12"
      >
        {/* LEFT SIDE */}
        <div
          className={`w-full max-w-2xl ${fadeUpClass(isVisible, "delay-50", "translate-y-24")}`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Let's Have a Chat
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            I'm always excited to hear about new opportunities and ideas!
          </h2>

          <p className="mb-6 text-lg leading-8">
            Whether you&apos;re reaching out about a job opportunity,
            collaboration, or simply want to connect, I&apos;d love to hear from
            you.
          </p>

          <p className="mb-6 text-lg leading-8">
            I&apos;m always excited to discuss new ideas, creative projects, and
            opportunities to build thoughtful digital experiences.
          </p>

          {/* links */}
          <div className="mt-10 flex gap-3">
            <Link
              href="https://www.linkedin.com/in/nicolas-caminero"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary no-underline"
            >
              <div>
                <RxLinkedinLogo className="h-4 w-4" />
              </div>

              <span className="text-sm font-medium">LinkedIn</span>
            </Link>

            <Link
              href="mailto:caminero@alumni.stanford.edu"
              className="btn btn-secondary no-underline"
            >
              <div>
                <TbMail className="h-4 w-4" />
              </div>

              <span className="text-sm font-medium">
                caminero@alumni.stanford.edu
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={` w-full max-w-2xl ${fadeUpClass(isVisible, "delay-150", "translate-y-24")}`}
        >
          <div className="rounded-3xl border border-border/50 bg-background/65 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <form className="flex flex-col gap-6">
              <div>
                <label>Name</label>
                <input className="mt-2" type="text" placeholder="Your name" />
              </div>

              <div>
                <label>Subject</label>

                <input
                  className="mt-2"
                  type="text"
                  placeholder="What would you like to talk about?"
                />
              </div>

              <div>
                <label>Message</label>

                <textarea
                  className="mt-2"
                  rows={6}
                  placeholder="Write your message here..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
