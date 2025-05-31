
import { PageHeader } from '@/components/common/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListOrdered, Edit3, Users, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminDashboardPage() {
  const adminSections = [
    {
      title: 'Gestion des Poteries',
      description: 'Ajouter, modifier ou supprimer des pièces de la galerie.',
      icon: ListOrdered,
      link: '#', // Placeholder link
      status: 'Actif',
    },
    {
      title: 'Gestion des Événements',
      description: 'Créer et mettre à jour les ateliers et expositions.',
      icon: Edit3,
      link: '#', // Placeholder link
      status: 'Actif',
    },
    {
      title: 'Gestion des Utilisateurs',
      description: 'Visualiser et gérer les comptes utilisateurs.',
      icon: Users,
      link: '#', // Placeholder link
      status: 'À venir',
    },
    {
      title: 'Paramètres du Site',
      description: 'Configurer les options générales du site.',
      icon: Settings,
      link: '#', // Placeholder link
      status: 'À venir',
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Panneau d'Administration"
        description="Gérez le contenu et les fonctionnalités de votre site Argile et Art."
        className="bg-gradient-to-b from-muted/50 to-transparent"
      />
      <div className="container mx-auto px-4 pb-16 space-y-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Tableau de Bord Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bienvenue dans l'espace d'administration. Utilisez les sections ci-dessous pour gérer votre site.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {adminSections.map((section) => (
            <Card key={section.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold text-foreground">{section.title}</CardTitle>
                   <p className="text-xs text-muted-foreground pt-1">
                    {section.description}
                  </p>
                </div>
                <section.icon className="h-6 w-6 text-accent flex-shrink-0 ml-4" />
              </CardHeader>
              <CardContent className="mt-auto flex flex-col items-start">
                {section.status === 'À venir' ? (
                  <Button variant="outline" disabled className="mt-2 text-xs">
                    {section.status}
                  </Button>
                ) : (
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 h-auto mt-2">
                    <Link href={section.link}>
                      Accéder à la section
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
