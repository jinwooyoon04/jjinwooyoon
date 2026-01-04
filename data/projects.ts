import { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    id: "1",
    title: "VEX Robotics World Championship - Opportunity Division Winner",
    description:
      "Led Team 6627A as Captain, Driver, and Builder to achieve 1st Place in the Opportunity Division at VEX Worlds Championships 2023, hosted in the Kay Bailey Hutchison Convention Center Dallas. Competing against 80 international teams, designed and built a championship-winning robot through innovative engineering solutions.",
    category: ["Hardware", "Embedded"],
    techStack: ["VEX Robotics", "C++", "Robot Design", "3D Modeling", "Competitive Robotics"],
    slug: "vex-worlds-championship",
    overview: "This project represents the culmination of years of competitive robotics experience, resulting in a championship victory at VEX Worlds 2023. As team captain, driver, and primary builder, I led Team 6627A to achieve 1st place in the Opportunity Division, competing against 80 international teams from around the world. The project involved comprehensive robot design, mechanical engineering, programming, and strategic competition planning.",
    problem: "The VEX Robotics Competition Spin Up game required a robot capable of multiple tasks: collecting and scoring discs, controlling rollers, and navigating the field efficiently. The challenge was designing a robot that could excel in all aspects of the game while remaining reliable under competitive pressure. Additionally, we needed to optimize our design for the specific constraints of the Opportunity Division competition format.",
    solution: "I designed and built a robot featuring Omnidirectional wheels for smooth lateral and longitudinal movement, allowing precise positioning and efficient field navigation. This design was enhanced by our custom tracking wheels that precisely measured the distance the robot would travel. This data was then used in our PID controls and odometry algorithms to perform flawless autonomous movements during matches, as well as the Skills Competition (measured on individual performance). The robot incorporated a sophisticated intake system for rapid disc collection, a scoring mechanism optimized for accuracy and speed, and a roller control system for game element manipulation. The design emphasized reliability, maintainability, and adaptability to different match scenarios. Strategic programming in C++ enabled autonomous routines and driver-assist features that maximized our competitive performance.",
    whatILearned: [
      "Advanced mechanical design principles for competitive robotics",
      "Integration of multiple subsystems (drive, intake, scoring, pneumatics)",
      "Strategic thinking and game analysis for competition optimization",
      "Advanced PID controls and odometry algorithms for precise autonomous movement",
      "Team leadership and collaboration under high-pressure competition conditions",
      "Iterative design and rapid prototyping techniques",
      "Programming autonomous routines and driver control systems",
      "Tracking wheels for precise autonomous movement",
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
    videoUrl: "https://www.youtube.com/watch?v=4tWLlUVQmSc", // Paste your YouTube link here (e.g., "https://www.youtube.com/watch?v=VIDEO_ID")
    overview: "This project required strong skills in storyboarding, video editing, and an understanding of the VEX Robotics community as a whole. Using DaVinci Resolve as our primary editing software and a Canon EOS 7D Mark II for filming, we produced an award-winning short video that earned 1st place and qualified us for the World Championship for the third time that season.",
    problem: "The prompt for the 2022-2023 Vex Robotics Promote Challenge was: “Show us who you are, who you aspire to be, and what makes your team special and successful. Your video should promote your experience with VEX Robotics, and can focus on your team, your program, the competition, your design and build process, your robots, or anything else you can dream of that promotes the fun and excitement of being part of a VEX Robotics competition team.”",
    solution: "I wanted to create a video that truly showed the “colors” of robotics—something most visible to competitors whose passion runs deep. I started with the framing idea of “It’s about (blank)” and used it to tell a story about what VEX Robotics is really about. One thing I stayed focused on was the perspective of non-competitors—parents, teachers, and judges—who often only see VEX from the outside and rarely witness what competitors experience behind the scenes. With that in mind, I opened the video with an unsaturated, muted look that reflects what people might assume VEX Robotics is like. At the climax, I shift into brighter colors and more energetic scenes to capture what the experience actually feels like for competitors. Finally, I end with the line “It’s about you,” followed by “It’s about VEX,” bringing the story full circle.",
    whatILearned: [
      "Story-Boarding and video editing",
      "Color Corrections for specific scenes",
      "Marketting Strategies such as appealing to a focused audience",
      "Using Canon EOS 7D Mark II for filming",
    ],
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

