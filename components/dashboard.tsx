"use client"

import { useState, useEffect } from 'react';
import Header from './sections/header';
import Profile from './sections/profile';
import Skills from './sections/skills';
import Education from './sections/education';
import Projects from './sections/projects';
import Experience from './sections/experience';
import Achievements from './sections/achievements';
import Vision from './sections/vision';
import Footer from './sections/footer';
import MobileNav from './ui/mobile-nav';
import { useTheme } from 'next-themes';

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MobileNav />
      <main className="container mx-auto px-4 py-8 pb-20">
        <Profile />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Achievements />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}