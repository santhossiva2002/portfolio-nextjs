"use client"

import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';

const achievementsData = [
  {
    title: 'Finalist — Caterpillar Codeathon',
    year: '2024',
    description: 'Advanced to the finals of a competitive coding competition hosted by Caterpillar Inc.',
    icon: <Trophy className="h-5 w-5 text-primary" />,
  },
  {
    title: 'Runner-Up — State Level Boxing Championship',
    year: '2019',
    description: 'Secured the second position in state-level boxing championship competition.',
    icon: <Medal className="h-5 w-5 text-primary" />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Achievements</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Notable recognitions and awards I've received throughout my academic and professional journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 shadow-sm border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{achievement.year}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}