"use client";

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

type Project = { 
  title: string; 
  description: string;
  img: string; 
  repo: string; 
  live?: string;
  tech: string[];
};

const projects: Project[] = [
  { 
    title: 'Personal Site', 
    description: 'A responsive portfolio website with animations and interactive components.',
    img: '/portfolio.png', 
    repo: 'https://github.com/williamhuang3/willhuang-website',
    live: 'https://www.williamhuang.xyz',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel']
  },
  { 
    title: 'MatchaMatch', 
    description: 'A matcha recommendation platform that matches users with their perfect matcha based on a taste test.',
    img: '/matcha.png', 
    repo: 'https://github.com/williamhuang3/matcha-match',
    live: 'https://matcha-match.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'KNN Algorithm', 'Vercel']
  },
  { 
    title: 'Smart Split', 
    description: 'A web application that uses Gemini to convert receipt/bill images into a table, enabling automated bill splitting and reducing manual expense tracking.',
    img: '/split.png', 
    repo: 'https://github.com/williamhuang3/SmartSplit',
    live: 'https://smartsplit.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'Google OAuth', 'Firebase', 'Chart.js', 'Vercel']
  },
  { 
    title: 'DrugPredict', 
    description: 'App for early drug discovery using AI to identify and evaluate potential drug candidates from the ChemBL database with Random Forest regression.',
    img: '/drug.png', 
    repo: 'https://github.com/williamhuang3/ml-based-drug-identifier',
    tech: ['Python', 'Random Forest', 'ChemBL API', 'RDKit']
  },
  { 
    title: 'Crop Disease Detector', 
    description: 'PyTorch ResNet image classifier  for cassava leaves achieving 97% accuracy for crop disease detection for farmers.',
    img: '/cassava.jpg', 
    repo: 'https://github.com/williamhuang3/projects-skeleton-code',
    tech: ['PyTorch', 'TensorBoard', 'Torchvision', 'Computer Vision', 'Kaggle']
  },
  { 
    title: 'Toilkit', 
    description: 'Linux command-line tool for streamlining research sequencer pipelines, automating data preprocessing.',
    img: '/toil.png', 
    repo: 'https://github.com/nbay13/toilkit',
    live: 'https://nbay13.github.io/toilkit/',
    tech: ['Python', 'Bash', 'Argparse', 'SOLID Principles', 'Linux CLI']
  },
];

export default function Projects() {
  return (
    <section id='projects' className='min-h-screen px-4 py-24 text-text'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl font-bold mb-16 text-center'
        >
          Featured Projects
        </motion.h2>
        
        {/* Projects Grid Container */}
        <div className='bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8'>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            {projects.map((project, i) => (
              <div 
                key={i}
                className='group relative bg-box/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:md:-translate-y-1'
              >
                {/* Project Image */}
                <div className='relative h-48 overflow-hidden'>
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    width={600} 
                    height={400} 
                    className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110' 
                  />
                </div>

                {/* Project Content */}
                <div className='p-6'>
                  <div className='flex items-start justify-between mb-3'>
                    <h3 className='text-xl font-bold text-text group-hover:text-primary transition-colors duration-300'>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className='text-text/70 text-sm mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className='px-2 py-1 text-xs bg-primary/20 text-primary border border-primary/30 rounded-md'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                    <a
                      href={project.repo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-4 py-2 bg-box/80 hover:bg-primary/20 border border-white/20 hover:border-primary/30 rounded-lg text-text hover:text-primary transition-all duration-300 text-sm font-medium'
                    >
                      <FaGithub className='w-4 h-4' />
                      Code
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary/50 rounded-lg text-primary hover:text-white transition-all duration-300 text-sm font-medium'
                      >
                        <FaExternalLinkAlt className='w-3 h-3' />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}