
"use client";

import { useState, useMemo } from 'react';
import { mockPotteryItems } from '@/lib/mock-data';
import type { PotteryItem, PotteryStyle, PotteryTechnique } from '@/types';
import { PageHeader } from '@/components/common/page-header';
import { PotteryItemCard } from '@/components/gallery/pottery-item-card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';
import { SlidersHorizontal } from 'lucide-react'; // Changed from @radix-ui/react-icons

const uniqueStyles = Array.from(new Set(mockPotteryItems.map(item => item.style)));
const uniqueTechniques = Array.from(new Set(mockPotteryItems.map(item => item.technique)));

export default function GalleryPage() {
  const [selectedStyle, setSelectedStyle] = useState<PotteryStyle | 'all'>('all');
  const [selectedTechnique, setSelectedTechnique] = useState<PotteryTechnique | 'all'>('all');

  const filteredItems = useMemo(() => {
    return mockPotteryItems.filter(item => {
      const styleMatch = selectedStyle === 'all' || item.style === selectedStyle;
      const techniqueMatch = selectedTechnique === 'all' || item.technique === selectedTechnique;
      return styleMatch && techniqueMatch;
    });
  }, [selectedStyle, selectedTechnique]);

  const resetFilters = () => {
    setSelectedStyle('all');
    setSelectedTechnique('all');
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Galerie des Créations"
        description="Explorez notre collection de poteries artisanales, façonnées avec passion et savoir-faire."
      />
      <div className="container mx-auto px-4 pb-16">
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center text-lg font-medium text-foreground mr-2">
                <SlidersHorizontal className="h-5 w-5 mr-2 text-primary" /> {/* Changed from MixerHorizontalIcon */}
                Filtres :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-4 w-full md:w-auto">
                <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as PotteryStyle | 'all')}>
                  <SelectTrigger className="w-full sm:w-[180px] bg-background hover:bg-accent/10">
                    <SelectValue placeholder="Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les Styles</SelectItem>
                    {uniqueStyles.map(style => (
                      <SelectItem key={style} value={style}>{style}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTechnique} onValueChange={(value) => setSelectedTechnique(value as PotteryTechnique | 'all')}>
                  <SelectTrigger className="w-full sm:w-[180px] bg-background hover:bg-accent/10">
                    <SelectValue placeholder="Technique" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les Techniques</SelectItem>
                    {uniqueTechniques.map(technique => (
                      <SelectItem key={technique} value={technique}>{technique}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button variant="ghost" onClick={resetFilters} className="md:ml-auto text-primary hover:text-primary/80">
                Réinitialiser
              </Button>
            </div>
          </CardContent>
        </Card>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <PotteryItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">Aucune création ne correspond à vos critères de recherche.</p>
            <Button variant="link" onClick={resetFilters} className="mt-4 text-primary">Voir toutes les créations</Button>
          </div>
        )}
      </div>
    </div>
  );
}
