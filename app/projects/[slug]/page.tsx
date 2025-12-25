import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectGallery } from "@/components/project-gallery";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="mb-12 flex flex-wrap gap-4">
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        )}

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                This project demonstrates practical application of engineering
                principles in a real-world context. The implementation combines
                theoretical knowledge with hands-on development to create a
                functional solution.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Problem Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                The challenge addressed by this project involves creating an
                efficient and reliable solution that meets specific performance
                requirements while maintaining cost-effectiveness and
                scalability.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Solution</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                The solution implements a well-designed architecture that
                addresses the core requirements. Key design decisions were made
                to optimize performance and ensure maintainability.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Project Gallery Section - Only for VEX Worlds Championship */}
        {project.slug === "vex-worlds-championship" && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Project Gallery</h2>
            <ProjectGallery />
          </section>
        )}

        {/* What I Learned Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">What I Learned</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Gained deeper understanding of system design and
                  implementation challenges
                </li>
                <li>
                  Improved skills in debugging and optimization techniques
                </li>
                <li>
                  Learned to balance trade-offs between performance, cost, and
                  complexity
                </li>
                <li>
                  Enhanced knowledge of best practices in the relevant domain
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

