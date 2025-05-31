import { PageHeader } from '@/components/common/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactDetails } from '@/components/contact/contact-details';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contactez-Nous"
        description="Pour toute question, commande spéciale ou inscription à un atelier, n'hésitez pas à nous écrire. Nous serons ravis de vous répondre."
      />
      <div className="container mx-auto px-4 pb-16">
        <Card className="shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-card">
              <h2 className="text-2xl font-semibold text-primary mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
            <div className="p-8 md:p-12 bg-secondary/30 border-t md:border-t-0 md:border-l border-border">
               <h2 className="text-2xl font-semibold text-primary mb-6">Nos Coordonnées</h2>
              <ContactDetails />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
