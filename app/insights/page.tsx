'use client'

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import Link from "next/link"
import { useState } from "react"

const insights = [
  {
    slug: "ai-trends-2025",
    category: "Industry Report",
    title: "AI in 2025: The Rise of Autonomous Business Operations",
    description: "Explore how AI is evolving from a support tool to an autonomous decision-maker in business operations, and what this means for organizations preparing for 2025.",
    readTime: "15 min read",
    date: "March 2025",
    topics: ["AI Strategy", "Industry 4.0", "Digital Transformation"]
  },
  {
    slug: "responsible-ai-framework",
    category: "Technical Guide",
    title: "The 2025 Framework for Responsible AI Implementation",
    description: "A comprehensive guide to implementing AI responsibly in your organization, with focus on new regulations and ethical considerations coming into effect in 2025.",
    readTime: "12 min read",
    date: "February 2025",
    topics: ["AI Ethics", "Compliance", "Data Privacy"]
  },
  {
    slug: "ai-roi-metrics",
    category: "White Paper",
    title: "Measuring AI ROI: Beyond Traditional Metrics",
    description: "New frameworks for measuring AI investment returns in 2025, including both quantitative and qualitative metrics for medium-sized businesses.",
    readTime: "10 min read",
    date: "January 2025",
    topics: ["ROI Analysis", "Business Strategy", "AI Implementation"]
  },
  {
    slug: "generative-ai-enterprise",
    category: "Industry Analysis",
    title: "Generative AI in the Enterprise: 2025 Applications",
    description: "How enterprises are leveraging generative AI for content creation, code generation, and business process automation in 2025.",
    readTime: "8 min read",
    date: "January 2025",
    topics: ["Generative AI", "Enterprise Solutions", "Digital Transformation"]
  }
]

const topics = [
  "All Topics",
  "AI Strategy",
  "Digital Transformation",
  "AI Ethics",
  "Enterprise Solutions",
  "ROI Analysis",
  "Industry 4.0",
  "Generative AI",
  "Data Privacy"
]

export default function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics")

  const filteredInsights = selectedTopic === "All Topics"
    ? insights
    : insights.filter(insight => insight.topics.includes(selectedTopic))

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              Insights & Analysis
            </h1>
            <p className="text-lg text-zinc-600 mb-8">
              Expert perspectives on AI trends, implementation strategies, and industry transformations.
            </p>

            <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedTopic === topic
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            {filteredInsights.map((insight, index) => (
              <Link 
                key={index}
                href={`/insights/${insight.slug}`}
                className="group block p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-blue-600 font-medium">{insight.category}</span>
                  <span className="text-zinc-300">•</span>
                  <span className="text-sm text-zinc-500">{insight.readTime}</span>
                </div>

                <h2 className="text-2xl font-medium text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h2>

                <p className="text-zinc-600 mb-6">
                  {insight.description}
                </p>

                <div className="flex gap-2">
                  {insight.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200">
            <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors px-8 py-4 rounded text-sm w-full">
              <Link href="https://calendly.com/garys/30min">Subscribe to Our Newsletter</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 