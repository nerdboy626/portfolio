"use client";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

import { skillsData } from "@/app/data/skills";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  return (
    <section className="section bg-background-alt">
      <div className="container">
        {/* Header */}
        <motion.div
          className="mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Skills
          </p>

          <h2 className="mb-5 text-3xl md:text-4xl">
            My toolbox & technologies.
          </h2>

          <p className="mb-6 text-lg leading-8">
            Technologies and tools I have used to design and construct user
            interfaces, mobile applications, and websites.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillsData.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group relative flex cursor-default items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm before:absolute before:inset-0 before:rounded-2xl before:bg-primary/5 before:opacity-0 hover:before:opacity-100 sm:flex-col sm:justify-center sm:p-6 sm:text-center"
                style={
                  {
                    "--hover-color": skill.color,
                  } as React.CSSProperties
                }
              >
                <Icon
                  size={28}
                  className="shrink-0 text-foreground opacity-70 transition-all duration-200 group-hover:text-(--hover-color) group-hover:opacity-100 sm:mb-2 sm:size-10"
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
