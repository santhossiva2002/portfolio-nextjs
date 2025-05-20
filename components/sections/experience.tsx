"use client"

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const professionalExperience = [
  {
    title: 'Software Development and Testing Intern',
    company: 'DMeX Solutions',
    location: 'Coimbatore',
    period: 'Jan 2025 – Apr 2025',
    description: 'Developed full-stack applications and automation test cases using Angular, NestJS, Selenium. Participated in Agile development and product testing.',
  },
];

const rolesAndResponsibilities = [
  {
    title: 'Event Coordinator',
    company: 'CyberNerd Symposium',
    location: 'PSG College of Technology',
    period: '2024 – 2025',
    description: 'Organized technical events, coordinated with speakers, and managed student teams.',
  },
  {
    title: 'Executive Member',
    company: 'Computer Applications Association',
    location: 'PSG College of Technology',
    period: '2023 – 2025',
    description: 'Planned and executed technical workshops, coding competitions, and industry interaction programs.',
  },
  {
    title: 'Captain',
    company: 'Football Team',
    location: 'PSG College of Technology',
    period: '2016 – 2020',
    description: 'Led the football team in various inter-college tournaments and managed team training sessions.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and leadership roles that have shaped my career.
        </p>
      </motion.div>

      {/* Professional Experience */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Professional Experience
        </motion.h3>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20"></div>
          
          {professionalExperience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-10 ml-6 pl-8"
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                <Briefcase className="h-3 w-3 text-primary-foreground" />
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-primary/10">
                <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-muted-foreground">
                  <span className="font-medium">{item.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Roles and Responsibilities */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Roles & Responsibilities
        </motion.h3>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-secondary/50"></div>
          
          {rolesAndResponsibilities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-10 ml-6 pl-8"
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center z-10">
                <Briefcase className="h-3 w-3 text-secondary-foreground" />
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-secondary/10">
                <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-secondary-foreground">{item.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-muted-foreground">
                  <span className="font-medium">{item.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}