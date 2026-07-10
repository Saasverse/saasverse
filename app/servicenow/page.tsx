"use client";

import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Settings, 
  ShieldCheck, 
  Users, 
  Zap, 
  BarChart3, 
  HeadphonesIcon,
  CheckCircle2,
  Star,
  Building2,
  Workflow,
  LineChart,
  Quote
} from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTASection from '../components/Home/CTASection';


// Reusable Scroll Animation Wrapper
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ServiceNowPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom 3D Mouse tracking for Hero Banner
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX / innerWidth - 0.5) * 20; // 20 deg max rotation
    const y = (clientY / innerHeight - 0.5) * -20;
    
    containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 overflow-hidden">
      
      {/* 3D Interactive Hero Section */}
      <section 
        className="relative overflow-hidden bg-slate-950 text-white pt-40 pb-24 lg:pt-48 lg:pb-32"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-slate-950"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 perspective-1000">
          <div 
            ref={containerRef}
            className="text-center max-w-4xl mx-auto transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium mb-8"
              style={{ transform: "translateZ(30px)" }} // 3D Pop out effect
            >
              <Star className="w-4 h-4 fill-emerald-400" /> Premier ServiceNow Partner
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl"
              style={{ transform: "translateZ(50px)" }}
            >
              Transform Your Enterprise with <span className="text-emerald-400 inline-block hover:scale-105 transition-transform cursor-pointer">ServiceNow</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed"
              style={{ transform: "translateZ(20px)" }}
            >
              Automate workflows, modernize IT, and elevate employee experiences. We provide end-to-end consulting, implementation, and managed support.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
              style={{ transform: "translateZ(40px)" }}
            >
              <Link href="/contact" className="group bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
                Start Your Transformation 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Core Offerings Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Our ServiceNow Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl">
            Unlock the full potential of the Now Platform with our specialized solutions tailored for your organizational scale.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Settings, title: "IT Service Management (ITSM)", desc: "Consolidate fragmented tools and legacy systems while automating service management processes based on ITIL best practices." },
            { icon: Zap, title: "IT Operations Management (ITOM)", desc: "Gain visibility into your IT infrastructure, map dependencies, prevent issues, and automate complex resolutions." },
            { icon: Users, title: "HR Service Delivery (HRSD)", desc: "Improve employee productivity and satisfaction with seamless, automated HR workflows and a unified portal." },
            { icon: HeadphonesIcon, title: "Customer Service (CSM)", desc: "Elevate customer experience by uniting your front, middle, and back offices to solve issues proactively." },
            { icon: ShieldCheck, title: "Security & Risk (SecOps/GRC)", desc: "Respond faster to security incidents, manage vulnerabilities, and ensure compliance across the enterprise." },
            { icon: LineChart, title: "Strategic Portfolio (SPM)", desc: "Align work with business goals to deliver products and services faster, turning strategy into outcomes." }
          ].map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group h-full cursor-pointer"
              >
                <div className="w-16 h-16 bg-emerald-50/50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Our Implementation Methodology</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">
              We follow a proven framework to ensure your ServiceNow deployment is on time, on budget, and driving real value.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover & Assess", desc: "We analyze your current processes, identify gaps, and define clear business outcomes." },
              { step: "02", title: "Design & Architect", desc: "Creating a scalable blueprint focusing on out-of-the-box features to minimize technical debt." },
              { step: "03", title: "Build & Test", desc: "Agile implementation with regular showcases, followed by rigorous UAT and quality assurance." },
              { step: "04", title: "Launch & Evolve", desc: "Smooth go-live followed by managed support, training, and continuous optimization." }
            ].map((phase, index) => (
              <FadeIn key={index} delay={index * 0.15} className="relative group">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '100%' }} 
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-8 left-0 h-1 bg-emerald-200 -z-10 hidden md:block"
                />
                <motion.div 
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  className="text-6xl font-black text-slate-200 mb-4 transition-colors cursor-default"
                >
                  {phase.step}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">{phase.title}</h3>
                <p className="text-slate-600">{phase.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Feature & Mockup Section */}
      <section className="bg-slate-900 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Enterprise Scale</h2>
              <p className="text-slate-300 mb-8 text-xl">
                We ensure you get the maximum ROI from your ServiceNow investment by focusing on architecture that scales with you.
              </p>
              <ul className="space-y-6">
                {[
                  "Custom integrations via Integration Hub",
                  "Automated testing and robust CI/CD pipelines",
                  "Service portal design and UX optimization",
                  "Platform upgrades and health checks"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
          
          {/* Animated 3D Mockup Container */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div 
              initial={{ rotateY: 20, rotateX: 10, opacity: 0, x: 50 }}
              whileInView={{ rotateY: 0, rotateX: 0, opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="bg-slate-800 rounded-3xl p-2 md:p-8 border border-slate-700 shadow-2xl relative"
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/30 blur-3xl rounded-full"></div>
               <div className="bg-slate-950 rounded-2xl p-6 border border-slate-700 relative z-10 shadow-inner">
                 <div className="flex justify-between items-center mb-6">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="text-slate-500 text-xs font-mono">ServiceNow Analytics</div>
                 </div>
                 
                 {/* Animated Graph */}
                 <div className="h-40 flex items-end gap-3 mb-6 border-b border-slate-800 pb-4">
                    {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        className="flex-1 bg-emerald-500/80 rounded-t-sm hover:bg-emerald-400 transition-colors cursor-pointer"
                      ></motion.div>
                    ))}
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900 p-4 rounded-xl border border-slate-800 cursor-pointer">
                      <div className="text-slate-400 text-sm mb-1">Active Incidents</div>
                      <div className="text-2xl font-bold text-white flex items-center justify-between">
                        12 <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 -rotate-45" /> 14%</span>
                      </div>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900 p-4 rounded-xl border border-slate-800 cursor-pointer">
                      <div className="text-slate-400 text-sm mb-1">CSAT Score</div>
                      <div className="text-2xl font-bold text-white">4.9/5</div>
                   </motion.div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-[3rem] p-12 md:p-20 border border-emerald-200 relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 p-12 opacity-10"
          >
            <Workflow className="w-80 h-80 text-emerald-900" />
          </motion.div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Optimize Your Workflows?</h2>
            <p className="text-slate-700 text-xl mb-10 max-w-2xl mx-auto">
              Schedule a free 30-minute discovery call with our certified architects to discuss your platform goals.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mx-auto text-lg"
            >
             <Link href="/contact"> Book a Consultation </Link> <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </section>

     <CTASection/>
    </div>
  );
}