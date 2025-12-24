import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn("text-xs font-medium", className)}
    >
      {skill}
    </Badge>
  );
}

