"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
        .from(
          subheadlineRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7",
        )
        .from(
          actionsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7",
        )
        .from(
          marqueeRef.current,
          {
            opacity: 0,
            duration: 1,
          },
          "-=0.5",
        )
        .from(
          statsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const brands = [
    { name: "Next JS", className: "font-serif font-bold text-xl" },
    {
      name: "Tailwind CSS",
      className: "font-sans font-black text-sm tracking-tighter",
    },
    {
      name: "Framer",
      className: "font-sans font-bold text-lg flex items-center gap-1",
    },
    {
      name: "10X Faster",
      className: "font-sans font-bold text-sm bg-white text-black px-1",
    },
    { name: "GSAP", className: "font-serif italic text-lg" },
    { name: "Netlify", className: "font-serif italic text-lg" },
    { name: "Stripe", className: "font-sans font-bold text-xl" },
    { name: "Vercel", className: "font-sans font-bold text-lg" },
    { name: "Claude", className: "font-sans font-bold text-lg" },
    { name: "Gemini", className: "font-sans font-bold text-lg" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl px-6">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-balance"
        >
          We Design Digital <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50">
            Experiences
          </span>{" "}
          That Drive Results
        </h1>

        <p
          ref={subheadlineRef}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed text-balance"
        >
          We help startups and brands transform ideas into powerful, scalable,
          and visually stunning digital products.
        </p>

        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="h-12 px-10 rounded-full bg-primary text-primary-foreground border-none hover:opacity-90 transition-all font-bold text-sm shadow-[0_0_20px_oklch(from_var(--primary)_l_c_h/0.3)] flex items-center gap-2"
            >
              Get started
            </Button>
          </Link>
          <Link href="#portfolio">
            <Button
              variant="secondary"
              size="lg"
              className="h-12 px-10 rounded-full bg-foreground/5 border border-foreground/60 hover:border-foreground/80 hover:bg-foreground/10 transition-all duration-300 font-bold text-foreground text-sm"
            >
              View our work
            </Button>
          </Link>
        </div>

        {/* Marquee Section */}
        <div
          ref={marqueeRef}
          className="relative w-screen overflow-hidden mb-24 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-linear-to-l after:from-background after:to-transparent"
        >
          <div className="flex w-fit items-center gap-16 py-4 animate-marquee grayscale opacity-50 dark:opacity-30">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className={cn(
                  "text-foreground/80 select-none whitespace-nowrap",
                  brand.className,
                )}
              >
                {brand.name === "Framer" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline mr-1"
                  >
                    <path d="M4 4h12l-6 6h6l-6 6v-6H4z" />
                  </svg>
                )}
                {brand.name}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center justify-center border-t border-foreground/5 pt-20"
        >
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
            <span className="text-3xl font-bold tracking-tight">150+</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Projects Done
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="w-8 h-8 text-primary mb-2" />
            <span className="text-3xl font-bold tracking-tight">99%</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Client Satisfaction
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-8 h-8 text-primary mb-2" />
            <span className="text-3xl font-bold tracking-tight">100%</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              On Time Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
