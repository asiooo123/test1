import Image from 'next/image';
import type { PotteryItem } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import { Button } from '../ui/button'; // Added this import

interface PotteryItemCardProps {
  item: PotteryItem;
}

export function PotteryItemCard({ item }: PotteryItemCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group bg-card">
      <CardHeader className="p-0 relative">
        <div className="aspect-[3/4] overflow-hidden">
           <Image
            src={item.imageUrl}
            alt={item.name}
            width={600}
            height={800}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint={item.dataAiHint}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            <Eye className="mr-2 h-4 w-4" /> Voir détails
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">{item.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-2 h-10 overflow-hidden">{item.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">{item.style}</Badge>
          <Badge variant="outline" className="text-xs">{item.technique}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center border-t mt-auto">
        {item.price ? (
          <p className="text-lg font-semibold text-primary">{item.price}</p>
        ) : (
          <p className="text-sm text-muted-foreground">Prix sur demande</p>
        )}
        {item.availability && (
           <Badge 
            variant={item.availability === 'En stock' ? 'default' : item.availability === 'Vendu' ? 'destructive' : 'outline'}
            className={`text-xs ${item.availability === 'En stock' ? 'bg-green-600 text-white' : item.availability === 'Vendu' ? 'bg-red-600 text-white' : 'border-yellow-500 text-yellow-600'}`}
            >
            {item.availability}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
