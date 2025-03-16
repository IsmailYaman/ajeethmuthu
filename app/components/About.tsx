"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { aboutMe } from "../data/data"

export default function AboutMe() {
  return (
    <section id="over-mij" className="relative flex min-h-screen w-full items-center justify-center bg-black px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            {aboutMe.greeting}
          </h1>
          <p className="mb-6 text-2xl text-white">
            {aboutMe.introduction} <span className="text-green-400">{aboutMe.profession}</span>
          </p>
          <p className="mb-8 text-lg text-gray-300">
            {aboutMe.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {aboutMe.socialLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.url} 
                target={link.url.startsWith('http') ? "_blank" : undefined}
              >
                <Button 
                  variant={link.isPrimary ? "default" : "outline"} 
                  className={`rounded-full px-8 py-6 text-base font-medium ${
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
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white bg-white md:h-[600px] md:w-[600px]">
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
  )
}