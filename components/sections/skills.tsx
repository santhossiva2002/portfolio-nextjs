"use client"

import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, PenTool as Tool, Briefcase, Terminal, Box, Layout, Settings, GitBranch, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillsData = {
  languages: ['Java', 'Python', 'C', 'SQL', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  frontend: ['React.js', 'Angular (v15+)', 'TypeScript', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot'],
  tools: ['Docker', 'AWS', 'Postman', 'Git', 'GitHub Actions', 'Selenium', 'NPM', 'UNIX/Linux'],
  databases: ['MongoDB', 'MySQL', 'Firebase'],
  networking: ['TCP/IP', 'Socket Programming', 'HTTP/HTTPS', 'DNS', 'Load Balancing'],
  concepts: [
    'Object-Oriented Programming (OOP)', 
    'Data Structures and Algorithms', 
    'RESTful APIs', 
    'Distributed Systems', 
    'Fault-Tolerant Architecture', 
    'Agile Methodologies', 
    'MVC Architecture', 
    'Unit Testing', 
    'CI/CD Pipelines'
  ]
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  className?: string;
  delay?: number;
}

function SkillCategory({ title, icon, skills, className, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={cn("bg-card rounded-lg p-6 shadow-sm", className)}
    >
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="bg-muted px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical toolkit encompasses a diverse range of languages, frameworks, and methodologies
          that enable me to build robust, scalable applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory 
          title="Languages" 
          icon={<Code className="h-5 w-5 text-primary" />}
          skills={skillsData.languages}
          delay={0}
        />
        <SkillCategory 
          title="Frontend" 
          icon={<Layout className="h-5 w-5 text-primary" />}
          skills={skillsData.frontend}
          delay={1}
        />
        <SkillCategory 
          title="Backend" 
          icon={<Server className="h-5 w-5 text-primary" />}
          skills={skillsData.backend}
          delay={2}
        />
        <SkillCategory 
          title="Tools & Platforms" 
          icon={<Tool className="h-5 w-5 text-primary" />}
          skills={skillsData.tools}
          delay={3}
        />
        <SkillCategory 
          title="Databases" 
          icon={<Database className="h-5 w-5 text-primary" />}
          skills={skillsData.databases}
          delay={4}
        />
        <SkillCategory 
          title="Networking & Protocols" 
          icon={<Globe className="h-5 w-5 text-primary" />}
          skills={skillsData.networking}
          delay={5}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 bg-card rounded-lg p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Core Concepts & Methodologies</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsData.concepts.map((concept) => (
            <span 
              key={concept}
              className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium"
            >
              {concept}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}