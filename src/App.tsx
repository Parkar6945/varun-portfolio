import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, Phone, ExternalLink, Briefcase, TrendingUp, Award, Layers } from 'lucide-react';
import { resumeData } from './resumeData';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="mb-16 text-center md:text-left"
  >
    <h2 className="text-4xl md:text-5xl font-light text-slate-100 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-amber-200/80 uppercase tracking-[0.2em] text-sm font-medium">
        {subtitle}
      </p>
    )}
    <div className="h-px w-24 bg-gradient-to-r from-amber-200/50 to-transparent mt-6 mx-auto md:mx-0"></div>
  </motion.div>
);

function App() {
  const { personalInfo, education, experience, projects, skills, certifications } = resumeData;

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-400 font-sans selection:bg-amber-500/20 selection:text-amber-100 overflow-hidden">
      
      {/* Silky Blurred Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 mix-blend-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)', filter: 'blur(40px)' }}></div>
        {/* Soft gradient orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-[#05070a]/60 backdrop-blur-xl border-b border-white/[0.03]">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="font-light text-xl tracking-widest text-slate-200 uppercase">
              Varun<span className="text-amber-200 font-medium">.</span>Parkar
            </div>
            <div className="hidden md:flex space-x-10 text-xs font-medium text-slate-400 tracking-[0.15em] uppercase">
              <a href="#about" className="hover:text-amber-200 transition-colors duration-300">Profile</a>
              <a href="#experience" className="hover:text-amber-200 transition-colors duration-300">Experience</a>
              <a href="#projects" className="hover:text-amber-200 transition-colors duration-300">Portfolio</a>
            </div>
            <a
              href="#"
              className="flex items-center space-x-2 text-amber-200/80 hover:text-amber-100 transition-colors duration-300 text-sm tracking-wider"
            >
              <span className="hidden sm:inline">CV</span>
              <Download size={16} />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="pt-40 pb-24 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-100 leading-[1.1] mb-6 tracking-tight">
                Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-500/80 font-medium">Financial Value.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                <h2 className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
                  {personalInfo.title}
                </h2>
                <div className="hidden md:block h-px w-12 bg-slate-700"></div>
                <div className="flex items-center space-x-2 text-amber-200/60 text-sm uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  <span>Available for Opportunities</span>
                </div>
              </div>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light">
                {personalInfo.summary}
              </p>
              
              <div className="flex flex-wrap gap-8 text-sm tracking-wide text-slate-400">
                <a href={personalInfo.linkedin} className="group flex items-center space-x-3 hover:text-amber-200 transition-colors duration-300">
                  <div className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:bg-amber-500/10 group-hover:border-amber-200/30 transition-all duration-300">
                    <Linkedin size={18} strokeWidth={1.5} />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="group flex items-center space-x-3 hover:text-amber-200 transition-colors duration-300">
                  <div className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:bg-amber-500/10 group-hover:border-amber-200/30 transition-all duration-300">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader title="Professional Trajectory" subtitle="Career History" />
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
                >
                  <div className="md:grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-3 mb-6 md:mb-0">
                      <div className="text-amber-200/80 text-sm font-medium tracking-wider mb-2">{exp.period}</div>
                      <div className="text-slate-500 text-sm uppercase tracking-widest">{exp.company}</div>
                    </div>
                    <div className="md:col-span-9">
                      <h3 className="text-2xl font-light text-slate-100 mb-6 group-hover:text-amber-100 transition-colors duration-300">{exp.title}</h3>
                      <ul className="space-y-4">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start text-slate-400 font-light leading-relaxed">
                            <span className="text-amber-200/50 mr-4 mt-2 h-1 w-1 rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects & Capabilities Section */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Selected Engagements" subtitle="Portfolio & Analytics" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-32">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-amber-200/20 transition-all duration-500"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-amber-200/70 text-xs font-medium tracking-[0.2em] uppercase">{project.period}</div>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-amber-200 transition-colors duration-300">
                      <ExternalLink size={18} strokeWidth={1.5} />
                    </a>
                  </div>
                  
                  {index === 0 && (
                    <div className="w-full h-40 mb-8 rounded-2xl overflow-hidden relative opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700">
                      <img src="/chart.jpg" alt="Project Visual" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-light text-slate-100 mb-4 group-hover:text-amber-100 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-white/[0.03] text-slate-300 text-xs tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Matrix Redesigned as Chic Capabilities */}
            <SectionHeader title="Core Capabilities" subtitle="Expertise & Tools" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Financial Mechanics", icon: TrendingUp, items: skills.core },
                { title: "Technical Stack", icon: Layers, items: skills.tools },
                { title: "Credentials", icon: Award, items: certifications.slice(0, 4) }
              ].map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.03]"
                >
                  <category.icon size={24} strokeWidth={1} className="text-amber-200 mb-6" />
                  <h3 className="text-xl font-light text-slate-200 mb-6">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-slate-400 font-light text-sm flex items-start">
                        <span className="text-amber-200/40 mr-3 mt-1.5 h-1 w-1 rounded-full flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="py-24 px-6 border-t border-white/[0.03] mt-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-slate-200 mb-8 tracking-tight">Ready to collaborate?</h2>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-200 hover:bg-amber-200 hover:text-[#05070a] hover:border-amber-200 transition-all duration-500 group"
            >
              <span className="tracking-widest uppercase text-sm font-medium">Initiate Dialogue</span>
            </a>
            
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-widest uppercase font-medium">
              <div className="flex space-x-8 mb-6 md:mb-0">
                <a href={personalInfo.linkedin} className="hover:text-amber-200 transition-colors duration-300">LinkedIn</a>
                <a href={personalInfo.github} className="hover:text-amber-200 transition-colors duration-300">GitHub</a>
              </div>
              <p>© {new Date().getFullYear()} VARUN PARKAR. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
