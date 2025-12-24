import { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    id: "1",
    title: "VEX Robotics World Championship - Opportunity Division Winner",
    description:
      "Led Team 6627A as Captain, Driver, and Builder to achieve 1st Place in the Opportunity Division at VEX Worlds Championships 2023, competing against 80 international teams. Designed and built a championship-winning robot through innovative engineering solutions.",
    category: ["Hardware", "Embedded"],
    techStack: ["VEX Robotics", "Python", "Robot Design", "3D Modeling", "Competitive Robotics"],
    slug: "vex-worlds-championship",
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

