import type { IconType } from "react-icons";
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

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export const skillsData: Skill[] = [
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
