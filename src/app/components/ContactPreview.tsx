"use client";
import Link from "next/link";
import * as motion from "motion/react-client";
import { LuMessagesSquare } from "react-icons/lu";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ContactPreview() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="section bg-background-alt">
      <div className="container">
        <div
          ref={ref}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Content */}
          <p
            className={`mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Get In Touch
          </p>

          <h2
            className={`mb-5 text-3xl md:text-4xl transition-all duration-500 ease-out delay-100
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Let's Work Together!
          </h2>

          <p
            className={`mb-6 max-w-2xl text-lg leading-8 transition-all duration-500 ease-out delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            I'm always open to discussing new projects, creative ideas,
            opportunities, or simply connecting with other people in tech.
          </p>

          {/* CTA Row */}
          <div
            className={`flex flex-col items-center gap-4 sm:flex-row mb-10 transition-all duration-500 ease-out delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Link href="/contact" className="btn btn-primary no-underline">
              Contact Me
            </Link>
          </div>

          {/* Floating icon */}
          <div
            className={`transition-all duration-500 ease-out delay-[400ms]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Link href="/contact">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-2xl border border-border bg-background shadow-md">
                  <LuMessagesSquare
                    className="h-8 w-8 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
