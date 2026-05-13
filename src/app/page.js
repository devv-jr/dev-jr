'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <CTA />
    </div>
  );
}
