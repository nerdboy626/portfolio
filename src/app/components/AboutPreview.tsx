"use client";
import Image from "next/image";
import Link from "next/link";
import Portfolio from "@/app/images/profile.jpeg";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  return (
    <section className="section">
      <div className="container">
        <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div
            className={`max-w-2xl space-y-6 transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Meet the Developer
            </p>

            <h2 className="mb-5 text-3xl md:text-4xl">
              I love creating interfaces that balance design and functionality.
            </h2>

            <p className="mb-6 text-lg leading-8">
              I’m a fullstack developer focused on building modern digital
              experiences with clean design, smooth interactions, and purposeful
              functionality.
            </p>

            <Link href="/about" className="btn btn-secondary no-underline">
              Read More About Me
            </Link>
          </div>

          {/* Right Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ease-out delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* subtle background accent */}
              <div className="absolute inset-0 scale-105 rounded-full bg-primary/10 blur-3xl" />

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
