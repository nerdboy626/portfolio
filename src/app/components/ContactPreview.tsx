"use client";
import Link from "next/link";
import * as motion from "motion/react-client";
import { LuMessagesSquare } from "react-icons/lu";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "../lib/animation";

export default function ContactPreview() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section bg-background-alt">
      <div className="container">
        <div
          ref={ref}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Content */}
          <p
            className={`mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary ${fadeUpClass(isVisible, "delay-100", "translate-y-8")}`}
          >
            Get In Touch
          </p>

          <h2
            className={`mb-5 text-3xl md:text-4xl ${fadeUpClass(isVisible, "delay-200", "translate-y-8")}`}
          >
            Let&apos;s work together!
          </h2>

          <p
            className={`mb-6 text-lg leading-8 ${fadeUpClass(isVisible, "delay-300", "translate-y-8")}`}
          >
            Whether you&apos;re looking for a developer, exploring a
            collaboration, or simply want to connect, I&apos;d be happy to start
            a conversation.
          </p>

          {/* CTA Row */}
          <div
            className={`mb-6 flex flex-col items-center gap-4 sm:flex-row ${fadeUpClass(isVisible, "delay-400", "translate-y-8")}`}
          >
            <Link href="/contact" className="btn btn-primary no-underline">
              Contact Me
            </Link>
          </div>

          {/* Floating icon */}
          <div
            className={`${fadeUpClass(isVisible, "delay-500", "translate-y-8")}`}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Link href="/contact">
                <div className="flex h-18 w-18 items-center justify-center rounded-2xl border border-border bg-background shadow-md">
                  <LuMessagesSquare
                    className="h-8 w-8 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
