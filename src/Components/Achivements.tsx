import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { resumeData } from '../data/resume';
import { Trophy, TrendingUp, Activity, Zap } from 'lucide-react';

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix
  const numMatch = value.match(/(\d+)/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    if (isInView && target > 0) {
      let start = 0;
      const duration = 2000; // 2s
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-300">
      {target > 0 ? count : ''}{suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'performance': return <Zap className="text-yellow-400" size={24} />;
      case 'quality': return <Activity className="text-green-400" size={24} />;
      case 'reliability': return <Trophy className="text-indigo-400" size={24} />;
      case 'velocity': return <TrendingUp className="text-cyan-400" size={24} />;
      default: return <Trophy className="text-indigo-400" size={24} />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-24 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display inline-flex items-center gap-3">
            <Trophy className="text-yellow-500" />
            Impact & Achievements
          </h2>
          <div className="h-1 w-20 bg-yellow-500/50 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div className="flex items-center justify-between">
                  {getIcon(achievement.type)}
                  <div className="px-2 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {achievement.type}
                  </div>
                </div>
                
                <div className="mt-4">
                  <AnimatedCounter value={achievement.metric} />
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
