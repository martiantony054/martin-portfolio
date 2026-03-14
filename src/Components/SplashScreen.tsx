import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
      >
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center justify-center w-24 h-24"
          >
            <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl rotate-45" />
            <div className="absolute inset-0 border-2 border-indigo-400/50 rounded-xl rotate-45 animate-pulse" />
            <span className="text-4xl font-bold tracking-tighter font-display bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
              MA
            </span>
          </motion.div>

          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
