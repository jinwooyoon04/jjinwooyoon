"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, Project } from "@/components/project-card";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | "All">("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore my robotics projects, competitive achievements, mentorship work, and engineering designs
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              selectedCategory === "All"
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
            )}
            aria-pressed={selectedCategory === "All"}
          >
            All
          </button>
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selectedCategory === category
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
              )}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

