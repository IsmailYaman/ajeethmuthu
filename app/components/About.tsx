"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="over-mij" className="relative flex min-h-screen w-full items-center justify-center bg-black px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Hi, Ajeeth hier
          </h1>
          <p className="mb-6 text-2xl text-white">
            Ik ben een <span className="text-green-400">Data Scientist</span>
          </p>
          <p className="mb-8 text-lg text-gray-300">
            Met passie voor machine learning en AI, transformeer ik complexe data in waardevolle inzichten. 
            Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen 
            te nemen en innovatieve oplossingen te creëren.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <Button className="rounded-full bg-green-400 px-8 py-6 text-base font-medium text-black hover:bg-green-500">
                LinkedIn
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="rounded-full border-green-400 px-8 py-6 text-base font-medium text-green-400 hover:bg-green-400/10">
                Contact
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white bg-white md:h-[400px] md:w-[400px]">
            {/* Replace with your image path */}
            <Image
              src="/your-profile-image.jpg"
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