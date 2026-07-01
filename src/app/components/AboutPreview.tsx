"use client";
import Image from "next/image";
import Link from "next/link";
import Portfolio from "@/app/public/images/profile.jpeg";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "../lib/animation";

export default function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section">
      <div className="container">
        <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div
            className={`max-w-2xl ${fadeUpClass(isVisible, "delay-100", "translate-y-12")}`}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Meet the Developer
            </p>

            <h2 className="mb-5 text-3xl md:text-4xl">
              Creating software with equal parts creativity and engineering.
            </h2>

            <p className="mb-6 text-lg leading-8">
              I&apos;m a software developer who loves transforming ideas into
              polished digital solutions. My work blends user-centered design,
              scalable architecture, and a commitment to building products that
              people genuinely enjoy using.
            </p>

            <Link href="/about" className="btn btn-secondary no-underline">
              Read More About Me
            </Link>
          </div>

          {/* Right Image */}
          <div
            className={`flex justify-center lg:justify-end ${fadeUpClass(isVisible, "delay-300", "translate-y-12")}`}
          >
            <div className="relative">
              <div className="absolute inset-0 scale-105 rounded-full bg-primary/10 blur-3xl transform-[translateZ(0)] will-change-[filter] backface-hidden" />

              <Image
                src={Portfolio}
                alt="Portrait of the developer"
                width={420}
                height={420}
                className="relative aspect-square w-72 rounded-full border border-border object-cover object-[55%_center] shadow-lg md:w-80 lg:w-[26rem]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
