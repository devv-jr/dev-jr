'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      {/* Add more sections as needed */}
    </div>
  );
}
