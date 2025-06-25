import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black/60 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <OptimizedImage src="/site_edh/images/logo.png" alt="EDH Logo" className="h-14" />
  
          </a>

          {/* Menu Items - Usando scroll suave */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#sobre" 
              className="text-white hover:text-yellow-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-white hover:text-yellow-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Serviços
            </a>
            <a 
              href="#equipe" 
              className="text-white hover:text-yellow-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('equipe')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Equipe
            </a>
            <a 
              href="#eventos" 
              className="text-white hover:text-yellow-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Eventos
            </a>
            <a 
              href="#contato" 
              className="text-white hover:text-yellow-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};