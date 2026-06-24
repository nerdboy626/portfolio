"use client";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "@/app/lib/animation";

export default function Principles() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  return (
    <section className="section">
      <div ref={ref} className="container">
        <div
          className={`max-w-2xl mb-12 ${fadeUpClass(isVisible, "delay-100", "translate-y-12")}`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Why Work With Me
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            Core principles that influence my solutions.
          </h2>

          <p className="mb-6 text-lg leading-8">
            A few concepts and ideas that guide how I approach software
            development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className={`rounded-3xl border border-border bg-card p-6 md:p-8  shadow-sm ${fadeUpClass(isVisible, "delay-150", "translate-y-12")}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="inline-block flex-none h-12 w-12 rounded-xl bg-primary/50" />
                <h3 className="inline-block leading-8 text-wrap">
                  Build for People
                </h3>
              </div>
              <p>
                I design interfaces that feel elegant, accessible, and intuitive
                to use. Every technical decision ultimately serves the user, so
                I strive to create applications that are both functional and
                thoughtfully crafted.
              </p>
            </div>
          </div>
          <div
            className={`rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm ${fadeUpClass(isVisible, "delay-250", "translate-y-12")}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="inline-block flex-none h-12 w-12 rounded-xl bg-secondary/50" />
                <h3 className="inline-block leading-8 text-wrap">
                  Efficient and Scalable
                </h3>
              </div>
              <p>
                Functional code should solve today&apos;s problems while
                remaining adaptable for tomorrow&apos;s. I prioritize
                performance, maintainability, and architecture that can grow
                alongside changing requirements.
              </p>
            </div>
          </div>
          <div
            className={`rounded-3xl border border-border bg-card p-6 md:p-8  shadow-sm ${fadeUpClass(isVisible, "delay-350", "translate-y-12")}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="inline-block flex-none h-12 w-12 rounded-xl bg-accent/50" />
                <h3 className="inline-block leading-8 text-wrap">
                  Readable Code
                </h3>
              </div>
              <p>
                Clean, understandable code benefits everyone involved in a
                project. Writing maintainable software makes cooperation easier,
                simplifies future improvements, and reduces the likelihood of
                unexpected issues.
              </p>
            </div>
          </div>
          <div
            className={`rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm ${fadeUpClass(isVisible, "delay-450", "translate-y-12")}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="inline-block flex-none h-12 w-12 rounded-xl bg-foreground-subtle/30" />
                <h3 className="inline-block leading-8 text-wrap">
                  Collaboration and Teamwork
                </h3>
              </div>
              <p>
                The best products are built by people with different
                perspectives and ideas. I value open communication, constructive
                feedback, and working closely with others to create solutions
                that serve a wide range of users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
