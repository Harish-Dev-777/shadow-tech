"use client"

import { useRef } from "react"
import PortfolioCard from "@/components/web/PortfolioCard"
import { portfolio } from "@/const/portfolio"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".portfolio-card")
    if (cards) {
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    }
  }, { scope: containerRef })

  return (
    <section id="portfolio" className="py-24 px-4 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16 text-center">
          <span className="text-foreground font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/15">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1]">
            Transforming Ideas into <span className="text-primary">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A curated selection of our most impactful work across design, development, and digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project) => (
            <div key={project.id} className="portfolio-card">
              <PortfolioCard 
                title={project.title} 
                description={project.description} 
                image={project.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio