import Image from "next/image";
import Portfolio from "@/app/images/profile.jpeg";

export default function AboutHero() {
  return (
    <section className="section">
      <div className="container pt-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p
              className={`mb-4 text-sm font-medium uppercase tracking-[0.15em] text-primary`}
            >
              About Me
            </p>

            <h1
              className={`mb-5 font-display font-light leading-none tracking-tight text-foreground`}
            >
              Developer, problem solver, lifelong learner
              <span className="text-primary">.</span>
            </h1>

            <p className={`max-w-xl text-lg leading-8 text-foreground-muted`}>
              Intro goes here...
            </p>
          </div>

          <div className={`flex justify-center lg:justify-end`}>
            <div className="relative">
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
