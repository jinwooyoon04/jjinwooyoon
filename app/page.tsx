"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ImageSlideshow } from "@/components/image-slideshow";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

// Robot images for slideshow - add your image paths here
const robotImages = [
  {
    src: "/spinup_robot.jpg",
    alt: "VEX Robotics Competition Robot - Team 6627A with Amaze Award",
  },
  // Add more images here as you upload them:
  // {
  //   src: "/robot-image-2.jpg",
  //   alt: "Description of second image",
  // },
];

const skills = [
  "Python",
  "AutoDesk Inventor",
  "Fusion 360",
  "Da Vinci Resolve",
  "Robotics",
  "VEX Robotics",
  "3D Design",
  "Video Editing",
  "Mentoring",
  "Leadership",
  "Team Management",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                Jay Jinwoo Yoon
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
              >
                Electrical & Computer Engineering student at Cornell University
                <br />
                Robotics enthusiast, mentor, and competitive engineering professional
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
              >
                <Button size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Robot Image Slideshow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <ImageSlideshow
                images={robotImages}
                autoPlay={robotImages.length > 1}
                autoPlayInterval={5000}
                showControls={robotImages.length > 1}
              />
              {/* Decorative badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border bg-background px-4 py-2 shadow-md"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  VEX Worlds 2023 • Amaze Award Winner
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of my robotics projects, engineering work, and competitive achievements
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            ))}
        </div>
        </motion.div>
      </section>
    </div>
  );
}
