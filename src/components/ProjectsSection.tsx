import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  // =========================================================
  // EXISTING PROJECTS
  // =========================================================

  {
    number: '01',
    title: 'AI-DETECTOR',
    category: 'AI / MACHINE LEARNING / NLP',
    description:
      'An AI-powered text detection system designed to identify AI-generated content using Machine Learning and Natural Language Processing. The project includes text preprocessing, tokenization, stopword removal, feature extraction and classification, with support for text, PDF and image inputs through OCR.',
    githubUrl: 'https://github.com/SupriyaMalakar007/AI-DETECTOR',
    tech: [
      'Python',
      'Machine Learning',
      'NLP',
      'Text Classification',
      'OCR',
      'PDF Processing',
      'Feature Extraction',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'AI / NLP' },
      { label: 'INPUT', value: 'Text / PDF / Image' },
      { label: 'PIPELINE', value: 'ML Classification' },
    ],
  },

  {
    number: '02',
    title: 'SALARY PREDICTION',
    category: 'MACHINE LEARNING / DATA SCIENCE',
    description:
      'A Machine Learning project that predicts salary based on relevant input features. The workflow includes data preprocessing, categorical encoding, feature scaling, model training and evaluation using regression algorithms.',
    githubUrl: 'https://github.com/SupriyaMalakar007/salary-prediction',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'Linear Regression',
      'Decision Tree',
      'Data Preprocessing',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Data Science' },
      { label: 'MODELS', value: 'Regression / Tree' },
      { label: 'METRICS', value: 'R² / MAE' },
    ],
  },

  {
    number: '03',
    title: 'RUN TRACKER',
    category: 'WEB APPLICATION / FITNESS',
    description:
      'A modern running tracker application designed to record running sessions, calculate distance and pace, display routes on an interactive map and maintain a history of completed runs.',
    githubUrl: 'https://github.com/SupriyaMalakar007/run-tracker',
    tech: [
      'React',
      'JavaScript',
      'Vite',
      'Leaflet',
      'GPS',
      'React Router',
      'Local Storage',
    ],
    metrics: [
      { label: 'TRACKING', value: 'GPS Based' },
      { label: 'MAP', value: 'Interactive Route' },
      { label: 'DATA', value: 'Run History' },
    ],
  },

  {
    number: '04',
    title: 'AI OBJECT DETECTION',
    category: 'ARTIFICIAL INTELLIGENCE / COMPUTER VISION',
    description:
      'An AI-focused computer vision project exploring real-time visual processing and intelligent object detection using Python-based computer vision technologies.',
    githubUrl:
      'https://github.com/SupriyaMalakar007/AI-Object-Detection-System',
    tech: [
      'Python',
      'OpenCV',
      'Computer Vision',
      'MediaPipe',
      'AI / ML',
      'Object Detection',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Computer Vision' },
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'FOCUS', value: 'Object Detection' },
    ],
  },

  // =========================================================
  // NEW PROJECTS
  // =========================================================

  {
    number: '05',
    title: 'ULTRON',
    category: 'AI / VOICE ASSISTANT / AUTOMATION',
    description:
      'An AI assistant project focused on voice-based interaction and computer automation. ULTRON brings together intelligent commands and software control to create a personal assistant experience.',
    githubUrl: 'https://github.com/SupriyaMalakar007/Ultron',
    tech: [
      'Python',
      'AI',
      'Voice Assistant',
      'Speech Recognition',
      'Automation',
      'Computer Vision',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'AI Assistant' },
      { label: 'INTERACTION', value: 'Voice' },
      { label: 'FOCUS', value: 'Automation' },
    ],
  },

  {
    number: '06',
    title: "GOD'S EYE VIEW",
    category: 'COMPUTER VISION / VISUAL INTELLIGENCE',
    description:
      'A visual intelligence project focused on observing and processing information through a computer vision interface. The project represents an exploration of intelligent visual systems.',
    githubUrl: 'https://github.com/SupriyaMalakar007/gods-eye-view',
    tech: [
      'Python',
      'Computer Vision',
      'OpenCV',
      'AI / ML',
      'Image Processing',
      'Visual Intelligence',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Computer Vision' },
      { label: 'FOCUS', value: 'Visual AI' },
      { label: 'TYPE', value: 'Intelligent System' },
    ],
  },

  {
    number: '07',
    title: 'AI HEALTH ASSISTANT',
    category: 'AI / HEALTHCARE / INTELLIGENT ASSISTANT',
    description:
      'An AI-based healthcare assistant designed to provide an interactive intelligent assistant experience. The project explores the use of AI for healthcare-focused user interaction and assistance.',
    githubUrl:
      'https://github.com/SupriyaMalakar007/AI-Health-Assistant-v1.0',
    tech: [
      'AI',
      'Python',
      'Machine Learning',
      'NLP',
      'Healthcare',
      'Conversational AI',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'AI Healthcare' },
      { label: 'TYPE', value: 'AI Assistant' },
      { label: 'FOCUS', value: 'Intelligent Assistance' },
    ],
  },

  {
    number: '08',
    title: 'JARVIS',
    category: 'AI / PERSONAL ASSISTANT / AUTOMATION',
    description:
      'A personal AI assistant project inspired by virtual assistant systems. JARVIS explores intelligent interaction, automation and the integration of multiple assistant capabilities into one system.',
    githubUrl: 'https://github.com/SupriyaMalakar007/jarvis',
    tech: [
      'Python',
      'AI',
      'Voice Recognition',
      'NLP',
      'Automation',
      'Virtual Assistant',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'AI Assistant' },
      { label: 'INTERACTION', value: 'Voice / Text' },
      { label: 'FOCUS', value: 'Automation' },
    ],
  },

  {
    number: '09',
    title: "BELLA'S BOUQUET",
    category: 'WEB DEVELOPMENT / E-COMMERCE',
    description:
      'A visually focused web project created around a bouquet and flower business concept, with an emphasis on attractive presentation, responsive design and a smooth user experience.',
    githubUrl: 'https://github.com/SupriyaMalakar007/bellas-bouquet',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Frontend',
      'Responsive Design',
      'UI / UX',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Web Development' },
      { label: 'TYPE', value: 'Business Website' },
      { label: 'FOCUS', value: 'UI / UX' },
    ],
  },

  {
    number: '10',
    title: 'TO-DO APP',
    category: 'WEB DEVELOPMENT / PRODUCTIVITY',
    description:
      'A productivity-focused application for managing everyday tasks. The project demonstrates interactive frontend development and practical task management functionality.',
    githubUrl: 'https://github.com/SupriyaMalakar007/todo-app',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'DOM',
      'Frontend',
      'Task Management',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Web Development' },
      { label: 'TYPE', value: 'Productivity' },
      { label: 'FOCUS', value: 'Task Management' },
    ],
  },

  {
    number: '11',
    title: 'SNAKE GAME',
    category: 'PYTHON / GAME DEVELOPMENT',
    description:
      'A classic Snake Game project built to explore programming logic, player interaction, movement, collision handling and real-time gameplay.',
    githubUrl: 'https://github.com/SupriyaMalakar007/Snake-Game',
    tech: [
      'Python',
      'Game Development',
      'Game Logic',
      'Keyboard Input',
      'Collision Detection',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Game Development' },
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'FOCUS', value: 'Game Logic' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              SELECTED WORKS.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              BUILT WITH INTELLIGENCE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A collection of projects exploring Artificial Intelligence,
            Computer Vision, Automation, Machine Learning, Web Development
            and Software Engineering.
          </p>
        </motion.div>

        {/* Project Cards */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>

              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]" />

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]" />

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]" />

                {/* Background Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left */}
                  <div className="lg:col-span-7 flex flex-col justify-between">

                    <div>

                      {/* Category */}
                      <div className="flex items-center space-x-3 mb-4">

                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>

                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>

                      </div>

                      {/* Title */}
                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>

                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">

                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Right */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">

                    {/* Metrics */}
                    <div className="space-y-3">

                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT METRICS
                      </span>

                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {metric.label}
                          </span>

                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {metric.value}
                          </span>
                        </div>
                      ))}

                    </div>

                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>

                  </div>

                </div>
              </div>

            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;