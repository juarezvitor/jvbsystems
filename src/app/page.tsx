"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import Architecture from "@/components/Architecture";
import WebDev from "@/components/WebDev";
import TechStack from "@/components/TechStack";
import Why from "@/components/Why";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).dataset.delay
              ? parseInt((entry.target as HTMLElement).dataset.delay!)
              : i * 80;
            setTimeout(
              () => entry.target.classList.add("visible"),
              delay,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String(i * 60);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <WhatsAppDemo />
        <Architecture />
        <WebDev />
        <TechStack />
        <Why />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
