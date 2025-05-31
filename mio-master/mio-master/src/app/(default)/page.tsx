import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Users } from 'lucide-react';
import { mockPotteryItems } from '@/lib/mock-data';
import { PotteryItemCard } from '@/components/gallery/pottery-item-card'; // Assuming this component will be created

export default function HomePage() {
  const featuredItems = mockPotteryItems.slice(0, 3); // Take first 3 items as featured

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Bannière atelier de poterie"
            layout="fill"
            objectFit="cover"
            quality={80}
            data-ai-hint="pottery workshop"
          />
           <div className="absolute inset-0 bg-background/30"></div> {/* Overlay for better text readability */}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Argile et Art
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            L'art de la poterie façonné à la main, où chaque pièce raconte une histoire unique.
          </p>
          <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <Link href="/gallery">
                Découvrir la Galerie <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <Link href="/events">
                Nos Ateliers <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Bienvenue à l'atelier</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Chez Argile et Art, nous célébrons la beauté de l'artisanat. Chaque poterie est créée avec soin, passion et une attention particulière aux détails, transformant l'argile brute en œuvres d'art intemporelles.
          </p>
           <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
              <ShoppingBag className="h-10 w-10 text-accent mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Créations Uniques</h3>
              <p className="text-muted-foreground text-sm">Des pièces originales, façonnées à la main, parfaites pour embellir votre quotidien ou offrir un cadeau spécial.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-accent mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Ateliers & Formations</h3>
              <p className="text-muted-foreground text-sm">Partagez notre passion pour l'argile lors de nos ateliers créatifs, adaptés à tous les niveaux.</p>
            </div>
             <div className="p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-accent mb-3 lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              <h3 className="text-xl font-semibold text-foreground mb-2">Artisanat d'Art</h3>
              <p className="text-muted-foreground text-sm">Un savoir-faire authentique, valorisant des techniques traditionnelles et contemporaines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pottery Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-foreground mb-10">Nos Nouveautés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <PotteryItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/gallery">
                Voir Toute la Collection
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
