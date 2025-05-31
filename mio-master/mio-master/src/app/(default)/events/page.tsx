import { PageHeader } from '@/components/common/page-header';
import { EventCard } from '@/components/events/event-card';
import { mockEvents } from '@/lib/mock-data';

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Ateliers et Événements"
        description="Participez à nos ateliers, découvrez nos expositions et retrouvez-nous lors des marchés d'artisans."
      />
      <div className="container mx-auto px-4 pb-16">
        {mockEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">Aucun événement programmé pour le moment. Revenez bientôt !</p>
          </div>
        )}
      </div>
    </div>
  );
}
