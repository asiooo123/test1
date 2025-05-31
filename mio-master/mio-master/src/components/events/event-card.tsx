import Image from 'next/image';
import type { EventItem } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card">
      {event.imageUrl && (
        <CardHeader className="p-0 relative">
          <div className="aspect-video overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={800}
              height={500}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint={event.dataAiHint || 'event details'}
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
        <Badge variant="secondary" className="mb-2 text-sm bg-accent text-accent-foreground">{event.category}</Badge>
        <CardTitle className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{event.title}</CardTitle>
        
        <div className="space-y-2 text-muted-foreground text-sm">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-primary" />
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter className="p-6 border-t mt-auto">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
          En savoir plus
        </Button>
      </CardFooter>
    </Card>
  );
}
