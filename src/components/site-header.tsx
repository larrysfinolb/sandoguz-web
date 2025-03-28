import Link from "next/link"
import Image from "next/image"

import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src=""
              alt="SanDoguz Logo"
              width={40}
              height={40}
              className="rounded-md"
            /> */}
            <span className="font-bold text-xl">SanDoguz Cloud</span>
          </Link>
        </div>
        <MainNav />
      </div>
    </header>
  )
}

