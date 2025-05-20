"use client"

import { motion } from 'framer-motion';
import { Target, Heart, Compass } from 'lucide-react';

const visionData = {
  goals: [
    "Build Scalable AI Systems: Expand my work on AI assistants like C.H.O.P.P.E.R into deployable, user-centric tools",
    "Master Full-Stack Architecture: Deepen expertise in MERN, Spring Boot, and microservices",
    "Lead with Innovation: Launch personal tech products that solve real-world problems",
    "Contribute to Open Source: Share tools, documentation, and code that improve developer workflows",
    "Grow as a Cloud-Native Engineer: Achieve cloud certifications and build secure, scalable systems"
  ],
  hobbies: [
    "Football & Team Leadership: Former football team captain, focused on teamwork and strategy",
    "Building Side Projects: Love experimenting with new technologies",
    "Tech Exploration: Regularly explore Linux, automation tools, and emerging frameworks",
    "Hackathons & Tech Challenges: Thrive in competitive settings",
    "Mentoring & Knowledge Sharing: Passionate about teaching and supporting developer growth"
  ],
  vision: [
    "Start my own product-based tech venture combining automation, AI, and user-centric platforms",
    "Mentor junior developers and contribute to developer communities",
    "Build and scale innovative solutions that make a positive impact"
  ]
};

function VisionCard({ title, items, icon, delay }: { title: string; items: string[]; icon: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-primary/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-primary mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Vision & Interests</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My goals, interests, and long-term vision that drive my professional journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <VisionCard
          title="Goals"
          items={visionData.goals}
          icon={<Target className="h-6 w-6 text-primary" />}
          delay={0}
        />
        <VisionCard
          title="Hobbies & Interests"
          items={visionData.hobbies}
          icon={<Heart className="h-6 w-6 text-primary" />}
          delay={0.2}
        />
        <VisionCard
          title="Long-Term Vision"
          items={visionData.vision}
          icon={<Compass className="h-6 w-6 text-primary" />}
          delay={0.4}
        />
      </div>
    </section>
  );
}