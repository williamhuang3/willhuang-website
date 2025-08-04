'use client';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-[-30%] left-[-30%] w-[700px] h-[700px] bg-primary opacity-30 rounded-full filter blur-[180px]"
        animate={{ x: [0, 200, -150, 0], y: [0, 250, -120, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-30%] right-[-30%] w-[800px] h-[800px] bg-primary opacity-25 rounded-full filter blur-[160px]"
        animate={{ x: [0, -250, 180, 0], y: [0, -220, 140, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] left-[50%] w-[800px] h-[800px] bg-primary opacity-15 rounded-full filter blur-[140px]"
        animate={{ x: [0, 180, -100, 0], y: [0, 120, -100, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
    </div>
  );
}
