import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { About } from "@/app/types/data";

interface AboutCardProps {
  item: About;
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}

const AboutCard: React.FC<AboutCardProps> = ({ item, i, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);

  const slideInFromLeft = {
    hidden: { x: "-50px", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 50,
      },
    },
  };

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(3vh + ${i * 25}px)`,
        }}
        className="
          flex flex-col relative 
          w-full max-w-7xl
          h-[700px] sm:h-[500px] 
          rounded-3xl p-6 sm:p-8 md:p-12 
          bg-gray-700/80
          shadow-xl backdrop-blur-sm
          origin-top
          transition-colors duration-300
          hover:from-primary/ hover:to-primary
        "
      >
        <div className="flex flex-col md:flex-row gap-8 h-full">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 md:w-1/2">
            <div className="space-y-2 sm:space-y-3">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            className="md:w-1/2 relative h-48 md:h-full rounded-xl overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;