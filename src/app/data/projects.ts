import type { StaticImageData } from "next/image";
import PoplogHome from "@/app/images/poplog-home.png";
import RecoveryGrow from "@/app/images/recoverygrow-logo.png";
import NENA from "@/app/images/nena-logo.png";
import EventFinder from "@/app/images/event-finder-preview.png";

export type Project = {
  id: number;
  image: StaticImageData;
  slug: string;
  title: string;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    image: PoplogHome,
    slug: "poplog",
    title: "Poplog — Fullstack Media Journal",
    techStack: [
      "React.js",
      "Express",
      "Node.js",
      "PostgreSQL",
      "Third-party APIs",
    ],
    link: "https://poplog-app.vercel.app",
  },
  {
    id: 2,
    image: NENA,
    slug: "nena",
    title: "NENA — Recipe Sharing App",
    techStack: ["React Native", "JavaScript", "CSS", "Firebase"],
    link: "https://github.com/nerdboy626/NENA",
  },
  {
    id: 3,
    image: EventFinder,
    slug: "event-finder",
    title: "Event Finder — Event Discovery App",
    techStack: ["React Native", "JavaScript", "CSS", "Third-party APIs"],
    link: "https://github.com/gxsoto/cs147Lfinalproject",
  },
  {
    id: 4,
    image: RecoveryGrow,
    slug: "recoverygrow",
    title: "RecoveryGrow — Holistic Concussion Recovery",
    techStack: ["Figma", "React Native", "Git", "GitHub"],
    link: "https://hci.stanford.edu/courses/cs147/2022/au/projects/AccessibleDesignEmily/RecoveryBoard/",
  },
];
