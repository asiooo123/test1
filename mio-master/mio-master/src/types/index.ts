export type PotteryStyle = 'Moderne' | 'Rustique' | 'Minimaliste' | 'Traditionnel' | 'Abstrait';
export type PotteryTechnique = 'Tourné' | 'Modelé à la main' | 'Sculpté' | 'Plaque' | 'Raku';

export interface PotteryItem {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  dataAiHint: string; // For Unsplash keyword search for placeholders
  style: PotteryStyle;
  technique: PotteryTechnique;
  price?: string;
  dimensions?: string;
  availability?: 'En stock' | 'Sur commande' | 'Vendu';
}

export interface EventItem {
  id: string;
  title: string;
  date: string; 
  time?: string;
  description: string;
  location?: string;
  imageUrl?: string;
  dataAiHint?: string;
  category: 'Atelier' | 'Exposition' | 'Marché' | 'Formation';
}
