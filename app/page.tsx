"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Map } from "@/components/map";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Stats } from "@/components/stats";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll(".fade-in");
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.01,
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.globalTimeline.clear();
      };
    })();
  }, []);

  if (!isClient) {
    // Prevent hydration mismatch by rendering a placeholder during SSR.
    return null;
  }

  return (
    <div className="min-h-screen space-y-10">
      <Hero />
      <Stats />
      <section className="fade-in">
        <Products />
      </section>
      <section className="fade-in">
        <About />
      </section>
      <section className="fade-in">
        <Testimonials />
      </section>
      <section className="fade-in">
        <Map />
      </section>
      <section className="fade-in">
        <Contact />
      </section>
      <section className="fade-in">
        <Newsletter />
      </section>
    </div>
  );
}
