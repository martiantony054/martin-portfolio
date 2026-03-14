import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, Download, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // In a real app, this would link to a PDF. For now, we'll just alert or open a new tab.
    window.open('https://drive.google.com/file/d/1-kipTAY68CzwkQrMp8CD1oR0kRg8EMsW/view?usp=drive_link', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono w-fit">
            <Terminal size={14} />
            <span>Hello, World. I am</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white font-display">
            {resumeData.basics.name}.
          </h1>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-400 tracking-tight">
            {resumeData.basics.title}
          </h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            {resumeData.basics.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={handleScrollToExperience}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-indigo-600 rounded-full overflow-hidden transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              View Experience
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button 
              onClick={handleDownloadResume}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600"
            >
              Download Resume
              <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
