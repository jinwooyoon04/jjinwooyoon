"use client";

import { ImageSlideshow } from "@/components/image-slideshow";

// Robot images for the VEX Worlds Championship project gallery
// Ordered chronologically and by importance: completed robot first, then build process, details, and competition photos
const projectImages = [
  {
    src: "/spinup_robot.jpg",
    alt: "VEX Robotics Competition Robot - Team 6627A Championship Winning Robot",
    caption: "The completed championship-winning robot for VEX Worlds 2023, featuring mecanum wheels for omnidirectional movement and a sophisticated intake system.",
  },
  {
    src: "/IMG_1289.JPG",
    alt: "Robot build process - Mechanical assembly and construction",
    caption: "Early build stage showing the mechanical assembly process with bearings, structural components, and precision fastening.",
  },
  {
    src: "/IMG_1293.jpg",
    alt: "Mecanum wheel assembly - Omni-directional wheel mechanism detail",
    caption: "Close-up of the mecanum wheel assembly, showcasing the angled rollers that enable smooth omnidirectional movement on the competition field.",
  },
  {
    src: "/IMG_1303.JPG",
    alt: "Robot build stage - Structural components and assembly",
    caption: "Mid-build stage displaying the robot's structural framework with VEX metal channels, gears, and chain drive systems.",
  },
  {
    src: "/IMG_1304.JPG",
    alt: "Advanced robot build - Complex mechanical systems and pneumatics",
    caption: "Advanced build phase featuring pneumatic cylinders, complex gear trains, and integrated mechanical systems for competition performance.",
  },
  {
    src: "/IMG_1348.jpg",
    alt: "Competition robot - Completed robot on VEX Worlds field",
    caption: "The fully assembled robot positioned on the VEX Worlds competition field, ready for competition matches.",
  },
  {
    src: "/IMG_1385.jpg",
    alt: "Team photo - Team 6627A with championship robot",
    caption: "Team 6627A members proudly displaying the championship robot at VEX Worlds 2023 after winning the Opportunity Division.",
  },
  {
    src: "/IMG_1666.JPG",
    alt: "Workspace organization - Robot parts and tools",
    caption: "Organized workspace showing VEX Robotics components, tools, and equipment used during the build and competition preparation.",
  },
  {
    src: "/IMG_1668.JPG",
    alt: "Robot detail - Close-up of mechanical components",
    caption: "Detailed view of the robot's intricate mechanical components, wiring, and precision engineering that contributed to championship performance.",
  },
  {
    src: "/IMG_4329.jpg",
    alt: "Competition action - Robot during VEX Worlds competition",
    caption: "Robot in action during a VEX Worlds competition match, demonstrating its capabilities on the competition field.",
  },
  {
    src: "/IMG_4881.jpg",
    alt: "Robot showcase - Additional competition and build photos",
    caption: "Additional view of the robot showcasing its design features and competition-ready configuration.",
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

