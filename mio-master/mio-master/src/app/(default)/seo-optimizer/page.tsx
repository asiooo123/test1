import { PageHeader } from '@/components/common/page-header';
import { SeoForm } from '@/components/seo/seo-form';
import { Card, CardContent } from '@/components/ui/card';

export default function SeoOptimizerPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Optimiseur SEO pour Poteries"
        description="Utilisez notre outil basé sur l'IA pour générer des titres et descriptions optimisés pour le référencement de vos créations."
      />
      <div className="container mx-auto px-4 pb-16">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardContent className="p-6 md:p-8">
            <SeoForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
