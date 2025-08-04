'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [text] = useTypewriter({ words: ['Will Huang!'], loop: false });

  return (
    <section id="wh" className="min-h-screen flex flex-col justify-center items-center px-4 text-text">
      <div className="bg-box/80 backdrop-blur-sm border border-white/20 rounded-xl w-full max-w-4xl shadow-2xl relative">
        {/* Little Character on top right */}
        <div className="absolute -top-32 -right-3 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <Image
              src="/smiski.png" // Add your character PNG here
              alt="Character mascot"
              width={200}
              height={200}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Mac-style header bar */}
        <div className="flex items-center px-4 py-3 bg-box/60 border-b border-white/10 rounded-t-xl">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-xs text-text/60">willhuang.xyz</span>
          </div>
          <div className="w-[54px]"></div> {/* Spacer to balance the buttons */}
        </div>

        {/* Main hero content */}
        <div className="flex flex-col items-center justify-center gap-8 px-12 py-16 text-center bg-black/20 rounded-b-xl min-h-[400px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor cursorStyle="|" cursorColor="#7FED64" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-text/80 max-w-2xl leading-relaxed"
          >
            Software Engineer passionate about creating innovative, impactful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="/William Huang Resume.pdf"
              className="group px-8 py-3 rounded-lg bg-primary/20 backdrop-blur-sm text-text border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
            <a
              href="mailto:williamhuang.whh@gmail.com"
              className="group px-8 py-3 rounded-lg bg-box/60 backdrop-blur-sm text-text border border-white/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              <FaEnvelope className="w-4 h-4" />
              Email me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 text-2xl"
          >
            <a 
              href="https://github.com/williamhuang3" 
              aria-label="GitHub"
              className="text-text/70 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/whuang03/" 
              aria-label="LinkedIn"
              className="text-text/70 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://instagram.com/whu4ng" 
              aria-label="Instagram"
              className="text-text/70 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
