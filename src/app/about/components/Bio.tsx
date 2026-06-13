"use client";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { fadeUpClass } from "@/app/lib/animation";
import { GiJourney } from "react-icons/gi";

export default function Bio() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.24);
  return (
    <section className="section bg-background-alt">
      <div ref={ref} className="container grid gap-16 lg:grid-cols-[300px_1fr]">
        <div
          className={`flex flex-col lg:self-center ${fadeUpClass(isVisible, "delay-100", "translate-y-12")}`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            My Story
          </p>
          <h2 className="mb-5 text-3xl md:text-4xl">
            The person behind the code.
          </h2>
          <GiJourney className="self-center h-48 w-48 text-primary/70" />
        </div>
        <div className={`space-y-6`}>
          <p
            className={`mb-6 text-lg leading-8 ${fadeUpClass(isVisible, "delay-150", "translate-y-12")}`}
          >
            I&apos;m a fullstack developer with a Bachelor&apos;s degree from
            Stanford University. My education provided a strong foundation in
            computer science while helping me develop skills in systems design,
            algorithms, and software engineering. Along the way, I discovered
            that my favorite part of development isn&apos;t just writing code.
            Instead, I appreciate collaborating with others to build solutions
            that make everyday life a little easier, no matter how small the
            problem may seem!
          </p>
          <p
            className={`mb-6 text-lg leading-8 ${fadeUpClass(isVisible, "delay-250", "translate-y-12")}`}
          >
            Since graduating, I&apos;ve continued strengthening my understanding
            of system design and data structures while developing the practical
            skills that bridge the gap between theory and real-world software
            development. I&apos;ve had a lot of fun building personal projects,
            experimenting with new technologies, and expanding my toolkit as I
            work toward becoming a versatile fullstack developer.
          </p>
          <p
            className={`mb-6 text-lg leading-8 ${fadeUpClass(isVisible, "delay-350", "translate-y-12")}`}
          >
            One thing my journey has taught me is that I&apos;ll always be a
            learner. Technology evolves quickly, and that&apos;s part of what
            makes this field so exciting! I&apos;m motivated by opportunities to
            grow alongside talented teammates, solve meaningful problems, and
            create products that improve people&apos;s lives or simply bring
            them joy.
          </p>
          <p
            className={`mb-6 text-lg leading-8 ${fadeUpClass(isVisible, "delay-450", "translate-y-12")}`}
          >
            Outside of software, you&apos;ll find me working as a barista at my
            local grocery store. I enjoy connecting with people, whether
            that&apos;s through code, conversation, or a cup of coffee. When
            I&apos;m away from the keyboard, I&apos;m usually reading (I&apos;ve
            recently become obsessed with sci-fi fantasy), playing video games,
            or watching YouTube. If it involves something mythical, magical, or
            imaginative, there&apos;s a good chance I&apos;m interested!
          </p>
        </div>
      </div>
    </section>
  );
}
