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
      {/* Landmark de navegação */}
      <header role="banner">
        <Navbar />
      </header>

      {/* Conteúdo principal — âncora do skip link */}
      <main id="conteudo-principal" tabIndex={-1}>
        {/* Hero — seção de introdução */}
        <Hero />

        {/* Serviços — o que oferecemos */}
        <section aria-labelledby="heading-servicos">
          <Services />
        </section>

        {/* Demo do assistente WhatsApp */}
        <section aria-labelledby="heading-assistente">
          <WhatsAppDemo />
        </section>

        {/* Arquitetura da plataforma */}
        <section aria-labelledby="heading-arquitetura">
          <Architecture />
        </section>

        {/* Desenvolvimento Web */}
        <section aria-labelledby="heading-webdev">
          <WebDev />
        </section>

        {/* Stack tecnológica */}
        <section aria-labelledby="heading-stack">
          <TechStack />
        </section>

        {/* Diferenciais */}
        <section aria-labelledby="heading-diferenciais">
          <Why />
        </section>

        {/* Metodologia */}
        <section aria-labelledby="heading-processo">
          <Process />
        </section>

        {/* CTA — contato */}
        <section aria-labelledby="heading-contato">
          <CTA />
        </section>
      </main>

      {/* Rodapé */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
}
