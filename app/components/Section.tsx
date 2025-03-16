"use client"

import React, { useRef, ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fromLeft?: boolean;
  delay?: number;
}

const Section = ({ 
  children, 
  className = "", 
  id,
  fromLeft = true,
  delay = 0 
}: SectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        transform: isInView 
          ? "none" 
          : `translateX(${fromLeft ? "-100px" : "100px"})`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.3s ease ${delay}s`
      }}
    >
      {children}
    </motion.div>
  );
};

export default Section;