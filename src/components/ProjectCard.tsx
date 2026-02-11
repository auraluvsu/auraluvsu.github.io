import { LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  imageUrl?: string;
  link?: string;
}

export function ProjectCard({ title, description, technologies, icon: Icon, imageUrl, link }: ProjectCardProps) {
  const CardContent = (
    <>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--jade-100)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Image background if provided */}
      {imageUrl && (
        <div className="absolute right-0 top-0 w-32 h-32 opacity-5 overflow-hidden rounded-br-2xl">
          <img 
            src={imageUrl} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--jade-200)] to-[var(--jade-300)] mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[var(--jade-700)]" />
        </div>

        {/* Title */}
        <h3 className="mb-3">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="bg-secondary hover:bg-accent transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="group relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {CardContent}
    </div>
  );
}