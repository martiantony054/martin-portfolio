import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Code2, ExternalLink, Github, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display flex items-center gap-3">
                        <Code2 className="text-cyan-400" />
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group flex flex-col bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)]"
                        >
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                                        <Layers size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.links && (
                                            <a href={`${project.links.github}`} className="text-slate-500 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        <a href={`${project.links.externallink}`} className="text-slate-500 hover:text-cyan-400 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="text-sm font-mono text-slate-500 mb-6">
                                    {project.dates}
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="text-cyan-500 mt-1.5 text-xs">▹</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                                    {project.stack.split(', ').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
