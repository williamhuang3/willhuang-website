"use client";

import { motion } from 'framer-motion';
import { ExperienceItem } from './TimelineItem';

interface ExperienceDetailsProps {
  item: ExperienceItem;
  onClose: () => void;
}

export default function ExperienceDetails({ item, onClose }: ExperienceDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className='w-2/3 bg-box/40 backdrop-blur-sm border border-white/10 rounded-lg p-6'
    >
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h3 className='text-2xl font-bold text-primary'>{item.title}</h3>
          <span className='text-lg text-primary/80'>{item.year}</span>
        </div>
        <button
          onClick={onClose}
          className='text-text/60 hover:text-text transition-colors text-2xl'
        >
          ×
        </button>
      </div>
      
      <p className='text-base mb-6 opacity-90'>{item.desc}</p>
      
      <div>
        <h4 className='text-lg font-semibold mb-3 text-primary'>Key Achievements:</h4>
        <ul className='space-y-2'>
          {item.details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className='flex items-start gap-3'
            >
              <span className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0'></span>
              <span className='text-sm opacity-80'>{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
