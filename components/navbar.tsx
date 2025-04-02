"use client"

import { useState } from "react"
import Link from "next/link"
import { Fish, LayoutDashboard, Map, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-blue-600">
          <Fish className="h-6 w-6" />
          <span className="text-xl">FishSync</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
          >
            Dashboard
          </Link>
          <Link
            href="/fishprediction"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
          >
            FishPrediction
          </Link>
          <Link
            href="/navigate"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
          >
            Navigate
          </Link>
          <Link
            href="/reports"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
          >
            Catch Reports
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
          >
            Profile
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Log in
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "container md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-60" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-4 px-4 pb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/navigate"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Map className="h-4 w-4" />
            Navigate
          </Link>
          <Link
            href="/reports"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Map className="h-4 w-4" />
            Catch Report
          </Link>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
              Log in
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

