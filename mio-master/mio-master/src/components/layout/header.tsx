
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, Image as ImageIcon, Info, CalendarDays, Mail, ShieldCheck, Shield, LogIn, LogOut, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const baseNavItems = [
  { href: '/', label: 'Accueil', icon: Home, public: true },
  { href: '/gallery', label: 'Galerie', icon: ImageIcon, public: true },
  { href: '/about', label: 'À Propos', icon: Info, public: true },
  { href: '/events', label: 'Ateliers', icon: CalendarDays, public: true },
  { href: '/contact', label: 'Contact', icon: Mail, public: true },
  { href: '/seo-optimizer', label: 'Optimiseur SEO', icon: ShieldCheck, public: false, adminOnly: true }, // Example: Admin only or specific role
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, isAdmin, logout } = useAuth();

  const adminNavItem = { href: '/admin', label: 'Admin', icon: Shield, public: false, adminOnly: true };
  
  const navItems = currentUser && isAdmin ? [...baseNavItems, adminNavItem] : baseNavItems.filter(item => item.public || (currentUser && !item.adminOnly));
  const visibleNavItems = navItems.filter(item => item.public || currentUser);
  const adminSpecificNavItems = navItems.filter(item => item.adminOnly && isAdmin);


  const getDisplayedNavItems = () => {
    let items = baseNavItems.filter(item => item.public || currentUser); // Show public items or all if logged in (respecting adminOnly later)
    if (currentUser && isAdmin) {
      items = [...baseNavItems, adminNavItem]; // Show all base + admin link if admin
    }
    return items.filter(item => item.public || (currentUser && (!item.adminOnly || isAdmin)));
  };

  const currentNavItemsToDisplay = getDisplayedNavItems();


  const UserAvatar = () => {
    if (!currentUser) return null;
    const initial = currentUser.email ? currentUser.email.charAt(0).toUpperCase() : '?';
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              {/* Placeholder for user image if available */}
              {/* <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || "User Avatar"} /> */}
              <AvatarFallback>{initial}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {currentUser.displayName || currentUser.email}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {currentUser.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Add other items like "Profile", "Settings" if needed */}
          {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
          <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary hover:text-primary/90 transition-colors">Argile et Art</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {currentNavItemsToDisplay.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="text-sm font-medium text-foreground/80 hover:text-foreground">
                {item.label}
              </Link>
            </Button>
          ))}
          {currentUser ? (
            <UserAvatar />
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-foreground">
                  <LogIn className="mr-2 h-4 w-4 md:hidden lg:inline-block" /> Connexion
                </Link>
              </Button>
              <Button variant="default" asChild size="sm">
                <Link href="/signup">
                 <UserPlus className="mr-2 h-4 w-4 md:hidden lg:inline-block" /> Inscription
                </Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {currentUser && <UserAvatar />}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="flex items-center space-x-2 mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold text-lg text-primary">Argile et Art</span>
                </Link>
                {currentNavItemsToDisplay.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 rounded-md p-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-border/40">
                  {currentUser ? (
                     <Button
                        variant="ghost"
                        className="w-full justify-start flex items-center space-x-3 rounded-md p-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                      >
                        <LogOut className="h-5 w-5 text-primary" />
                        <span>Déconnexion</span>
                      </Button>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="flex items-center space-x-3 rounded-md p-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <LogIn className="h-5 w-5 text-primary" />
                        <span>Connexion</span>
                      </Link>
                      <Link
                        href="/signup"
                        className="flex items-center space-x-3 rounded-md p-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <UserPlus className="h-5 w-5 text-primary" />
                        <span>Inscription</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
