import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'; // Using Linkedin and Youtube as placeholders for Pinterest

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Argile et Art. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Pinterest (représenté par Linkedin)" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
             {/* You can add more links or a newsletter signup here */}
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground/70 mt-6">
          Site web conçu avec passion pour l'artisanat.
        </div>
      </div>
    </footer>
  );
}
