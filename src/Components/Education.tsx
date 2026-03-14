import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display flex items-center gap-3">
            <GraduationCap className="text-emerald-400" />
            Education & Certifications
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-300 mb-6 flex items-center gap-2">
              <GraduationCap size={24} className="text-emerald-500/50" />
              Academic Background
            </h3>
            
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors"
              >
                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                <div className="text-lg text-emerald-400 font-medium mb-4">{edu.institution}</div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {edu.dates}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-300 mb-6 flex items-center gap-2">
              <Award size={24} className="text-emerald-500/50" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-4 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
