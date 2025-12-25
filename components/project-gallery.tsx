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
    src: "/robot_build_1.jpg",
    alt: "Early build stage - Hand holding mechanical assembly with bearing and structural components",
  },
  {
    src: "/robot_mecanum_wheel.jpg",
    alt: "Mecanum wheel assembly - Close-up of omni-directional wheel mechanism with rollers",
  },
  {
    src: "/robot_build_2.jpg",
    alt: "Mid-build stage - Partially assembled robot structure with gears and structural beams",
  },
  {
    src: "/robot_pneumatic.jpg",
    alt: "Advanced build - Complex robot assembly with pneumatic cylinders and mechanical systems",
  },
  {
    src: "/robot_competition_1.jpg",
    alt: "Competition field - Completed robot on VEX Worlds competition field with game elements",
  },
  {
    src: "/robot_team_photo.jpg",
    alt: "Team photo - Team 6627A members with championship robot at VEX Worlds competition",
  },
  {
    src: "/robot_workspace.jpg",
    alt: "Workspace organization - Robot parts, tools, and components organized on workbench",
  },
  {
    src: "/robot_detail.jpg",
    alt: "Robot detail - Close-up view of intricate mechanical components and wiring",
  },
  {
    src: "/robot_competition_2.jpg",
    alt: "Competition action - Robot in action on competition field during VEX Worlds",
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

