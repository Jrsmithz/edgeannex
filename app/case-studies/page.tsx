'use client'

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "AI-Powered Email Management & Customer Support",
      client: "Regional Insurance Agency (50 employees)",
      challenge: "Support team spending 4+ hours daily sorting through 200+ customer emails, causing delayed responses and customer frustration.",
      solution: "Implemented AI email routing system and customer support chatbot to handle common questions 24/7.",
      results: [
        "Saved 1,040 hours annually (worth $31,200 vs. $45,000 new hire)",
        "90% of routine questions answered instantly by AI",
        "Customer response time reduced from 4 hours to 10 minutes",
        "ROI achieved in 4 months"
      ],
      tags: ["Email Automation", "Customer Support", "Cost Savings"]
    },
    {
      title: "Custom AI-Enhanced CRM System",
      client: "Real Estate Brokerage (35 agents)",
      challenge: "Agents losing deals due to slow follow-ups and missing key client interactions in generic CRM.",
      solution: "Built custom CRM with AI-powered lead scoring, automated follow-ups, and market insight suggestions.",
      results: [
        "Saved 780 hours annually in manual data entry ($23,400)",
        "28% increase in deal closure rate",
        "41% faster lead response time",
        "Equivalent to hiring 2 admin assistants ($90,000/year)"
      ],
      tags: ["CRM", "Sales Automation", "Lead Management"]
    },
    {
      title: "Internal Knowledge Base & Employee Assistant",
      client: "Marketing Agency (75 employees)",
      challenge: "New employees taking 3+ months to get up to speed, HR team overwhelmed with repetitive questions.",
      solution: "Developed AI-powered internal wiki and HR assistant bot that learns from company documentation.",
      results: [
        "Reduced onboarding time by 50% (saving $15,000 per new hire)",
        "HR team saved 520 hours annually ($15,600)",
        "87% of employee questions answered instantly",
        "Saved $42,000 vs hiring additional HR staff"
      ],
      tags: ["HR Automation", "Employee Training", "Knowledge Management"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              Real Results for Growing Businesses
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              See how businesses like yours are saving time and money with practical AI solutions.
              Each case study includes real cost comparisons and time savings versus traditional hiring.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="border border-zinc-200 rounded-lg p-8 hover:border-zinc-300 transition-colors">
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl font-medium text-zinc-900 mb-2">{study.title}</h2>
                    <p className="text-zinc-600">{study.client}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-medium text-zinc-900 mb-2">The Challenge</h3>
                      <p className="text-zinc-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-zinc-900 mb-2">Our Solution</h3>
                      <p className="text-zinc-600">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 mb-3">Business Impact</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-zinc-600">
                          <span className="mr-2">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors px-8 py-4 rounded text-sm">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 