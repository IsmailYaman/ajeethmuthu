"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../types/data";
import { navigation } from "../data/data";

// Props interface
interface NavItemProps {
  item: NavLink;
}

export default function Navigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 550);
    };

    const handleScroll = (): void => {
      // Show navigation when scrolled past 100vh
      setShowNav(window.scrollY > window.innerHeight-200);
    };

    checkScreenSize();
    handleScroll(); // Check initial scroll position
    
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div 
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DesktopNavigation() {
  const navItems = navigation.links;
  const midpoint = Math.ceil(navItems.length / 2);

  return (
    <nav className="flex items-center rounded-full bg-stone-950/80 px-6 py-2 backdrop-blur-sm">
      <div className="flex items-center space-x-6">
        {navItems.slice(0, midpoint).map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mx-6 flex items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">{navigation.logo.text}</span>
          <span className="text-green-500">{navigation.logo.highlight}</span>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        {navItems.slice(midpoint).map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </nav>
  );
}

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between rounded-full bg-stone-950/80 px-4 py-2 backdrop-blur-sm">
      <Link href="/" className="text-lg font-bold">
        <span className="text-white">{navigation.logo.text}</span>
        <span className="text-green-500">{navigation.logo.highlight}</span>
      </Link>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black/95 p-0">
          <motion.div 
            className="flex h-full flex-col justify-center p-8"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  className="flex flex-col space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {navigation.links.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      <Link
                        href={item.href}
                        className="text-3xl font-bold text-white transition-colors hover:text-green-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

function NavItem({ item }: NavItemProps) {
  return (
    <Link href={item.href} className={cn("text-sm font-medium text-white/70 transition-colors hover:text-white")}>
      {item.name}
    </Link>
  );
}