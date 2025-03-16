"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function PillNavigation() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const navItems = [
    { name: "Over mij", href: "#over-mij" },
    { name: "Ervaring", href: "#ervaring" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {isMobile ? <MobileNavigation navItems={navItems} /> : <DesktopNavigation navItems={navItems} />}
    </div>
  )
}

function DesktopNavigation({ navItems }: { navItems: { name: string; href: string }[] }) {
  return (
    <nav className="flex items-center rounded-full bg-black/80 px-6 py-2 backdrop-blur-sm">
      <div className="flex items-center space-x-6">
        {navItems.slice(0, 2).map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mx-6 flex items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">Ajeeth</span>
          <span className="text-green-500">Muthu</span>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        {navItems.slice(2).map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </nav>
  )
}

function MobileNavigation({ navItems }: { navItems: { name: string; href: string }[] }) {
  return (
    <nav className="flex w-full max-w-sm items-center justify-between rounded-full bg-black/80 px-4 py-2 backdrop-blur-sm">
      <Link href="/" className="text-lg font-bold">
        <span className="text-white">Ajeeth</span>
        <span className="text-green-500">Muthu</span>
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
            {navItems.map((item) => (
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

function NavItem({ item }: { item: { name: string; href: string } }) {
  return (
    <Link href={item.href} className={cn("text-sm font-medium text-white/70 transition-colors hover:text-white")}>
      {item.name}
    </Link>
  )
}

 