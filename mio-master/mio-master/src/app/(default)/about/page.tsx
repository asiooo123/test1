import Image from 'next/image';
import { PageHeader } from '@/components/common/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Droplets, Mountain } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Notre Histoire, Notre Passion"
        description="Découvrez l'âme d'Argile et Art, un atelier où la terre prend vie entre des mains passionnées."
      />
      <div className="container mx-auto px-4 pb-16 space-y-12">
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/800x600.png"
                alt="L'artisan potier à l'oeuvre"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint="artisan pottery"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-primary mb-4">L'Artisan Derrière Argile et Art</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Animé par une passion profonde pour la céramique, notre artisan (Nom à insérer) a fondé Argile et Art avec la vision de créer des pièces qui allient esthétique intemporelle et fonctionnalité. Fort de (Nombre) années d'expérience, chaque création est le fruit d'un savoir-faire méticuleux et d'une recherche constante de nouvelles formes et textures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon voyage dans le monde de la poterie a commencé (Raconter brièvement le début de l'histoire, une anecdote). Depuis, je n'ai cessé d'explorer les infinies possibilités qu'offre l'argile, ce matériau humble et noble à la fois.
              </p>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Notre Démarche Artistique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Chez Argile et Art, nous croyons en une poterie qui a du sens. Nos créations s'inspirent de la nature, des traditions artisanales et des lignes épurées du design contemporain. Nous privilégions des matériaux de qualité et des techniques respectueuses de l'environnement.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <Flame className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Authenticité</h3>
                <p className="text-sm text-muted-foreground">Chaque pièce est unique, entièrement façonnée à la main, portant l'empreinte du geste créateur.</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <Droplets className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Qualité</h3>
                <p className="text-sm text-muted-foreground">Utilisation de grès et porcelaines de haute qualité, cuits à haute température pour une durabilité optimale.</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <Mountain className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Inspiration</h3>
                <p className="text-sm text-muted-foreground">Les formes, couleurs et textures sont puisées dans les paysages naturels et l'harmonie des éléments.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Nos Valeurs</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-inside space-y-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <li><strong>Passion :</strong> L'amour de l'argile et du travail manuel est au cœur de chaque création.</li>
              <li><strong>Respect :</strong> De la matière, des techniques ancestrales et de l'environnement.</li>
              <li><strong>Partage :</strong> Transmettre notre savoir-faire à travers des ateliers et des échanges.</li>
              <li><strong>Excellence :</strong> Une recherche constante de la perfection dans chaque détail.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
