import type { PotteryItem, EventItem } from '@/types';

export const mockPotteryItems: PotteryItem[] = [
  {
    id: '1',
    name: 'Vase Ondine',
    shortDescription: 'Vase élégant aux formes ondulées, inspiré par l\'eau.',
    description: 'Ce vase en céramique émaillée capture la fluidité de l\'eau avec ses courbes douces et sa finition brillante. Parfait pour des bouquets délicats ou comme pièce décorative unique. Fait à la main avec passion.',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'pottery vase',
    style: 'Moderne',
    technique: 'Tourné',
    price: '75€',
    dimensions: 'H: 25cm, L: 12cm',
    availability: 'En stock',
  },
  {
    id: '2',
    name: 'Bol Terroir Brut',
    shortDescription: 'Bol rustique en grès, texture naturelle et chaleureuse.',
    description: 'Un bol robuste et authentique, idéal pour les soupes, salades ou comme vide-poche. Sa texture brute et ses tons terreux apportent une touche de nature à votre intérieur. Chaque pièce est unique.',
    imageUrl: 'https://placehold.co/600x600.png',
    dataAiHint: 'clay bowl',
    style: 'Rustique',
    technique: 'Modelé à la main',
    price: '45€',
    dimensions: 'D: 18cm, H: 8cm',
    availability: 'En stock',
  },
  {
    id: '3',
    name: 'Tasse Zénith',
    shortDescription: 'Tasse minimaliste pour un moment de calme et de sérénité.',
    description: 'Design épuré et couleur neutre pour cette tasse qui invite à la contemplation. Parfaite pour votre thé ou café matinal. L\'émail satiné offre une prise en main agréable.',
    imageUrl: 'https://placehold.co/600x600.png',
    dataAiHint: 'ceramic mug',
    style: 'Minimaliste',
    technique: 'Tourné',
    price: '30€',
    dimensions: 'H: 9cm, D: 8cm',
    availability: 'Sur commande',
  },
  {
    id: '4',
    name: 'Plat Héritage',
    shortDescription: 'Grand plat de service aux motifs traditionnels revisités.',
    description: 'Inspiré des faïences anciennes, ce plat combine tradition et modernité. Idéal pour présenter vos mets lors de grandes occasions ou comme centre de table. Peint à la main.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'serving platter',
    style: 'Traditionnel',
    technique: 'Plaque',
    price: '120€',
    dimensions: 'L: 40cm, W: 28cm',
    availability: 'En stock',
  },
  {
    id: '5',
    name: 'Sculpture Écorce',
    shortDescription: 'Pièce sculpturale abstraite évoquant la texture de l\'écorce.',
    description: 'Une œuvre d\'art unique qui explore les textures et les formes organiques. Cette sculpture en grès chamotté est une pièce maîtresse qui suscitera la conversation.',
    imageUrl: 'https://placehold.co/700x900.png',
    dataAiHint: 'ceramic sculpture',
    style: 'Abstrait',
    technique: 'Sculpté',
    price: '250€',
    dimensions: 'H: 40cm, L: 20cm, P: 15cm',
    availability: 'Vendu',
  },
  {
    id: '6',
    name: 'Assiettes Lune Noire',
    shortDescription: 'Ensemble de quatre assiettes en Raku, effet craquelé unique.',
    description: 'Ces assiettes issues de la technique Raku offrent un contraste saisissant entre le noir profond de l\'enfumage et les craquelures de l\'émail. Chaque assiette est une œuvre d\'art.',
    imageUrl: 'https://placehold.co/700x700.png',
    dataAiHint: 'raku plates',
    style: 'Moderne',
    technique: 'Raku',
    price: '160€ (le set de 4)',
    dimensions: 'D: 22cm',
    availability: 'Sur commande',
  },
];

export const mockEvents: EventItem[] = [
  {
    id: '1',
    title: 'Atelier Découverte du Tournage',
    date: 'Tous les Samedis',
    time: '10:00 - 13:00',
    description: 'Initiez-vous à l\'art du tournage sur potier. Repartez avec votre création ! Ouvert à tous les niveaux.',
    location: 'À l\'atelier Argile et Art',
    imageUrl: 'https://placehold.co/800x500.png',
    dataAiHint: 'pottery workshop',
    category: 'Atelier',
  },
  {
    id: '2',
    title: 'Exposition "Terres Vivantes"',
    date: 'Du 15 au 30 Septembre 2024',
    time: '14:00 - 18:00 (Mar-Dim)',
    description: 'Découvrez ma nouvelle collection inspirée par les éléments naturels. Vernissage le 14 Septembre à 18h.',
    location: 'Galerie des Artisans, Centre-Ville',
    imageUrl: 'https://placehold.co/800x500.png',
    dataAiHint: 'art exhibition',
    category: 'Exposition',
  },
  {
    id: '3',
    title: 'Marché des Créateurs',
    date: 'Dimanche 5 Octobre 2024',
    time: '09:00 - 17:00',
    description: 'Retrouvez-moi au marché annuel des créateurs. Une belle occasion de trouver des pièces uniques.',
    location: 'Place de la Mairie',
    imageUrl: 'https://placehold.co/800x500.png',
    dataAiHint: 'craft market',
    category: 'Marché',
  },
  {
    id: '4',
    title: 'Formation Émaillage et Cuissons Spéciales',
    date: 'Weekend du 18-19 Novembre 2024',
    time: '09:30 - 17:00',
    description: 'Approfondissez vos connaissances en émaillage et découvrez les secrets des cuissons Raku et alternatives. Pour potiers confirmés.',
    location: 'À l\'atelier Argile et Art',
    imageUrl: 'https://placehold.co/800x500.png',
    dataAiHint: 'glazing techniques',
    category: 'Formation',
  },
];
