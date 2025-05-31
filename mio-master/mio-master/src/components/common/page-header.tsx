import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function PageHeader({ title, description, className, titleClassName, descriptionClassName }: PageHeaderProps) {
  return (
    <header className={cn("py-10 md:py-16 bg-gradient-to-b from-secondary/30 to-transparent", className)}>
      <div className="container mx-auto px-4 text-center">
        <h1 className={cn("text-4xl md:text-5xl font-bold text-primary tracking-tight mb-3", titleClassName)}>
          {title}
        </h1>
        {description && (
          <p className={cn("text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto", descriptionClassName)}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
