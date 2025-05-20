"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ModeToggle } from './mode-toggle';

const navItems = [
  { title: 'Profile', href: '#profile' },
  { title: 'Skills', href: '#skills' },
  { title: 'Education', href: '#education' },
  { title: 'Projects', href: '#projects' },
  { title: 'Experience', href: '#experience' },
  { title: 'Achievements', href: '#achievements' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button 
        variant="default" 
        size="icon" 
        className="rounded-full shadow-lg" 
        onClick={toggleMenu}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </Button>

      <div className={cn(
        "fixed bottom-16 right-4 bg-card rounded-lg shadow-lg transition-transform duration-300 ease-in-out p-3",
        open ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <div className="border-t border-border mt-2 pt-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}