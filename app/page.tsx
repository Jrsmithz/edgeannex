'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WorldMap } from "@/components/ui/world-map"
import { Navigation } from "@/components/ui/navigation"
import { useMemo } from "react"

export default function Page() {
  // Memoize the dots data to prevent recreation on each render
  const mapDots = useMemo(() => [
    {
      start: { lat: 40.7128, lng: -74.0060 }, // New York
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
    },
    {
      start: { lat: 1.3521, lng: 103.8198 }, // Singapore
      end: { lat: -33.8688, lng: 151.2093 }, // Sydney
    },
    {
      start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      end: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
    },
    {
      start: { lat: 52.5200, lng: 13.4050 }, // Berlin
      end: { lat: 28.6139, lng: 77.2090 }, // New Delhi
    },
  ], [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <main className="flex-grow pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-5xl font-medium tracking-tight mb-6 text-zinc-900">
                Your partner in<br />
                AI transformation
              </h1>
              <div className="flex flex-col items-center gap-6">
                <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors w-fit px-6 py-4 rounded text-sm">
                  <Link href="https://calendly.com/garys/30min">Start Building</Link>
                </Button>
                <p className="text-sm text-zinc-600">
                  Empowering global efficiency through innovative AI solutions
                </p>
              </div>
            </div>

            {/* World Map */}
            <div className="w-full">
              <WorldMap
                dots={mapDots}
                lineColor="#18181b"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}