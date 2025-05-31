import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function ContactDetails() {
  const contactInfo = [
    {
      icon: Phone,
      text: '+33 6 12 34 56 78',
      href: 'tel:+33612345678',
      label: 'Téléphone',
    },
    {
      icon: Mail,
      text: 'contact@argileetart.fr',
      href: 'mailto:contact@argileetart.fr',
      label: 'Email',
    },
    {
      icon: MapPin,
      text: '12 Rue de la Poterie, 75000 Paris (Visite sur RDV)',
      href: '#', // Could link to Google Maps
      label: 'Adresse',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', 'data-ai-hint': 'social media' },
    { icon: Facebook, href: '#', label: 'Facebook', 'data-ai-hint': 'social media' },
    { icon: Linkedin, href: '#', label: 'Pinterest (via Linkedin icon)', 'data-ai-hint': 'social media' }, // Placeholder for Pinterest
  ];

  return (
    <div className="space-y-8">
      <div>
        {/* Optional: Placeholder for a map image or embedded map */}
        {/* <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
            <Image src="https://placehold.co/600x350.png" alt="Map placeholder" width={600} height={350} className="rounded-lg object-cover" data-ai-hint="map location" />
        </div> */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
            Nous sommes toujours heureux d'échanger avec vous. Voici comment nous joindre ou nous trouver.
        </p>
        <ul className="space-y-4">
          {contactInfo.map((item, index) => (
            <li key={index} className="flex items-start">
              <item.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium text-foreground block">{item.label}</span>
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors break-words">
                    {item.text}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">Suivez-nous</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-accent text-primary hover:text-accent-foreground transition-colors shadow-sm"
              data-ai-hint={social['data-ai-hint']}
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
