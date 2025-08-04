'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function About() {
  const photos = [
    '/me.JPEG',
    '/me2.jpeg', // Add more photos here
    '/me3.jpeg',
    '/me4.jpg'
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [showConfetti, setShowConfetti] = useState(false);

  // Auto-rotate every 3 seconds, reset when user interacts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length, lastInteraction]);

  const resetTimer = () => {
    setLastInteraction(Date.now());
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
    resetTimer();
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    resetTimer();
  };

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index);
    resetTimer();
  };

  const triggerBruinsConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Generate confetti particles
  const generateConfetti = () => {
    const particles = [];
    const colors = ['#2D68C4', '#FFD100']; // UCLA blue and gold
    const emojis = ['🐻', '💙', '💛'];
    
    for (let i = 0; i < 50; i++) {
      const isEmoji = Math.random() > 0.7;
      const fromLeft = Math.random() > 0.5;
      particles.push({
        id: i,
        emoji: isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : null,
        color: colors[Math.floor(Math.random() * colors.length)],
        startX: fromLeft ? -20 : 120, // Start from left (-20%) or right (120%)
        endX: fromLeft ? 120 : -20,   // End at opposite side
        startY: Math.random() * 50,   // Random starting height
        animationDelay: Math.random() * 2,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 2 + 2 // 2-4 seconds duration
      });
    }
    return particles;
  };

  return (
    <section id='about' className='min-h-screen flex flex-col justify-center items-center px-4 text-text'>
      <div className='max-w-4xl mx-auto w-full'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl font-bold mb-16 text-center'
        >
          About Me
        </motion.h2>
        
        {/* About Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12'
        >
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            {/* Profile Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='flex-shrink-0'
            >
              <div className='relative group'>
                <div className='relative w-[250px] h-[350px] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/10'>
                  <Image
                    src={photos[currentPhoto]}
                    alt={`Will Huang ${currentPhoto + 1}`}
                    fill
                    className='object-cover'
                    priority
                  />
                  
                  {/* Navigation Buttons */}
                  <div className='absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                    <button
                      onClick={prevPhoto}
                      className='p-3 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-all duration-200 pointer-events-auto z-10'
                      aria-label='Previous photo'
                    >
                      <FaChevronLeft className='w-4 h-4' />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className='p-3 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-all duration-200 pointer-events-auto z-10'
                      aria-label='Next photo'
                    >
                      <FaChevronRight className='w-4 h-4' />
                    </button>
                  </div>
                  
                  {/* Dots Indicator */}
                  <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToPhoto(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          index === currentPhoto 
                            ? 'bg-primary scale-125' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex-1 space-y-6 text-center lg:text-left'
            >
              <div className='space-y-4'>
                <h3 className='text-2xl md:text-3xl font-bold text-primary'>
                  William Huang
                </h3>
              </div>
              
              <div className='space-y-4 text-text/80 leading-relaxed'>
                <p>
                  I'm a Software Engineer with experience in ML, full-stack development, 
                  and data engineering. I graduated with a degree in Computer Science from UCLA in 2025 (
                  <button 
                    onClick={triggerBruinsConfetti}
                    className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-2 hover:decoration-yellow-400 transition-all duration-200 font-semibold"
                  >
                    go bruins!
                  </button>
                  ).
                </p>
                <p>
                  A big motivation of mine is to create solutions that tackle difficult, tedious, or complex problems, and generally
                  spread positive impact through technology, whether that be through small web apps or large-scale systems. 
                </p>
                <p>
                  When I'm not coding, you'll find me at the gym, watching basketball, trying new food places, taking photos,
                  or experimenting with new matcha drinks for my home cafe (hopefully a real cafe someday). 🍵
                </p>
              </div>

              {/* Skills */}
              <div className='pt-4'>
                <h4 className='text-lg font-semibold text-primary mb-3'>What I love working with:</h4>
                <div className='flex flex-wrap gap-2'>
                  {['Python', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Tailwind', 'Azure DevOps'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className='px-3 py-1 text-sm bg-primary/20 text-primary border border-primary/30 rounded-full hover:bg-primary/30 transition-colors duration-300'
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* UCLA Confetti Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {generateConfetti().map((particle) => (
            <div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.startX}%`,
                top: `${particle.startY}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.duration}s`,
                animationTimingFunction: 'ease-out',
                animationFillMode: 'forwards',
                fontSize: particle.emoji ? `${particle.size * 2}px` : undefined,
                transform: `translateX(0)`,
                animation: `slideAcross-${particle.id} ${particle.duration}s ease-out ${particle.animationDelay}s forwards`,
              }}
            >
              {particle.emoji ? (
                <span className="block animate-spin" style={{ animationDuration: '2s' }}>
                  {particle.emoji}
                </span>
              ) : (
                <div
                  className="rotate-45 animate-pulse"
                  style={{
                    backgroundColor: particle.color,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                  }}
                />
              )}
              <style jsx>{`
                @keyframes slideAcross-${particle.id} {
                  0% {
                    transform: translateX(0) translateY(0) rotate(0deg);
                  }
                  100% {
                    transform: translateX(${particle.endX - particle.startX}vw) translateY(50vh) rotate(360deg);
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
