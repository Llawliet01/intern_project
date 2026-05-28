"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Compass, 
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Palette, Eye, Layout, PenTool
} from "lucide-react";

export default function UxUiPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const processPillars = [
    {
      step: "01",
      title: "Discovery",
      desc: "Detailed user research, stakeholder interviews, and comprehensive competitive analyses."
    },
    {
      step: "02",
      title: "Wireframes",
      desc: "Mapping information architecture, defining user flows, and sketching low-fidelity mockups."
    },
    {
      step: "03",
      title: "Visual Design",
      desc: "Pixel-perfect high-fidelity screens, cohesive design tokens, and unified brand guidelines."
    },
    {
      step: "04",
      title: "Prototyping",
      desc: "Interactive clickable prototypes, hands-on usability tests, and constant design iterations."
    }
  ];

  const designSystems = [
    "Component libraries (Figma & Storybook)",
    "Design tokens and custom variables",
    "Cohesive typography & color systems",
    "Flexible, responsive grids and layouts",
    "Optimized SVG vector icon libraries",
    "Design system governance guidelines"
  ];

  const accessibilityFeatures = [
    "Comprehensive keyboard navigability",
    "Screen reader text compatibility",
    "Color contrast checks (WCAG AA+ ratios)",
    "Semantic HTML layout structure",
    "ARIA labels and interactive roles",
    "Rigorous accessibility auditing"
  ];

  const deliverables = [
    {
      title: "User Research & Persona",
      desc: "Target personas, complete user journey mappings, and actionable UX research logs."
    },
    {
      title: "Architecture & Wireframes",
      desc: "Detailed information architecture diagrams and structural low-fidelity wireframes."
    },
    {
      title: "High-Fidelity Mockups",
      desc: "Pixel-perfect visual screens, UI assets, and developer transfer guidelines."
    },
    {
      title: "Interactive Prototypes",
      desc: "High-fidelity interactive prototypes for usability test runs and stakeholders demo."
    }
  ];

  const timelineSteps = [
    {
      phase: "Research Phase",
      bullets: ["User interviews", "Competitive analysis", "Analytics reviews", "Persona definitions"]
    },
    {
      phase: "Define Phase",
      bullets: ["User journey mappings", "Information architecture", "Feature prioritization", "Design principles"]
    },
    {
      phase: "Design Phase",
      bullets: ["Structural wireframes", "High-fidelity UI screens", "Custom design system", "Component libraries"]
    },
    {
      phase: "Validate Phase",
      bullets: ["Prototype wiring", "Usability session testing", "A/B variant tests", "Design iterations"]
    }
  ];

  const portfolioExamples = [
    {
      title: "SaaS Dashboard Redesign",
      challenge: "Complex enterprise cloud dashboard suffered from bad navigation controls and low daily engagement rates.",
      solution: "Simplified sidebar structures, integrated clear data charts, and personalized dashboard widget flows.",
      results: "Dramatically improved user task completion rates and client satisfaction ratings."
    },
    {
      title: "E-Commerce Mobile App UI",
      challenge: "Mobile shopping store suffered from cart drop-off rates due to multi-step checkout layouts.",
      solution: "Streamlined checkout into a single page, integrated guest checkouts, and optimized touch screen gestures.",
      results: "Significantly decreased cart abandonment rates while boosting mobile transaction counts."
    }
  ];

  const techStack = [
    { name: "Figma", category: "Vector UI Design" },
    { name: "Sketch", category: "UI Mockups" },
    { name: "Adobe XD", category: "Vector Prototypes" },
    { name: "Storybook", category: "UI Component Sandbox" },
    { name: "InVision", category: "Interactive Demos" },
    { name: "Hotjar", category: "Heatmap Tracking" },
    { name: "UserTesting", category: "User Research Session" }
  ];

  const faqs = [
    {
      q: "Do you conduct user research?",
      a: "Yes. We conduct user interviews, surveys, usability testing, and analytics analysis. We create personas, journey maps, and empathy maps to inform design decisions. Research typically takes 1-2 weeks and involves 8-12 participants."
    },
    {
      q: "What is a design system and do I need one?",
      a: "A design system is a collection of reusable components, patterns, and guidelines that ensure consistency. You need one if you have multiple products, a growing team, or want to scale design efficiently. We build design systems in Figma + Storybook."
    },
    {
      q: "How do you ensure accessibility?",
      a: "We follow WCAG 2.1 AA standards: keyboard navigation, screen reader support, color contrast 4.5:1+, semantic HTML, ARIA labels, and focus indicators. We use automated tools (axe, Lighthouse) and manual testing with assistive technologies."
    },
    {
      q: "Can you work with our existing design system?",
      a: "Absolutely. We can extend, enhance, or migrate your existing design system. We work with popular systems (Material Design, Ant Design, Chakra UI) and create custom systems. We provide documentation and training for your team."
    },
    {
      q: "What is your typical project timeline?",
      a: "Simple projects (landing pages, small apps): 3-4 weeks. Medium complexity (multi-page apps): 6-8 weeks. Complex projects (enterprise dashboards, design systems): 10-16 weeks. We work in weekly sprints with regular feedback loops."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Compass className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>UX/UI & Product Design Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                UX/UI <br />
                <span className="bg-gradient-to-r from-rose-500 via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & Product Design
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                User-centered design processes running from initial discovery audits to scalable, accessible design systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-rose-600 to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Product Design
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Process
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Vector Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-design" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244, 63, 94, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-design)" />
                  
                  {/* Drawing Bezier Path */}
                  <path 
                    d="M 50,150 C 150,50 250,250 350,150" 
                    fill="none" 
                    stroke="#f43f5e" 
                    strokeWidth="3.5" 
                    className="ux-bezier-path" 
                  />
                  
                  {/* Anchor point 1 */}
                  <g transform="translate(50, 150)">
                    <circle r="6" fill="#f43f5e" />
                    <circle r="12" fill="none" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                  </g>

                  {/* Bezier handle coordinates */}
                  <line x1="150" y1="50" x2="150" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="150" cy="50" r="5" fill="#fda4af" />

                  {/* Anchor point 2 */}
                  <g transform="translate(350, 150)">
                    <circle r="6" fill="#f43f5e" />
                    <circle r="12" fill="none" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                  </g>
                  
                  {/* Pen icon tracking */}
                  <g transform="translate(200, 150)" className="ux-pen-tracer">
                    <PenTool className="w-6 h-6 text-white -translate-x-3 -translate-y-3 drop-shadow-[0_2px_8px_rgba(244,63,94,0.5)]" />
                  </g>
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                  <span>BEZIER RENDER: ACCURATE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR PROCESS */}
      <section id="process" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">workflow::lifecycle</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Design Process</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPillars.map((pil) => (
              <div 
                key={pil.step}
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-rose-500/30 transition-all flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <span className="text-3xl font-black font-mono text-rose-500">{pil.step}</span>
                  <h4 className="text-base font-bold text-white">{pil.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pil.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGN SYSTEMS & ACCESSIBILITY */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">design::pillars</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Design Systems & Web Accessibility</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Design systems */}
            <div className="p-8 rounded-3xl bg-slate-950/40 border border-white/5 hover:border-rose-500/30 transition-all">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Palette className="w-5 h-5 text-rose-400" />
                <span>Design Systems</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We create scalable design systems that ensure consistency across your product and accelerate development.
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {designSystems.map((ds) => (
                  <li key={ds} className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-rose-400 flex-shrink-0" />
                    <span>{ds}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accessibility */}
            <div className="p-8 rounded-3xl bg-slate-950/40 border border-white/5 hover:border-rose-500/30 transition-all">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-rose-400" />
                <span>Accessibility</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                WCAG 2.1 AA+ compliance built into every layout. Inclusive product design for all users.
              </p>
              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {accessibilityFeatures.map((ac) => (
                  <li key={ac} className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-rose-400 flex-shrink-0" />
                    <span>{ac}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU GET */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">deliverables::manifest</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">What You Get</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((deliv) => (
              <div 
                key={deliv.title}
                className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white">{deliv.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{deliv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DESIGN PROCESS TIMELINE */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">timeline::process</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Design Process Timeline</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step) => (
              <div 
                key={step.phase}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider font-mono">{step.phase}</h4>
                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start text-xs text-slate-700 leading-normal">
                        <Check className="w-4 h-4 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DESIGN PORTFOLIO EXAMPLES */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">portfolio::examples</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Design Cases Portfolio</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioExamples.map((story) => (
              <div 
                key={story.title}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900">{story.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">Challenge: {story.challenge}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Solution: {story.solution}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-1">Key Results</span>
                  <span className="text-xs text-slate-800 font-medium">{story.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES WE USE */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">tools::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Design Tools We Deploy</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className="p-4 bg-white/80 border border-slate-200/60 rounded-xl flex flex-col justify-center shadow-sm"
              >
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-1">{tech.category}</span>
                <span className="text-xs font-bold text-slate-800 leading-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#f1f5f9] to-[#ffffff] py-20 overflow-hidden text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">common::inquiries</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-slate-200/85 rounded-2xl overflow-hidden bg-white/70 hover:bg-white transition-colors shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2C5EAD]" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#ffffff] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Create Exceptional User Experiences
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Let's design products that your users will love. Beautiful, accessible, and fully conversion-optimized UI/UX models.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-rose-600 to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult Design Crew
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
