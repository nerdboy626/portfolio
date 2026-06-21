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
  cardTitle: string;
  tagline: string;
  techStack: string[];
  cardLink: string;
  liveDemoLink?: string;
  githubLink?: string;
  overview: {
    heading: string;
    content: string;
  };
  features: {
    heading: string;
    content: string;
  };
  challenges: {
    heading: string;
    content: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    image: PoplogHome,
    slug: "poplog",
    title: "Poplog",
    cardTitle: "Poplog — Fullstack Media Journal",
    tagline:
      "A fullstack media journal where users can log and track their favorite movies, TV shows, video games, and books.",
    techStack: ["React.js", "Express", "PostgreSQL", "TMDB API", "IGDB API"],
    cardLink: "https://poplog-app.vercel.app",
    liveDemoLink: "https://poplog-app.vercel.app",
    githubLink: "https://github.com/nerdboy626/poplogApp",
    overview: {
      heading: "example titile",
      content: "example content",
    },
    features: {
      heading: "example heading",
      content: "example content",
    },
    challenges: {
      heading: "example heading",
      content: "example content",
    },
  },
  {
    id: 2,
    image: NENA,
    slug: "nena",
    title: "NENA",
    cardTitle: "NENA — Recipe Sharing Platform",
    tagline:
      "A mobile-first recipe sharing platform that nurtures a community of food enthusiasts to discover, share, and save recipes.",
    techStack: ["React Native", "JavaScript", "CSS", "Firebase"],
    cardLink: "https://github.com/nerdboy626/NENA",
    githubLink: "https://github.com/nerdboy626/NENA",
    overview: {
      heading: "example titile",
      content: "example content",
    },
    features: {
      heading: "example heading",
      content: "example content",
    },
    challenges: {
      heading: "example heading",
      content: "example content",
    },
  },
  {
    id: 3,
    image: EventFinder,
    slug: "event-finder",
    title: "Event Finder",
    cardTitle: "Event Finder — Social Event Discovery",
    tagline:
      "A social event discovery platform that helps users find events and connect with people who share their interests.",
    techStack: [
      "React Native",
      "JavaScript",
      "CSS",
      "Ticketmaster API",
      "Google Maps API",
    ],
    cardLink: "https://github.com/gxsoto/cs147Lfinalproject",
    githubLink: "https://github.com/gxsoto/cs147Lfinalproject",
    overview: {
      heading: "example titile",
      content: "example content",
    },
    features: {
      heading: "example heading",
      content: "example content",
    },
    challenges: {
      heading: "example heading",
      content: "example content",
    },
  },
  {
    id: 4,
    image: RecoveryGrow,
    slug: "recoverygrow",
    title: "RecoveryGrow",
    cardTitle: "RecoveryGrow — Holistic Concussion Recovery",
    tagline:
      "A mobile platform that supports concussion recovery through symptom tracking, educational resources, and design focused on accessibility.",
    techStack: ["Figma", "React Native", "User Research", "Accessibility"],
    cardLink:
      "https://hci.stanford.edu/courses/cs147/2022/au/projects/AccessibleDesignEmily/RecoveryBoard/",
    overview: {
      heading: "example titile",
      content: "example content",
    },
    features: {
      heading: "example heading",
      content: "example content",
    },
    challenges: {
      heading: "example heading",
      content: "example content",
    },
  },
];
