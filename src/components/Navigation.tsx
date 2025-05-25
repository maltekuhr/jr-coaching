"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Create a special dialog content that doesn't have the close button
const MobileDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ className, ...props }, ref) => (
  <DialogContent
    ref={ref}
    className={`p-0 sm:max-w-[100%] h-full flex flex-col items-center justify-center m-0 border-none rounded-none ${className || ""}`}
    {...props}
  >
    {props.children}
  </DialogContent>
));
MobileDialogContent.displayName = "MobileDialogContent";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex justify-center items-center p-4 space-x-4 bg-background/50 backdrop-blur-sm sticky top-0 z-50 border-b">
        
        {/* Desktop navigation - hidden on mobile */}
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-foreground"}`}>
            Home
          </Link>
          <Link href="/leistungen" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/leistungen" ? "text-primary" : "text-foreground"}`}>
            Leistungen
          </Link>
          <Link href="/rechner" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/rechner" ? "text-primary" : "text-foreground"}`}>
            Kalorienrechner
          </Link>
      </nav>

      {/* Mobile navigation using shadcn Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed top-4 p-2 h-12 w-12 right-4 z-50 md:hidden shadow-sm shadow-foreground/30"
            aria-label="Menu"
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-[100%] h-full flex flex-col items-center justify-center m-0 border-none rounded-none">
          {/* Hide this title visually but keep it for screen readers */}
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          
       
          
          <div className="space-y-8 text-center">
            <DialogClose asChild>
              <Link 
                href="/" 
                className={`block text-3xl font-bold transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-foreground"}`}
              >
                Home
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link 
                href="/leistungen" 
                className={`block text-3xl font-bold transition-colors hover:text-primary ${pathname === "/leistungen" ? "text-primary" : "text-foreground"}`}
              >
                Leistungen
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link 
                href="/rechner" 
                className={`block text-3xl font-bold transition-colors hover:text-primary ${pathname === "/rechner" ? "text-primary" : "text-foreground"}`}
              >
                Kalorienrechner
              </Link>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 