"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Activity, Code, Globe } from 'lucide-react';
import { Button } from '../ui/button';

const projectsData = [
  {
    name: 'SoftSell — Marketing Website',
    description: 'Responsive single-page React.js marketing site for a software resale startup. Built using Vite and Tailwind CSS with features like mobile responsiveness, lead-gen form, SEO optimization, and smooth UI/UX.',
    technologies: ['React.js', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/santhossiva2002/Softsell',
    demo: 'https://santhossiva2002.github.io/Softsell/',
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    name: 'DataChat',
    description: 'A data visualization and analytics platform that combines chat interface with data exploration capabilities.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/santhossiva2002/DataChat',
    demo: 'https://datachat-server.onrender.com',
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    name: 'CodeLearn',
    description: 'Interactive coding platform for learning programming with built-in compiler, exercises and progress tracking.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/santhossiva2002/codelearn',
    demo: ' https://codelearn-production.up.railway.app/',
    icon: <Code className="h-10 w-10 text-primary" />,
  },

  {
    name: 'C.H.O.P.P.E.R — AI Assistant',
    description: 'Voice-controlled assistant with task automation, NLP, system control, and contextual interaction. Integrated APIs for enhanced user experience.',
    technologies: ['Python', 'Google Gemini', 'TTS'],
    github: 'https://github.com/santhossiva2002',
    demo: '',
    icon: <Bot className="h-10 w-10 text-primary" />,
  },
  {
    name: 'Health Connect — MERN Stack Healthcare Platform',
    description: 'End-to-end encrypted communication using Signal Protocol. Integrated NHS API for verified healthcare data.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Signal Protocol'],
    github: 'https://github.com/santhossiva2002',
    demo: '',
    icon: <Activity className="h-10 w-10 text-primary" />,
  }
 
];

interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            {project.icon}
          </div>
          <div className="flex space-x-2">
            {project.github && (
              <Button size="icon" variant="ghost" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="icon" variant="ghost" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-secondary px-2 py-1 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my projects that demonstrate my technical skills and problem-solving abilities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}