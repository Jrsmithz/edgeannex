'use client'

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { label: "Enterprise Clients", value: "50+" },
  { label: "Client Retention", value: "95%" },
  { label: "AI Solutions Delivered", value: "100+" },
  { label: "Industries Served", value: "15+" }
]

const values = [
  {
    title: "Innovation First",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions."
  },
  {
    title: "Client Success",
    description: "Your growth and success are our top priorities. We measure our success by yours."
  },
  {
    title: "Ethical AI",
    description: "We implement AI solutions with strong ethical principles and responsible practices."
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from development to delivery."
  }
]

const team = [
  {
    name: "Gary Smith",
    role: "CEO",
    bio: "Formerly at FedEx with 20+ years of operational experience, Gary brings deep expertise in logistics, process optimization, and enterprise transformation. His leadership has been instrumental in scaling operations and driving innovation across multiple industries.",
    image: "/team/gary-smith.jpg"
  },
  {
    name: "Jonathan Smith",
    role: "CTO",
    bio: "With 3+ years in Operations at Chartright for high-net-worth clients and 10+ years in development technology, Jonathan combines luxury service experience with technical expertise. His background in both operations and technology enables him to bridge the gap between business needs and technical solutions.",
    image: "/team/jonathan-smith.png"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              About Edge Annex
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We&apos;re a team of AI experts and business strategists dedicated to helping organizations
              harness the power of artificial intelligence for sustainable growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-medium text-zinc-900 mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium text-zinc-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-6 bg-zinc-50 rounded-lg">
                  <h3 className="text-lg font-medium text-zinc-900 mb-2">{value.title}</h3>
                  <p className="text-zinc-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium text-zinc-900 mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-zinc-100 rounded-full mb-4 overflow-hidden relative">
                    <Image
                      src={member.name === "Jonathan Smith" ? "/team/jonathan-smith.jpg" : "/team/gary-smith.jpg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                  <p className="text-zinc-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors px-8 py-4 rounded text-sm">
              <Link href="https://calendly.com/garys/30min">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 