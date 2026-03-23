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
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* O que fazemos */}
        <Services />

        {/* Novas sections — entre Services e Why */}
        <WhatsAppDemo />
        <Architecture />
        <WebDev />
        <TechStack />

        {/* Por que a JVBSystems */}
        <Why />

        {/* Como trabalhamos */}
        <Process />

        {/* CTA final */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
