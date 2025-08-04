"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface ExperienceItem {
  year: string;
  title: string;
  desc: string;
  logo: string;
  details: string[];
}

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function TimelineItem({ item, index, isSelected, onClick }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: index * 0.15 }} 
      className='mb-10 pl-8'
    >
      <span className='absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary'></span>
      
      {/* Experience Card */}
      <motion.div
        onClick={onClick}
        className='bg-box/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 cursor-pointer hover:bg-box/80 transition-all duration-300'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className='flex items-start gap-4'>
          {/* Company Logo */}
          <div className='flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden'>
            <Image
              src={item.logo}
              alt={`${item.title.split(' – ')[0]} logo`}
              width={48}
              height={48}
              className='object-cover w-full h-full'
              onError={(e) => {
                // Fallback to initials if logo fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextSibling!.textContent = item.title.split(' – ')[0].charAt(0);
              }}
            />
            <span className='text-xs font-bold text-primary hidden'></span>
          </div>
          
          {/* Card Content */}
          <div className='flex-1'>
            <h3 className='text-xl font-semibold mb-1'>{item.title}</h3>
            <span className='text-sm text-primary mb-2 block'>{item.year}</span>
            <p className='text-sm opacity-80'>{item.desc}</p>
            <div className='mt-2 text-xs text-primary/60'>
              {isSelected ? 'Click to collapse' : 'Click to expand'}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
