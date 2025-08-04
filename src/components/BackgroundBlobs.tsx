'use client';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-[-30%] left-[-30%] w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-primary opacity-30 rounded-full filter blur-[120px] md:blur-[180px]"
        animate={{ x: [0, 100, -75, 0], y: [0, 125, -60, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-30%] right-[-30%] w-[350px] h-[350px] md:w-[800px] md:h-[800px] bg-primary opacity-25 rounded-full filter blur-[100px] md:blur-[160px]"
        animate={{ x: [0, -125, 90, 0], y: [0, -110, 70, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] left-[50%] w-[350px] h-[350px] md:w-[800px] md:h-[800px] bg-primary opacity-15 rounded-full filter blur-[80px] md:blur-[140px]"
        animate={{ x: [0, 90, -50, 0], y: [0, 60, -50, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
    </div>
  );
}
