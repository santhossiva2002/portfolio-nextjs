"use client"

import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Siva Poopathi M</h2>
            <p className="text-muted-foreground">Full Stack Developer & Software Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-2 mb-4">
              <Button size="icon" variant="outline" asChild>
                <a href="mailto:sivapoopathi290702@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <a href="https://github.com/santhossiva2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <a href="https://linkedin.com/in/sivapoopathi-m-b30a09335" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Siva Poopathi M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}