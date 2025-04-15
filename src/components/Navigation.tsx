"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when modal is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <nav className="hidden md:flex  justify-center items-center p-4 bg-background/80 backdrop-blur-sm space-x-4 sticky top-0 z-50 border-b">
        
        {/* Desktop navigation - hidden on mobile */}
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-foreground/70"}`}>
            Home
          </Link>
          <Link href="/leistungen" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/leistungen" ? "text-primary" : "text-foreground/70"}`}>
            Leistungen
          </Link>
          <Link href="/rechner" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/rechner" ? "text-primary" : "text-foreground/70"}`}>
            Rechner
          </Link>

        {/* Hamburger menu - visible only on mobile */}
  
      </nav>

      <button 
          className="fixed top-4 right-4 z-50 flex flex-col justify-center items-center md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground my-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground my-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

      {/* Full screen modal */}
      <div 
        className={`fixed inset-0 bg-background z-[60] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="space-y-8 text-center">
            <Link 
              href="/" 
              className={`block text-3xl font-bold transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-foreground"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/leistungen" 
              className={`block text-3xl font-bold transition-colors hover:text-primary ${pathname === "/leistungen" ? "text-primary" : "text-foreground"}`}
              onClick={toggleMenu}
            >
              Leistungen
            </Link>
            <Link 
              href="/rechner" 
              className={`block text-3xl font-bold transition-colors hover:text-primary ${pathname === "/rechner" ? "text-primary" : "text-foreground"}`}
              onClick={toggleMenu}
            >
              Rechner
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 