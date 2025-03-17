'use client'

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI Strategy & Planning",
      description: "Create a clear roadmap for bringing AI into your business, with a focus on real results and return on investment.",
      features: [
        "Business Goals Assessment",
        "Cost-Benefit Analysis",
        "Risk Assessment",
        "Employee Training Plan"
      ]
    },
    {
      title: "Custom AI Solutions",
      description: "We build AI tools specifically for your business needs, whether that's automating repetitive tasks or making better business decisions.",
      features: [
        "Process Automation",
        "Smart Document Processing",
        "Business Intelligence",
        "Customer Insights"
      ]
    },
    {
      title: "AI Implementation",
      description: "We handle the technical heavy lifting to smoothly integrate AI solutions into your existing business operations.",
      features: [
        "Seamless Integration",
        "Employee Training",
        "System Updates",
        "Technical Support"
      ]
    },
    {
      title: "Ongoing Support & Optimization",
      description: "We ensure your AI solutions keep running smoothly and continue to deliver value as your business grows.",
      features: [
        "Performance Monitoring",
        "Regular Updates",
        "Technical Maintenance",
        "Business Impact Reviews"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              AI Solutions That Drive Business Growth
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We help businesses like yours leverage AI to increase efficiency, reduce costs, 
              and create competitive advantages. No technical expertise required - we handle everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="p-8 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors">
                <h3 className="text-xl font-medium text-zinc-900 mb-4">{solution.title}</h3>
                <p className="text-zinc-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zinc-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors px-8 py-4 rounded text-sm">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 