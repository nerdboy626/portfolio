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
    content: string[];
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
      heading: "A centralized platform for lovers of multiple media types",
      content:
        "I created Poplog because I consume a wide range of media and often lose track of my favorite content over time. This project was built as a way to organize and revisit everything in a single, personalized space.",
    },
    features: {
      heading:
        "Created to make discovering and managing media personal, safe, and fast.",
      content: [
        "User authentication with protected routes (JWT-based)",
        "Sync external API data with a PostgreSQL database",
        "Browse trending content from external APIs",
        "Save media entries and manage them within a personal journal",
      ],
    },
    challenges: {
      heading: "Building a scalable application across multiple external APIs.",
      content:
        "Working with four different APIs introduced challenges around inconsistent data formats, which required transforming and normalizing responses before displaying them on the client. I also had to account for API rate limits, which led me to implement caching strategies to reduce redundant requests.\n\nBefore this project, I had only done design and frontend work.My biggest learning and improvement was creating a backend API and database to retrieve and store data from my frontend.Before this project,  I had only done design and frontend work.",
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
      heading:
        "Designed to unite people through the shared joy of cooking and baking.",
      content:
        "As an essential skill and a beloved pastime, cooking offers an unparalleled way for people to bond, share, and learn together. NENA is built on core values that include promoting culinary and cultural diversity, enhancing community engagement, and sparking creativity and innovation.",
    },
    features: {
      heading: "Functional capabilities that promote community.",
      content: [
        "User feed page that shows activity from user’s friends",
        "Recipe creation tool that allows users to document and share or private recipes",
        "Search utility for finding recipes",
        "Profile customization for users to edit their display photo and information",
      ],
    },
    challenges: {
      heading: "Integrating the frontend and backend work of a team.",
      content:
        "This project was completed in a team of four for a senior software engineering class. Although the goals and tasks were discussed as a team, a large portion of the frontend and backend work was done independently. When it came time to create the fleshed-out app, integrating the two halves’ work proved to be more difficult than we had originally thought.\n\nThanks to the strong rapport we built throughout the quarter, we were able to effectively communicate and mend the two halves of NENA. As someone who had only worked on the frontend before, this was a great introduction into learning how the frontend and backend of an application communicated with each other.",
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
      content: ["example content"],
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
      content: ["example content"],
    },
    challenges: {
      heading: "example heading",
      content: "example content",
    },
  },
];
