"use client";

import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import * as motion from "motion/react-client";

const skills = [
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#888888",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Skills() {
  return (
    <section className="section bg-background-alt">
      <div className="container">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-foreground-subtle">
            Skills
          </p>
          <h2 className="mb-5 text-3xl md:text-4xl">
            My Toolbox & Technologies I Use.
          </h2>
          <p className="mb-6 text-lg leading-8">
            Technologies and tools I use to build modern, responsive, and
            scalable digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group flex items-center gap-3
                  sm:flex-col sm:justify-center sm:text-center
                  rounded-2xl border border-border bg-card px-4 py-3 sm:p-6
                  shadow-sm cursor-default
                  before:absolute before:inset-0 before:rounded-2xl before:bg-primary/5
                  before:opacity-0 hover:before:opacity-100"
                style={{ "--hover-color": skill.color } as React.CSSProperties}
              >
                <Icon
                  size={28}
                  className="shrink-0 text-foreground opacity-70 transition-all duration-200
                    group-hover:opacity-100 group-hover:text-[var(--hover-color)]
                    sm:mb-2 sm:size-10"
                />
                <p className="text-sm font-medium text-foreground sm:text-center">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
