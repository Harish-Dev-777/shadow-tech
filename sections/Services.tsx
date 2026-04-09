"use client";

import { useRef } from "react";
import { services } from "@/const/services.js";
import ServiceCard from "@/components/web/ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".service-card");
    if (cards) {
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section id="services" className="py-24 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-20 px-6">
          <span className="text-foreground font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/15">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Comprehensive Solutions for <span className="text-primary">Your Business</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mt-2">
            We provide end-to-end digital solutions to help your business grow faster and smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
