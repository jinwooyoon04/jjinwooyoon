"use client";

import { ImageSlideshow } from "@/components/image-slideshow";

// Robot images for the VEX Worlds Championship project gallery
// Ordered chronologically and by importance: completed robot first, then build process, details, and competition photos
const projectImages = [
  {
    src: "/spinup_robot.jpg",
    alt: "VEX Robotics Competition Robot - Team 6627A Championship Winning Robot",
  },
  {
    src: "/IMG_1289.JPG",
    alt: "Robot build process - Mechanical assembly and construction",
  },
  {
    src: "/IMG_1293.jpg",
    alt: "Mecanum wheel assembly - Omni-directional wheel mechanism detail",
  },
  {
    src: "/IMG_1303.JPG",
    alt: "Robot build stage - Structural components and assembly",
  },
  {
    src: "/IMG_1304.JPG",
    alt: "Advanced robot build - Complex mechanical systems and pneumatics",
  },
  {
    src: "/IMG_1348.jpg",
    alt: "Competition robot - Completed robot on VEX Worlds field",
  },
  {
    src: "/IMG_1385.jpg",
    alt: "Team photo - Team 6627A with championship robot",
  },
  {
    src: "/IMG_1666.JPG",
    alt: "Workspace organization - Robot parts and tools",
  },
  {
    src: "/IMG_1668.JPG",
    alt: "Robot detail - Close-up of mechanical components",
  },
  {
    src: "/IMG_4329.jpg",
    alt: "Competition action - Robot during VEX Worlds competition",
  },
  {
    src: "/IMG_4881.jpg",
    alt: "Robot showcase - Additional competition and build photos",
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
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Swipe or use arrow buttons to navigate through the gallery
      </p>
    </div>
  );
}

