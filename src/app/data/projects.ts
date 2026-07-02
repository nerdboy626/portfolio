import type { StaticImageData } from "next/image";
import PoplogHome from "../../../public/images/poplog-home.png";
import RecoveryGrow from "../../../public/images/recoverygrow-logo.svg";
import NENA from "../../../public/images/nena-logo.svg";
import EventFinder from "../../../public/images/event-finder-preview.svg";

export type Project = {
  id: number;
  image: StaticImageData;
  slug: string;
  title: string;
  cardTitle: string;
  tagline: string;
  techStack: string[];
  cardTechStack: string[];
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
    cardTitle: "Poplog — Full Stack Media Journal",
    tagline:
      "A full stack media journal where users can log and track their favorite movies, TV shows, video games, and books.",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Vercel",
      "Render",
      "TMDB API",
      "IGDB API",
      "Google Books API",
      "NYT API",
    ],
    cardTechStack: [
      "React.js",
      "Express",
      "PostgreSQL",
      "Vercel",
      "Render",
      "REST APIs",
    ],
    cardLink: "https://poplog.dev",
    liveDemoLink: "https://poplog.dev",
    githubLink: "https://github.com/nerdboy626/poplogApp",
    overview: {
      heading:
        "A centralized home for tracking entertainment across every medium.",
      content:
        "Poplog was born from a simple frustration: keeping track of favorite movies, television shows, games, and books across multiple platforms. I wanted a single destination where users could discover new content, record their experiences, and build a personal archive of the media that matters most to them. The result is a full stack application that combines content discovery with organization.",
    },
    features: {
      heading:
        "Created to make media discovery and collection management effortless.",
      content: [
        "Secure authentication system with protected routes and JWT-based session management",
        "Personalized journal that allows users to save titles, record ratings, and revisit past entries",
        "Trending content hub powered by multiple third-party APIs for movies, TV shows, games, and books",
        "Backend data synchronization that transforms and stores external media information for faster access and consistency",
      ],
    },
    challenges: {
      heading: "Engineering a unified experience across multiple data sources.",
      content:
        "One of the most demanding aspects of Poplog was integrating four separate APIs, each with its own response structure and data conventions. Creating a consistent user interface required transforming and normalizing incoming data before it could be displayed or stored. I also had to account for rate limits and performance concerns, which led me to implement caching strategies that reduced unnecessary requests and improved responsiveness.\n\nThis project marked my transition from primarily frontend and design work into full stack development. Building the backend API, constructing the database schema, and managing data flow between the client and server gave me a much deeper understanding of how modern web applications operate end-to-end.",
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
    techStack: ["React Native", "Node.js", "Mobile Development", "Firebase"],
    cardTechStack: [
      "React Native",
      "Node.js",
      "Mobile Development",
      "Firebase",
    ],
    cardLink: "https://github.com/nerdboy626/NENA",
    githubLink: "https://github.com/nerdboy626/NENA",
    overview: {
      heading:
        "Bringing people together through the universal language of food.",
      content:
        "NENA is an app built to foster community through cooking and baking. The application encourages users to exchange recipes, explore dishes from different cultures, and engage with fellow food enthusiasts. By combining social features with recipe management tools, NENA creates a space where culinary creativity and meaningful connections can grow side by side.",
    },
    features: {
      heading:
        "Tools designed to encourage sharing, discovery, and connection.",
      content: [
        "Social activity feed that highlights recipes, interactions, and updates from friends",
        "Recipe publishing workflow that supports both private collections and publicly shared creations",
        "Search functionality that helps users quickly discover meals and cooking inspiration",
        "Customizable user profiles featuring editable photos, bios, and personal information",
      ],
    },
    challenges: {
      heading: "Bridging independent work into a cohesive product.",
      content:
        "NENA was developed by a team of four as part of a senior software engineering course. While responsibilities were divided among team members, bringing independently built frontend and backend systems together proved more challenging than expected. Differences in assumptions, implementation details, and integration requirements required extensive collaboration to resolve.\n\nThe experience reinforced the importance of communication in software development. Through regular discussions, testing sessions, and collaborative problem-solving, our team successfully unified the project into a polished final product. It also provided my first essential exposure to how frontend and backend systems communicate, giving me practical experience working across the entire application stack.",
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
      "Node.js",
      "Ticketmaster API",
      "Google Maps API",
    ],
    cardTechStack: [
      "React Native",
      "Node.js",
      "Ticketmaster API",
      "Google Maps API",
    ],
    cardLink: "https://github.com/gxsoto/cs147Lfinalproject",
    githubLink: "https://github.com/gxsoto/cs147Lfinalproject",
    overview: {
      heading: "Helping people build connections through shared experiences.",
      content:
        "Event Finder was created to address a common challenge: discovering local events is easy, but finding people to attend them with is often much harder. This application combines event discovery with social networking features, allowing users to explore activities, connect with individuals who share similar interests, and form impactful relationships through authentic interactions.",
    },
    features: {
      heading: "Discover local events and the communities around them.",
      content: [
        "Event search powered by the Ticketmaster API for browsing local activities and entertainment",
        "Map integration that helps users locate nearby events and see where gatherings are taking place",
        "Profile system supported by global state management for a personalized experience",
        "Social features that connect users attending similar events and sharing common interests",
      ],
    },
    challenges: {
      heading:
        "Taking my first steps into mobile development and external APIs.",
      content:
        "Event Finder represented my first substantial React Native project and my introduction to working with third-party APIs. While designing and developing the application, I was responsible for researching the Ticketmaster API, understanding its documentation, and integrating event data into the platform. My project partner focused primarily on implementing Google Maps functionality.\n\nThe project taught me how to navigate unfamiliar documentation, evaluate API capabilities, and incorporate live data into an application. More importantly, it demonstrated how external services can transform a static product into a dynamic experience that delivers meaningful value to users.",
    },
  },
  {
    id: 4,
    image: RecoveryGrow,
    slug: "recoverygrow",
    title: "RecoveryGrow",
    cardTitle: "RecoveryGrow — Holistic Concussion Recovery",
    tagline:
      "A mobile application that supports concussion recovery through symptom tracking, educational resources, and design focused on accessibility.",
    techStack: [
      "User Research",
      "Prototyping",
      "Accessibility",
      "Figma",
      "React Native",
    ],
    cardTechStack: [
      "User Research",
      "Prototyping",
      "Accessibility",
      "Figma",
      "React Native",
    ],
    cardLink:
      "https://hci.stanford.edu/courses/cs147/2022/au/projects/AccessibleDesignEmily/RecoveryBoard/",
    overview: {
      heading:
        "Supporting concussion recovery through empathy, accessibility, and community.",
      content:
        "RecoveryGrow was designed to address the emotional and psychological challenges that often accompany concussion recovery. While treatment typically focuses on physical symptoms, many individuals also felt isolation, frustration, and uncertainty throughout the healing process. This platform provides tools for symptom tracking, personal reflection, and community engagement, helping users feel supported throughout their recovery journey.",
    },
    features: {
      heading: "Designed to make recovery tracking approachable and simple.",
      content: [
        "Daily wellness logs for monitoring symptoms, mood, and overall recovery progress",
        "Visualizations that help users identify trends and patterns over time",
        "Flexible privacy controls that allow entries to remain personal or be shared with others",
        "Community discussion spaces where users can exchange experiences, encouragement, and advice",
      ],
    },
    challenges: {
      heading: "Created alongside the people we aimed to support",
      content:
        "RecoveryGrow was completed during a ten-week course that required our team to conduct user research, define requirements, design prototypes, and build a working React Native application. Balancing research, design, and development within such a short timeframe demanded strong collaboration and careful prioritization.\n\nThe most meaningful aspect of the project was speaking directly with individuals recovering from concussions. Their testimonies heavily influenced our design decisions and reinforced the importance of user interfaces driven by accessibility. For example, we adopted a darker visual theme after learning that many participants experienced light sensitivity during recovery. This project taught me how user research can directly shape product decisions and create more thoughtful, inclusive solutions.",
    },
  },
];
