import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Cpu, Terminal, Database, Layout, Settings, Wrench, GitBranch } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (group: string) => {
    switch(group) {
      case 'Frontend': return <Layout className="text-pink-400" size={20} />;
      case 'Testing': return <Terminal className="text-emerald-400" size={20} />;
      case 'Build Tools & Version Control': return <GitBranch className="text-orange-400" size={20} />;
      case 'Backend & Database': return <Database className="text-blue-400" size={20} />;
      case 'UI Frameworks': return <Layout className="text-purple-400" size={20} />;
      case 'DevOps & Tools': return <Settings className="text-slate-400" size={20} />;
      case 'Methodologies': return <Wrench className="text-yellow-400" size={20} />;
      default: return <Cpu className="text-indigo-400" size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display inline-flex items-center gap-3">
            <Cpu className="text-pink-500" />
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-pink-500/50 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-pink-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg">
                  {getIcon(skillGroup.group)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {skillGroup.group}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-md hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
