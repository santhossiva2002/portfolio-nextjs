"use client"

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'PSG College of Technology, Coimbatore',
    period: '2023–2025',
    grade: 'CGPA: 7.7/10 (Pursuing)',
  },
  {
    degree: 'B.Sc. Computer Systems and Design',
    institution: 'PSG College of Technology, Coimbatore',
    period: '2020–2023',
    grade: 'CGPA: 7.5/10',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic journey has provided me with strong foundations in computer science and engineering principles.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2"></div>
        
        {educationData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative mb-12 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8 md:ml-auto' : 'md:pl-8'
            }`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-0 ${
              index % 2 === 0 ? 'left-0 md:-left-3' : 'left-0 md:-left-3'
            } w-6 h-6 rounded-full bg-primary flex items-center justify-center`}>
              <GraduationCap className="h-3 w-3 text-primary-foreground" />
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm ml-8 md:ml-0">
              <div className="flex items-center text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{item.period}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
              <p className="text-muted-foreground mb-2">{item.institution}</p>
              <p className="text-sm font-medium">{item.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}