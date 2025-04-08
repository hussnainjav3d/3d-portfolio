// Copyright Hussnain Javed 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Hussnain Javed",
  description:
    "I bridge the gap between design and development. I take responsibility to craft aesthetic Applications.",
  siteUrl: "https://hussnain.pro/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop secure and efficient systems.",
  "I engineer scalable web architectures.",
  "I deliver robust and dynamic applications.",
  "I design intuitive and responsive UIs.",
  "I automate workflows with modern tech.",
  "I build powerful full-stack applications.",
  "I craft seamless digital solutions.",
  "I create integrated, data-driven apps.",
];

export const EMAIL = "hussnain.jav3d@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/hussnainjav3d",
  github: "https://github.com/hussnainjav3d",
  instagram: "https://www.instagram.com/ahmad_yaqoob89/",
  facebook: "https://www.facebook.com",
  twitter: "https://x.com/hussnainjav3d",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Monitair - Health Care",
    image: "/projects/monitair.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "For doctors to manage sleep apnea patients",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://monitairhealth.com",
    tech: ["typescript", "nestjs", "mongodb", "next", "tailwind"],
  },
  // {
  //   name: "Excessify - CRM ",
  //   image: "/projects/excessify.png",
  //   blurImage: "/projects/blur/myokr-blur.jpg",
  //   description: "Surplus fund Leads management CRM",
  //   gradient: ["#17007B", "#3A2C79"],
  //   url: "https://dev.app.excessifyhq.com/",
  //   tech: ["react", "tailwind", "mongodb", "express"],
  // },
  {
    name: "Tour27 Website",
    image: "/projects/tour27.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Webiste for virtual tours via live streaming ",
    gradient: ["#245B57", "#004741"],
    url: "https://tour27.com/",
    tech: ["typescript", "next", "nestjs", "postgres", "stripe"],
  },
  // {
  //   name: "Nowork AI ",
  //   image: "/projects/nowork.ai.png",
  //   blurImage: "/projects/blur/dl-unify-blur.jpg",
  //   description: "AI content generator and Image manipulator 🚀",
  //   gradient: ["#003052", "#167187"],
  //   url: "https://dlunify.com/",
  //   tech: ["react", "mui", "express", "mongodb"],
  // },
  {
    name: "Veronicas ERP",
    image: "/projects/veronicas.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Complete ERP System for Insurance Company",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://dev.agents.veronicasins.bracketsltd.com",
    tech: ["express", "mongodb", "twilio", "react", "tailwind"],
  },
  // {
  //   name: "Perkforce ",
  //   image: "/projects/perkforce.png",
  //   blurImage: "/projects/blur/huminos-blur.jpg",
  //   description: "A Platform For vendors to showcase the perks for workers",
  //   gradient: ["#17007B", "#3A2C79"],
  //   url: "https://excessquest.com",
  //   tech: ["react", "graphql", "mui", "express", "mongodb"],
  // },
  // {
  //   name: "Excess Quest - SaaS CRM",
  //   image: "/projects/excessquest.png",
  //   blurImage: "/projects/blur/huminos-blur.jpg",
  //   description:
  //     "SaaS Website for the companies that handles the Surplus funds",
  //   gradient: ["#172839", "#334659"],
  //   url: "https://excessquest.com",
  //   tech: ["next", "tailwind", "express", "mongodb", "stripe"],
  // },
  // {
  //   name: "Smart Interview",
  //   image: "/projects/smart-interview.png",
  //   blurImage: "/projects/blur/figgen-blur.jpg",
  //   description:
  //     "AI Based - for Jobs, assessments, screening, AI generated reports",
  //   gradient: ["#1F6582", "#1ABCFE"],
  //   url: "https://monitairhealth.com",
  //   tech: ["react", "mui", "express", "mongodb"],
  // },
  {
    name: "Veronicas Quotes",
    image: "/projects/veronicaquote.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Quoting website for insurance",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://veronicasquote.com/",
    tech: ["react", "tailwind", "sockets", "twilio", "stripe"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "typescript",
    "react",
    "next",
    "redux",
    "react query",
    "tailwind",
    "mui",
    "sass",
    "html",
    "css",
  ],
  backend: [
    "javascript",
    "typescript",
    "nodejs",
    "nestjs",
    "express",
    "python",
    "flask",
    "graphql",
    "mongodb",
    "sockets",
    "postgresql",
    "sql",
    "supabase",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],
  other: [
    "git",
    "github",
    "aws",
    "nginx",
    "gpt",
    "twilio",
    "stripe",
    "jira",
    "clickup",
    "trello",
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Software Engineer",
    size: ItemSize.SMALL,
    subtitle: "Full Stack Stack Developer @ Brackets",
    image: "/timeline/brackets.svg",
    slideImage: "/timeline/brackets.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "MERN Stack Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "As a MERN stack engineer, I've worked on multiple MedTech and FinTech solutions",
    image: "/timeline/brackets.svg",
    slideImage: "/timeline/brackets.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Computer Science Graduate",
    size: ItemSize.SMALL,
    subtitle: "Graduated in computer science from University of Gujrat",
    image: "/timeline/uog.svg",
    slideImage: "/timeline/brackets.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Engineer",
    size: ItemSize.SMALL,
    subtitle: "started working as a mern stack developer",
    image: "/timeline/innovate.svg",
    slideImage: "/timeline/brackets.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fiverr (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/fiverr.svg",
    slideImage: "/timeline/fiverr.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
