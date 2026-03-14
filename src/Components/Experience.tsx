import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display flex items-center gap-3">
            <Briefcase className="text-indigo-400" />
            Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mt-4" />
        </motion.div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              <div 
                className={`group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-slate-700 cursor-pointer ${expandedIndex === index ? 'shadow-[0_0_30px_rgba(99,102,241,0.1)] border-indigo-500/30' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-slate-300 font-medium mt-1">
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-slate-800/50">
                        <ul className="space-y-4">
                          {exp.bullets.map((bullet, i) => {
                            // Highlight metrics in the bullet point
                            const highlightedBullet = bullet.replace(/(\d+%|<500ms|60fps|3\+)/g, '<span class="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">$1</span>');
                            
                            return (
                              <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                                <Zap size={16} className="text-indigo-500 mt-1 shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute bottom-4 right-4 text-slate-500 group-hover:text-indigo-400 transition-colors">
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
