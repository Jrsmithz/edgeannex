'use client'

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import Link from "next/link"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const articles = {
  "ai-trends-2025": {
    title: "AI in 2025: The Rise of Autonomous Business Operations",
    category: "Industry Report",
    author: "Dr. Sarah Chen",
    date: "March 2025",
    readTime: "15 min read",
    topics: ["AI Strategy", "Industry 4.0", "Digital Transformation"],
    content: [
      {
        type: "paragraph",
        content: "As we approach 2025, artificial intelligence is evolving from a support tool to an autonomous decision-maker in business operations. This transformation is reshaping how organizations operate, compete, and deliver value to their customers."
      },
      {
        type: "heading",
        content: "Key Trends Shaping Business AI in 2025"
      },
      {
        type: "list",
        items: [
          "Autonomous Decision Systems: AI systems making routine business decisions without human intervention",
          "Predictive Operations: Real-time adjustment of business processes based on AI forecasting",
          "Human-AI Collaboration: New frameworks for effective teamwork between employees and AI systems",
          "Democratized AI: No-code platforms making AI accessible to non-technical business users"
        ]
      },
      {
        type: "heading",
        content: "Implementation Strategies for 2025"
      },
      {
        type: "paragraph",
        content: "Organizations looking to stay competitive need to focus on three key areas: workforce preparation, process redesign, and technology infrastructure. Success in 2025 will depend on how well companies can integrate AI into their core operations while maintaining human oversight and ethical considerations."
      },
      {
        type: "heading",
        content: "The Evolution of AI Decision-Making"
      },
      {
        type: "paragraph",
        content: "The shift from AI assistance to autonomous decision-making represents a fundamental change in how businesses operate. In 2025, we're seeing AI systems take on increasingly complex decision-making roles, from supply chain optimization to customer service management. This evolution is driven by advances in machine learning, natural language processing, and predictive analytics."
      },
      {
        type: "heading",
        content: "Industry-Specific Applications"
      },
      {
        type: "list",
        items: [
          "Manufacturing: AI-driven quality control and predictive maintenance",
          "Healthcare: Automated diagnosis support and treatment planning",
          "Finance: Real-time risk assessment and fraud detection",
          "Retail: Dynamic pricing and inventory management",
          "Logistics: Route optimization and demand forecasting"
        ]
      },
      {
        type: "heading",
        content: "Preparing for the Future"
      },
      {
        type: "paragraph",
        content: "To successfully navigate this transformation, organizations must invest in both technology and human capital. This includes upskilling employees to work alongside AI systems, developing robust governance frameworks, and creating clear escalation paths for complex decisions. The most successful organizations will be those that can balance automation with human oversight."
      }
    ]
  },
  "responsible-ai-framework": {
    title: "The 2025 Framework for Responsible AI Implementation",
    category: "Technical Guide",
    author: "Michael Rodriguez",
    date: "February 2025",
    readTime: "12 min read",
    topics: ["AI Ethics", "Compliance", "Data Privacy"],
    content: [
      {
        type: "paragraph",
        content: "With new AI regulations coming into effect in 2025, organizations need to adapt their AI implementation strategies to ensure compliance while maintaining innovation and efficiency."
      },
      {
        type: "heading",
        content: "Key Regulatory Requirements"
      },
      {
        type: "list",
        items: [
          "Transparency in AI decision-making processes",
          "Data privacy and protection standards",
          "Bias detection and mitigation requirements",
          "Human oversight and intervention protocols",
          "Regular compliance audits and reporting"
        ]
      },
      {
        type: "heading",
        content: "Building an Ethical AI Framework"
      },
      {
        type: "paragraph",
        content: "A comprehensive ethical AI framework must address both technical and organizational aspects. This includes establishing clear guidelines for AI development, deployment, and monitoring, as well as creating processes for handling edge cases and potential ethical dilemmas."
      },
      {
        type: "heading",
        content: "Implementation Best Practices"
      },
      {
        type: "list",
        items: [
          "Regular ethics training for AI teams",
          "Diverse development teams to prevent bias",
          "Comprehensive testing and validation procedures",
          "Clear documentation and audit trails",
          "Regular stakeholder reviews and feedback"
        ]
      }
    ]
  },
  "ai-roi-metrics": {
    title: "Measuring AI ROI: Beyond Traditional Metrics",
    category: "White Paper",
    author: "Dr. James Wilson",
    date: "January 2025",
    readTime: "10 min read",
    topics: ["ROI Analysis", "Business Strategy", "AI Implementation"],
    content: [
      {
        type: "paragraph",
        content: "Traditional ROI metrics often fail to capture the full value of AI implementations. This comprehensive guide explores new frameworks for measuring AI investment returns, with a focus on both quantitative and qualitative benefits."
      },
      {
        type: "heading",
        content: "The Evolution of AI ROI Measurement"
      },
      {
        type: "paragraph",
        content: "As AI systems become more sophisticated and integrated into business operations, the ways we measure their impact must evolve. Traditional cost-benefit analysis needs to be supplemented with metrics that capture long-term strategic value, operational improvements, and competitive advantages."
      },
      {
        type: "heading",
        content: "Key Performance Indicators"
      },
      {
        type: "list",
        items: [
          "Operational efficiency improvements",
          "Cost reduction through automation",
          "Revenue growth from AI-enabled products",
          "Customer satisfaction metrics",
          "Employee productivity gains",
          "Innovation and market positioning",
          "Risk reduction and compliance improvements"
        ]
      },
      {
        type: "heading",
        content: "Calculating Long-term Value"
      },
      {
        type: "paragraph",
        content: "Long-term value calculation requires considering both direct and indirect benefits, including market positioning, competitive advantages, and future growth potential. Organizations must develop frameworks that account for these factors while maintaining clear, measurable outcomes."
      },
      {
        type: "heading",
        content: "Implementation Guidelines"
      },
      {
        type: "list",
        items: [
          "Establish baseline metrics before implementation",
          "Define clear success criteria",
          "Regular monitoring and adjustment",
          "Stakeholder communication and reporting",
          "Continuous improvement processes"
        ]
      }
    ]
  },
  "generative-ai-enterprise": {
    title: "Generative AI in the Enterprise: 2025 Applications",
    category: "Industry Analysis",
    author: "Emily Patel",
    date: "January 2025",
    readTime: "8 min read",
    topics: ["Generative AI", "Enterprise Solutions", "Digital Transformation"],
    content: [
      {
        type: "paragraph",
        content: "Generative AI is revolutionizing how enterprises create content, develop software, and automate business processes. This analysis explores current applications and future possibilities for enterprise organizations."
      },
      {
        type: "heading",
        content: "Current Enterprise Applications"
      },
      {
        type: "list",
        items: [
          "Content Generation: Marketing materials, documentation, and reports",
          "Code Generation: Automated software development and testing",
          "Process Automation: Workflow optimization and task automation",
          "Customer Service: AI-powered support and engagement",
          "Data Analysis: Automated insights and reporting"
        ]
      },
      {
        type: "heading",
        content: "Implementation Strategies"
      },
      {
        type: "paragraph",
        content: "Successful implementation of generative AI requires careful planning and consideration of organizational needs, technical requirements, and potential impacts on existing processes. Organizations must develop clear strategies for integration and adoption."
      },
      {
        type: "heading",
        content: "Best Practices and Considerations"
      },
      {
        type: "list",
        items: [
          "Start with clear use cases and objectives",
          "Ensure data quality and security",
          "Develop robust testing and validation processes",
          "Train employees on AI tools and capabilities",
          "Monitor and adjust implementation as needed",
          "Maintain human oversight and control"
        ]
      },
      {
        type: "heading",
        content: "Future Outlook"
      },
      {
        type: "paragraph",
        content: "As generative AI technology continues to evolve, enterprises must stay informed about new developments and opportunities. Organizations that successfully integrate these technologies will be well-positioned for future growth and innovation."
      }
    ]
  }
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-blue-600 font-medium">{article.category}</span>
              <span className="text-zinc-300">•</span>
              <span className="text-sm text-zinc-500">{article.readTime}</span>
            </div>

            <h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              {article.title}
            </h1>

            <div className="flex items-center justify-between border-b border-zinc-200 pb-6">
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium text-zinc-900">{article.author}</div>
                  <div className="text-sm text-zinc-500">{article.date}</div>
                </div>
              </div>
              <div className="flex gap-2">
                {article.topics.map((topic, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <article className="prose prose-zinc max-w-none">
            {article.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return <p key={index} className="text-zinc-600 mb-6">{section.content}</p>
                case "heading":
                  return <h2 key={index} className="text-2xl font-medium text-zinc-900 mt-12 mb-6">{section.content}</h2>
                case "list":
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-zinc-600">{item}</li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </article>

          <div className="mt-16 pt-8 border-t border-zinc-200">
            <Button asChild className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors px-8 py-4 rounded text-sm w-full">
              <Link href="/contact">Discuss Your AI Strategy</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 