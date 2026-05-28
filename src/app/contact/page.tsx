"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { TbMail } from "react-icons/tb";
import { RxLinkedinLogo } from "react-icons/rx";
import { fadeUpClass } from "../lib/animation";
import AnimatedWaves from "./components/AnimatedWaves";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background-alt">
      <AnimatedWaves />

      {/* content */}
      <div
        ref={ref}
        className="container relative z-10 flex min-h-screen flex-col justify-center gap-16 py-20 lg:flex-row lg:items-center"
      >
        <div
          className={`w-full max-w-xl ${fadeUpClass(isVisible, "delay-50", "translate-y-24")}`}
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
                <RxLinkedinLogo className="h-4 w-4 transition-colors duration-700 ease-in-out" />
              </div>

              <span className="text-sm font-medium">LinkedIn</span>
            </Link>

            <Link
              href="mailto:caminero@alumni.stanford.edu"
              className="btn btn-secondary no-underline"
            >
              <div>
                <TbMail className="h-4 w-4 transition-colors duration-700 ease-in-out" />
              </div>

              <span className="text-sm font-medium">
                caminero@alumni.stanford.edu
              </span>
            </Link>
          </div>
        </div>

        <ContactForm isVisible={isVisible} />
      </div>
    </section>
  );
}
