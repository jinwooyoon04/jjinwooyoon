"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectVideoProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

export function ProjectVideo({ videoUrl, title, className }: ProjectVideoProps) {
  // Check if it's a YouTube URL
  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  // Check if it's a Vimeo URL
  const isVimeo = videoUrl.includes("vimeo.com");
  // Check if it's a self-hosted video (ends with video extensions)
  const isSelfHosted = /\.(mp4|webm|ogg|mov)$/i.test(videoUrl);

  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Extract Vimeo video ID
  const getVimeoId = (url: string) => {
    const regExp = /(?:vimeo\.com\/)(?:.*\/)?(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  if (isYouTube) {
    const videoId = getYouTubeId(videoUrl);
    if (!videoId) return null;

    return (
      <div className={cn("w-full", className)}>
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title || "Video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isVimeo) {
    const videoId = getVimeoId(videoUrl);
    if (!videoId) return null;

    return (
      <div className={cn("w-full", className)}>
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                title={title || "Video player"}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSelfHosted) {
    return (
      <div className={cn("w-full", className)}>
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <video
                controls
                className="h-full w-full"
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/webm" />
                <source src={videoUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If URL doesn't match any pattern, return null
  return null;
}

