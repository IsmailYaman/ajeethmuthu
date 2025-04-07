"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../../data/data";
import Section from "../Section";
import { NavItem } from "./NavItem";

// Define a section checkpoint interface
interface SectionCheckpoint {
  id: string;
  element: HTMLElement;
  checkpoint: number;
  offsetTop: number;
}

export default function Navigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [currentCheckpoint, setCurrentCheckpoint] = useState<number>(0);
  
  // Store section checkpoints
  const sectionCheckpoints = useRef<SectionCheckpoint[]>([]);
  // Flag to prevent scroll event handling during programmatic scrolling
  const isScrolling = useRef<boolean>(false);

  // Check for mobile device
  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Initialize section checkpoints
  useEffect(() => {
    const initializeCheckpoints = () => {
    //   console.log("Initializing section checkpoints");
      
      // Find all sections (divs with id attributes)
      const sectionElements = document.querySelectorAll("div[id], section[id]");
    //   console.log(`Found ${sectionElements.length} section elements`);
      
      // Create array of section checkpoints
      const checkpoints: SectionCheckpoint[] = Array.from(sectionElements)
        .filter(section => section.id)
        .map((section, index) => ({
          id: section.id,
          element: section as HTMLElement,
          checkpoint: index,
          offsetTop: (section as HTMLElement).offsetTop
        }))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      
    //   console.log("Section checkpoints:", checkpoints.map(cp => 
    //     `Checkpoint ${cp.checkpoint}: ${cp.id} (top: ${cp.offsetTop}px)`
    //   ));
      
      sectionCheckpoints.current = checkpoints;
    };

    // Initialize on load and window resize
    initializeCheckpoints();
    window.addEventListener("resize", initializeCheckpoints);
    
    // Use MutationObserver to detect DOM changes
    const observer = new MutationObserver(() => {
    //   console.log("DOM changed, recalculating checkpoints");
      initializeCheckpoints();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", initializeCheckpoints);
    };
  }, []);

  // Track scroll position and update active checkpoint
  useEffect(() => {
    const handleScroll = () => {
      // Skip during programmatic scrolling
      if (isScrolling.current) {
        // console.log("Ignoring scroll event during programmatic navigation");
        return;
      }

      // Get current scroll position with slight offset for better detection
      const scrollPosition = window.scrollY + 50;
      
      // Find the active checkpoint based on scroll position
      let activeCheckpoint = 0;
      let activeSectionId = "";
      
      for (const section of sectionCheckpoints.current) {
        if (scrollPosition >= section.offsetTop) {
          activeCheckpoint = section.checkpoint;
          activeSectionId = section.id;
        } else {
          break;
        }
      }
      
      // Update state if changed
      if (currentCheckpoint !== activeCheckpoint) {
        // console.log(`Scroll: ${scrollPosition}px → Checkpoint ${activeCheckpoint} (${activeSectionId})`);
        setCurrentCheckpoint(activeCheckpoint);
        
        if (activeSectionId !== activeSection) {
          setActiveSection(activeSectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Call once on mount to initialize
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentCheckpoint, activeSection]);

  // Checkpoint-based navigation handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href?.startsWith("#")) {
      const targetId = href.substring(1);
    //   console.log(`Navigation clicked: ${targetId}`);
      
      // Find target checkpoint
      const targetSection = sectionCheckpoints.current.find(section => section.id === targetId);
      
      if (!targetSection) {
        console.error(`Target section not found: ${targetId}`);
        return;
      }
      
      const targetCheckpoint = targetSection.checkpoint;
      
    //   console.log(`Current checkpoint: ${currentCheckpoint}, Target checkpoint: ${targetCheckpoint}`);
      
      // Set scrolling flag to prevent scroll event handler
      isScrolling.current = true;
      
      // Calculate scroll position for the target section
      const scrollTarget = targetSection.offsetTop;
    //   console.log(`Scrolling to ${scrollTarget}px (${targetSection.id})`);
      
      // Perform smooth scroll
      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth"
      });
      
      // Update active section immediately for better UI feedback
      setActiveSection(targetId);
      setCurrentCheckpoint(targetCheckpoint);
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrolling.current = false;
        // console.log("Navigation complete");
      }, 1000);
    }
  };

  return (
    <>
      {/* Navigation that shows/hides based on scroll direction */}
      <AnimatePresence>
        <motion.div
          className="fixed top-4 left-0 right-0 z-10 flex justify-center px-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isMobile ? (
            <MobileNavigation 
              handleNavClick={handleNavClick} 
              activeSection={activeSection}
              currentCheckpoint={currentCheckpoint}
            />
          ) : (
            <DesktopNavigation 
              handleNavClick={handleNavClick} 
              activeSection={activeSection}
              currentCheckpoint={currentCheckpoint}
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Debug panel (remove in production) */}
      <div className="fixed bottom-4 right-4 z-50 p-2 text-xs bg-black/70 text-white rounded-md opacity-70 max-w-xs">
        <div>Current: CP {currentCheckpoint} ({activeSection})</div>
        <div>Sections: {sectionCheckpoints.current.length}</div>
      </div>
    </>
  );
}

function DesktopNavigation({
  handleNavClick,
  activeSection,
  currentCheckpoint,
}: {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  activeSection: string;
  currentCheckpoint: number;
}) {
  const navItems = navigation.links;
  const midpoint = Math.ceil(navItems.length / 2);

  return (
    <nav className="flex items-center rounded-full bg-stone-950/80 px-6 py-2 backdrop-blur-sm">
      <div className="flex items-center space-x-6">
        {navItems.slice(0, midpoint).map((item) => (
          <NavItem
            key={item.name}
            item={item}
            onClick={handleNavClick}
            isActive={activeSection === item.href.substring(1)}
          />
        ))}
      </div>

      <div className="mx-6 flex items-center">
        <Link 
          href="#home" 
          className="text-xl font-bold"
          onClick={handleNavClick}
        >
          <span className="text-white">{navigation.logo.text}</span>
          <span className="text-sky-500">{navigation.logo.highlight}</span>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        {navItems.slice(midpoint).map((item) => (
          <NavItem
            key={item.name}
            item={item}
            onClick={handleNavClick}
            isActive={activeSection === item.href.substring(1)}
          />
        ))}
      </div>
    </nav>
  );
}

function MobileNavigation({
  handleNavClick,
  activeSection,
  currentCheckpoint,
}: {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  activeSection: string;
  currentCheckpoint: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section animationType="slideLeft" delay={0.3} className="w-full">
      <nav className="flex w-full items-center justify-between rounded-full bg-stone-950/80 px-4 py-2 backdrop-blur-sm">
        <Link 
          href="#home" 
          className="text-lg font-bold"
          onClick={handleNavClick}
        >
          <span className="text-white">{navigation.logo.text}</span>
          <span className="text-sky-500">{navigation.logo.highlight}</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="border-none bg-white p-0">
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
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`text-3xl font-bold transition-colors ${
                            activeSection === item.href.substring(1)
                              ? "text-sky-500"
                              : "text-sky-300 hover:text-sky-500"
                          }`}
                          onClick={(e) => {
                            handleNavClick(e);
                            setIsOpen(false);
                          }}
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
    </Section>
  );
}