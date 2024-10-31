'use client'

import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-[0.98]">
          <span className="bg-gradient-to-r from-[#6633cc] to-[#8855ee] bg-clip-text text-xl font-bold text-transparent">
            JRI.AI
          </span>
        </Link>
        <nav className="ml-6 hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium">Why JRI.AI?</Link>
          <div className="flex items-center gap-1">
            <Link href="#" className="text-sm font-medium">Platform</Link>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1">
            <Link href="#" className="text-sm font-medium">Solutions</Link>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1">
            <Link href="#" className="text-sm font-medium">Resources</Link>
            <ChevronDown className="h-4 w-4" />
          </div>
          <Link href="#" className="text-sm font-medium">Pricing</Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="sm">Login</Button>
          <Button className="bg-[#6633cc] hover:bg-[#6633cc]/90" size="sm">Book a demo</Button>
        </div>
      </div>
    </header>
  )
}