"use client";

import { ImageSlideshow } from "@/components/image-slideshow";

// Robot images for the VEX Worlds Championship project gallery
// Ordered chronologically and by importance: completed robot first, then build process, details, and competition photos
const projectImages = [
  {
    src: "/spinup_robot.jpg",
    alt: "VEX Robotics Competition Robot - Team 6627A Championship Winning Robot",
    caption: "The completed championship-winning robot for VEX Worlds 2023 presenting the Amaze Award, featuring omni wheels for lateral and longitudinal movement and a sophisticated intake system.",
  },
  {
    src: "/IMG_1289.JPG",
    alt: "Robot build process - Mechanical assembly and construction",
    caption: "Early build stage showing the mechanical assembly process with bearings to reduce friction on intake system, structural components, and precision fastening.",
  },
  {
    src: "/IMG_1293.jpg",
    alt: "Mecanum wheel assembly - Omni-directional wheel mechanism detail",
    caption: "Close-up of the framework, showcasing the foundation the robot was built on.",
  },
  {
    src: "/IMG_1303.JPG",
    alt: "Robot build stage - Structural components and assembly",
    caption: "Mid-build stage displaying the robots intake system centered upon a 2400 RPM first stage, 4 point bracing that doubles as a chain tensioner, and piston mechanism to allow multi-disk maneuvers.",
  },
  {
    src: "/IMG_1304.JPG",
    alt: "Advanced robot build - Complex mechanical systems and pneumatics",
    caption: "Close-up of custom made tracking wheel housings that were mounted on hinges to allow contact to floor at all times.",
  },
  {
    src: "/IMG_1348.jpg",
    alt: "Competition robot - Completed robot on VEX Worlds field",
    caption: "Complete drive train and catapult mechanism that allowed disc collection and scoring.",
  },
  {
    src: "/IMG_1385.jpg",
    alt: "Team photo - Team 6627A with championship robot",
    caption: "Complete robot, ready to move onto programming testing for PID and odometry algorithms.",
  },
  {
    src: "/IMG_1666.JPG",
    alt: "Workspace organization - Robot parts and tools",
    caption: "Piston mechanism that allowed robot to adjust the distance at which discs were shot out of catapult.",
  },
  {
    src: "/IMG_1668.JPG",
    alt: "Robot detail - Close-up of mechanical components",
    caption: "Side view of piston mechanism that adjusted shooting distance of discs.",
  },
  {
    src: "/IMG_4329.jpg",
    alt: "Competition action - Robot during VEX Worlds competition",
    caption: "Anodized aluminum casing that allowed for a sleek and lightweight design.",
  },
  {
    src: "/IMG_4881.jpg",
    alt: "Robot showcase - Additional competition and build photos",
    caption: "Post match photo with Team 6627A members and the championship robot.",
  },
];

export function ProjectGallery() {
  return (
    <div className="w-full">
      <ImageSlideshow
        images={projectImages}
        autoPlay={true}
        autoPlayInterval={6000}
        showControls={true}
        className="w-full"
      />
    </div>
  );
}
