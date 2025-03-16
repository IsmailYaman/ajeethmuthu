"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavLink } from "../types/data"
import { navigation } from "../data/data"


// Props interface
interface NavItemProps {
  item: NavLink;
}

export default function PillNavigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 550)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </div>
  )
}

function DesktopNavigation() {
  const navItems = navigation.links;
  const midpoint = Math.ceil(navItems.length / 2);
  
  return (
    <nav className="flex items-center rounded-full bg-black/80 px-6 py-2 backdrop-blur-sm">
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
  )
}

function MobileNavigation() {
  return (
    <nav className="flex w-full max-w-sm items-center justify-between rounded-full bg-black/80 px-4 py-2 backdrop-blur-sm">
      <Link href="/" className="text-lg font-bold">
        <span className="text-white">{navigation.logo.text}</span>
        <span className="text-green-500">{navigation.logo.highlight}</span>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-8 flex flex-col space-y-4">
            {navigation.links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

function NavItem({ item }: NavItemProps) {
  return (
    <Link href={item.href} className={cn("text-sm font-medium text-white/70 transition-colors hover:text-white")}>
      {item.name}
    </Link>
  )
}