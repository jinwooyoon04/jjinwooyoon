import { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    id: "1",
    title: "VEX Robotics World Championship - Opportunity Division Winner",
    description:
      "Led Team 6627A as Captain, Driver, and Builder to achieve 1st Place in the Opportunity Division at VEX Worlds Championships 2023, hosted in the Kay Bailey Hutchison Convention Center Dallas. Competing against 80 international teams, designed and built a championship-winning robot through innovative engineering solutions.",
    category: ["Hardware", "Embedded"],
    techStack: ["VEX Robotics", "Python", "Robot Design", "3D Modeling", "Competitive Robotics"],
    slug: "vex-worlds-championship",
    overview: "This project represents the culmination of years of competitive robotics experience, resulting in a championship victory at VEX Worlds 2023. As team captain, driver, and primary builder, I led Team 6627A to achieve 1st place in the Opportunity Division, competing against 80 international teams from around the world. The project involved comprehensive robot design, mechanical engineering, programming, and strategic competition planning.",
    problem: "The VEX Robotics Competition Spin Up game required a robot capable of multiple tasks: collecting and scoring discs, controlling rollers, and navigating the field efficiently. The challenge was designing a robot that could excel in all aspects of the game while remaining reliable under competitive pressure. Additionally, we needed to optimize our design for the specific constraints of the Opportunity Division competition format.",
    solution: "I designed and built a robot featuring mecanum wheels for omnidirectional movement, allowing precise positioning and efficient field navigation. The robot incorporated a sophisticated intake system for rapid disc collection, a scoring mechanism optimized for accuracy, and a roller control system for game element manipulation. The design emphasized reliability, maintainability, and adaptability to different match scenarios. Strategic programming in Python enabled autonomous routines and driver-assist features that maximized our competitive performance.",
    whatILearned: [
      "Advanced mechanical design principles for competitive robotics",
      "Integration of multiple subsystems (drive, intake, scoring, pneumatics)",
      "Strategic thinking and game analysis for competition optimization",
      "Team leadership and collaboration under high-pressure competition conditions",
      "Iterative design and rapid prototyping techniques",
      "Programming autonomous routines and driver control systems",
    ],
  },
  {
    id: "2",
    title: "VEX Online Challenges - Promote Challenge Winner",
    description:
      "Won 1st place in the Promote Challenge amongst 10,000+ teams/participants. Created promotional content showcasing robotics program achievements, raising $10,000+ from sponsors including RAISE3D and Code Ninjas.",
    category: ["Software", "Hardware"],
    techStack: ["Video Editing", "Da Vinci Resolve", "Marketing", "Content Creation"],
    slug: "vex-promote-challenge",
  },
  {
    id: "3",
    title: "Robotics Mentorship & Curriculum Development",
    description:
      "Developed and implemented comprehensive robotics curriculum for 100+ students across multiple programs. As Lead Staff at Tech X Robotics, created optimized learning workflows preparing students for competitive seasons. All coached teams advanced to World Championships.",
    category: ["Software", "Hardware"],
    techStack: ["Curriculum Development", "Mentoring", "Python", "Robotics Education", "Leadership"],
    slug: "robotics-mentorship",
  },
  {
    id: "4",
    title: "3D Design & Engineering Projects",
    description:
      "Utilized AutoDesk Inventor and Fusion 360 for advanced 3D modeling and engineering design. Completed Case Western Reserve certification in Engineering From 2D Sketch to 3D. Applied design skills to competitive robotics projects and educational programs.",
    category: ["Hardware", "Software"],
    techStack: ["AutoDesk Inventor", "Fusion 360", "3D Design", "CAD", "Engineering"],
    slug: "3d-design-projects",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories = ["Hardware", "Software", "Embedded"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

