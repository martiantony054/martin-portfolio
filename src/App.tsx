import React, { useState } from 'react';
import { AnimatedBackground } from './Components/AnimatedBackground';
import { SplashScreen } from './Components/SplashScreen';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Experience } from './Components/Experience';
import { Achievements } from './Components/Achivements';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Education } from './Components/Education';
import { resumeData } from './data/resume';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
          </main>

          <footer className="relative z-10 py-12 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-sm text-center">
            <div className="flex justify-center gap-6 mb-8">
              <a href={`mailto:${resumeData.basics.email}`} className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
                <Mail size={20} />
              </a>
              <a href={`https://${resumeData.basics.links.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`https://${resumeData.basics.links.github}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
                <Github size={20} />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
