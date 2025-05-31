
import type { Metadata } from 'next';
import { Lora, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/auth-provider'; // Added AuthProvider

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Argile et Art - Poterie Artisanale',
  description: 'Découvrez des créations uniques de poterie artisanale. Atelier, boutique et formations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lora.variable} ${geistMono.variable} font-serif antialiased`}>
        <AuthProvider> {/* Wrapped children with AuthProvider */}
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
