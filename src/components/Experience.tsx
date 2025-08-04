"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TimelineItem, { ExperienceItem } from './TimelineItem';
import ExperienceDetails from './ExperienceDetails';

const items: ExperienceItem[] = [
  { 
    year: 'Aug. 2022 – June 2025', 
    title: 'Software Developer', 
    desc: 'UCLA • Los Angeles, CA',
    logo: '/ucla.jpeg',
    details: [
      'Developed a modular command-line tool in Python and Snakemake to streamline and automate a multi-stage RNA-Seq data pipeline, reducing processing time by 30% and improving scalability across HPC environments.',
      'Built robust data processing scripts in R and SQL to handle large-scale gene expression datasets (100+ cancer patients), automating ingestion from public genome APIs and generating reproducible visualizations for downstream analysis.',
      'Engineered a full-stack data analysis pipeline using Python (scanpy, scVelo), integrating dimensionality reduction (PCA), clustering (K-means, SVM), and temporal modeling (RNA velocity) to boost research throughput by 25% and support lab publications.'
    ]
  },
  { 
    year: 'June 2024 – Sep. 2024', 
    title: 'Software Engineer Intern', 
    desc: 'Abbott • Sunnyvale, CA',
    logo: '/abbott.png',
    details: [
      'Built TensorFlow models for arrhythmia prediction, supporting early detection coverage on 700+ customer devices',
      'Deployed cloud-based Python and C# package used by 20+ stakeholders to Azure Databricks data lake for seamless data processing on 9M+ real-time Spark Streaming transmissions, improving data integrity for ETL pipelines',
      'Added Agile MLOps and CI/CD by automating unit tests and version control, increasing QA coverage by 15%',
      'Optimized Apache Spark jobs and ran complex SQL queries for model training sets and ad hoc data aggregation'
    ]
  },
  { 
    year: 'June 2023 – Sep. 2023', 
    title: 'Software Engineer Intern', 
    desc: 'Ultima Genomics • Fremont, CA',
    logo: '/ug.png',
    details: [
      'Refactored legacy ETL pipeline into modular OOP Python package, enabling independent reporting of 50+ QC metrics and reducing failures from sequential dependencies; cut generation time by 40% and enabled metric aggregation across multiple pipeline executions',
      'Led fix for signal detection issue affecting 30% of sequencers using A/B testing and my optimized QC pipeline to iterate on detection parameters, reducing resolution time by 70% and improving future system reliability',
      'Built AWS S3 storage manager to automate data pulls and minimize manual steps, reducing retrieval errors by 80%',
      'Packaged internal dashboard via PyPI with Docker-based CI/CD, streamlining QA-to-prod transitions for analytics tools'
    ]
  },
  { 
    year: 'Dec. 2022 – June 2023', 
    title: 'Software Engineer Intern', 
    desc: 'UCLA ACM • Los Angeles, CA',
    logo: '/acm.png',
    details: [
      'Built PyTorch image classifier to detect 5 crop diseases with 97% accuracy and <5% false positives, enabling early detection in agricultural monitoring tools and reducing yield losses for stakeholders',
      'Developed modular training pipeline with Optuna and TensorBoard to automate hyperparameter tuning, accelerating experimentation cycles by 3x and improving reproducibility',
      'Expanded training dataset by 30,000+ synthetic samples via automated augmentation (torchvision), reducing model overfitting by 30% and boosting validation accuracy'
    ]
  },
];

export default function Experience() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <section id='experience' className='min-h-screen flex flex-col pt-24 px-4 text-text'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Experience</h2>
      
      <div className='flex gap-8 max-w-6xl mx-auto w-full'>
        {/* Timeline - moves left when item is selected */}
        <div className={`relative transition-all duration-500 ${selectedItem !== null ? 'w-1/3' : 'w-full flex justify-center'}`}>
          <div className='relative border-s border-primary ml-4'>
            {items.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isSelected={selectedItem === i}
                onClick={() => handleItemClick(i)}
              />
            ))}
          </div>
        </div>

        {/* Expanded Content - appears on the right */}
        <AnimatePresence>
          {selectedItem !== null && (
            <ExperienceDetails
              item={items[selectedItem]}
              onClose={handleClose}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}