"use client"

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, File, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-8 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-2xl backdrop-blur">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Siva Poopathi M
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Full Stack Developer & Software Engineer
              </h2>
              
              <p className="text-lg leading-relaxed mb-8 max-w-3xl">
                Passionate and adaptable Full Stack Developer and Software Engineer with hands-on experience 
                in building scalable, low-latency applications and end-to-end solutions. Proficient in MERN 
                stack, Java, Python, and automation testing. Skilled in system design, real-time automation, 
                CI/CD pipelines, and grounded in strong Computer Engineering principles.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <a href="mailto:sivapoopathi290702@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
                  <a href="https://github.com/santhossiva2002" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
                  <a href="https://linkedin.com/in/sivapoopathi-m-b30a09335" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
                  <a href="#">
                    <File className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" /> Coimbatore, Tamil Nadu, India
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-4 order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image 
                src="/siva_image.jpeg" 
                alt="Siva Poopathi M" 
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}