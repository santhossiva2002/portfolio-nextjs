"use client"

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../ui/mode-toggle';
import { Button } from '../ui/button';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { title: 'Profile', href: '#profile' },
  { title: 'Skills', href: '#skills' },
  { title: 'Education', href: '#education' },
  { title: 'Projects', href: '#projects' },
  { title: 'Experience', href: '#experience' },
  { title: 'Achievements', href: '#achievements' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#profile');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href);
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-sm",
      scrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-lg font-bold">Siva Poopathi M</div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <a href="mailto:sivapoopathi290702@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Mail size={18} />
              </Button>
            </a>
            <a href="https://linkedin.com/in/sivapoopathi-m-b30a09335" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Linkedin size={18} />
              </Button>
            </a>
            <a href="https://github.com/santhossiva2002" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Github size={18} />
              </Button>
            </a>
            <Button size="icon" variant="ghost">
              <FileText size={18} />
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}