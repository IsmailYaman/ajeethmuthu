"use client"

import React, { useRef, ReactNode } from "react"
import { motion, useInView, Variant } from "framer-motion"

type AnimationType = 
  | "slideLeft" 
  | "slideRight" 
  | "fadeIn" 
  | "scaleUp" 
  | "slideUp"
  | "rotate"
  | "none";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animationType?: AnimationType;
  delay?: number;
  fullHeight?: boolean;
  duration?: number;
  amount?: number;
}

const Section = ({ 
  children, 
  className = "", 
  id,
  animationType = "slideLeft",
  delay = 0,
  fullHeight = false,
  duration = 0.3,
  amount = 0.3
}: SectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount });

  const getInitialStyles = () => {
    switch(animationType) {
      case "slideLeft":
        return { 
          x: "-100px", 
          opacity: 0 
        };
      case "slideRight":
        return { 
          x: "100px", 
          opacity: 0 
        };
      case "fadeIn":
        return { 
          opacity: 0 
        };
      case "scaleUp":
        return { 
          scale: 0.8, 
          opacity: 0 
        };
      case "slideUp":
        return { 
          y: "50px", 
          opacity: 0 
        };
      case "rotate":
        return { 
          rotate: -10, 
          opacity: 0 
        };
      case "none":
        return {};
      default:
        return { 
          x: "-100px", 
          opacity: 0 
        };
    }
  };

  const initialStyles = getInitialStyles();
  
  // Create variants for animations
  const variants = {
    hidden: initialStyles,
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic bezier for a nicer easing
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      id={id}
      className={`${fullHeight ? 'h-screen' : ''} ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Section;