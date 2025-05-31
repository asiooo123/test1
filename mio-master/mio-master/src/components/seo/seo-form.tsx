
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { seoOptimizePottery, type SEOOptimizePotteryInput, type SEOOptimizePotteryOutput } from "@/ai/flows/seo-optimize-pottery";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2 } from "lucide-react";
import { Separator } from '../ui/separator';


const formSchema = z.object({
  name: z.string().min(1, "Le nom est requis.").max(100, "Le nom ne peut excéder 100 caractères."),
  description: z.string().min(1, "La description est requise.").max(1000, "La description ne peut excéder 1000 caractères."),
  style: z.string().min(1, "Le style est requis.").max(50, "Le style ne peut excéder 50 caractères."),
  technique: z.string().min(1, "La technique est requise.").max(50, "La technique ne peut excéder 50 caractères."),
  keywords: z.string().optional().describe("Mots-clés existants, séparés par des virgules."),
});

export function SeoForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [seoResult, setSeoResult] = useState<SEOOptimizePotteryOutput | null>(null);

  const form = useForm<SEOOptimizePotteryInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      style: "",
      technique: "",
      keywords: "",
    },
  });

  async function onSubmit(values: SEOOptimizePotteryInput) {
    setIsLoading(true);
    setSeoResult(null);
    try {
      const result = await seoOptimizePottery(values);
      setSeoResult(result);
      toast({
        title: "Optimisation SEO Réussie!",
        description: "Le titre et la description optimisés ont été générés.",
      });
    } catch (error) {
      console.error("SEO Optimization Error:", error);
      toast({
        title: "Erreur d'Optimisation",
        description: "Une erreur s'est produite lors de la génération du contenu SEO. Veuillez vérifier la console pour plus de détails.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom Actuel de la Pièce</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Vase en Grès" {...field} className="bg-background focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description Actuelle</FormLabel>
                <FormControl>
                  <Textarea placeholder="Décrivez votre pièce..." rows={4} {...field} className="bg-background focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style de la Pièce</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Moderne, Rustique" {...field} className="bg-background focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="technique"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technique Utilisée</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Tourné, Modelé main" {...field} className="bg-background focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mots-Clés Existants (optionnel)</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: céramique, fait main, décoration" {...field} className="bg-background focus:ring-primary"/>
                </FormControl>
                <FormDescription>Séparez les mots-clés par des virgules.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
            {isLoading ? "Génération en cours..." : (
               <>
                <Wand2 className="mr-2 h-4 w-4" /> Générer Contenu SEO
               </>
            )}
          </Button>
        </form>
      </Form>

      {seoResult && (
        <Card className="mt-8 bg-secondary/30 border-primary/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Résultats de l'Optimisation SEO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Titre Suggéré:</h3>
              <p className="p-3 bg-background rounded-md shadow-sm text-muted-foreground">{seoResult.title}</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Description Suggérée:</h3>
              <p className="p-3 bg-background rounded-md shadow-sm text-muted-foreground whitespace-pre-line">{seoResult.description}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
