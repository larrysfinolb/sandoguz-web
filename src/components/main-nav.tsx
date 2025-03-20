"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Acerca del Colegio",
      href: "/acerca",
    },
    {
      name: "Cronograma",
      href: "/cronograma",
    },
    {
      name: "Horarios",
      href: "/horarios",
    },
    {
      name: "Personal",
      href: "/personal",
    },
  ]

  return (
    <div className="flex items-center">
      {isMobile ? (
        <>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-4">
              <nav className="flex flex-col space-y-4 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-blue-600",
                      pathname === item.href ? "text-blue-600" : "text-gray-700",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-blue-600",
                pathname === item.href ? "text-blue-600" : "text-gray-700",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}

