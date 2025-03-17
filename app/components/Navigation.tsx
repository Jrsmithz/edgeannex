'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-lg font-medium">
              <span className="font-mono text-xl tracking-tighter">/</span>
              Edge Annex
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/solutions" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Case Studies
            </Link>
            <Link href="/insights" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Insights
            </Link>
            <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              About Us
            </Link>
            <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded px-4 py-2 text-sm">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 