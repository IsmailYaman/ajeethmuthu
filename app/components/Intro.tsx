"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { intro } from "../data/data"
import { motion, AnimatePresence } from "framer-motion"
import Section from "./Section"

export default function Intro() {
  const professions = intro.profession
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section>
      <section id="over-mij" className="relative flex min-h-screen w-full items-center justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left Content */}
          <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <h1 className="mb-4 text-5xl font-bold text-slate-700 md:text-6xl">
              {intro.greeting}
            </h1>
            <p className="mb-6 text-2xl text--slate-900">
              {intro.introduction}{" "}
              <span className="text-green-400 h-8 inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className="font-extrabold"
                  >
                    {professions[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
            <p className="mb-8 text-lg text-gray-600">
              {intro.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              {intro.socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? "_blank" : undefined}
                >
                  <Button
                    variant={link.isPrimary ? "default" : "outline"}
                    className={`rounded-full cursor-pointer px-8 py-6 text-base font-medium ${
                      link.isPrimary
                        ? "bg-green-400 text-black hover:bg-green-500"
                        : "border-green-400 text-green-400 hover:bg-green-400/10"
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden md:h-[500px] md:w-[500px]">
              <Image
                src="/img/ajeeth.jpg"
                alt="Ajeeth Muthu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </Section>
  )
}