"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2, ChevronRight, Award, Server, Database, Activity, Lock, FileText, ArrowRight, Eye, Shield, HelpCircle, HardDrive } from "lucide-react";
import { toast } from "react-hot-toast";

export default function CompliancePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredRow, setHoveredRow] = useState(null);
  
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll line drawing
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const certifications = [
    { name: "SOC 2 Type II", code: "SOC 2", details: "Type II Audit", scope: "Security & Confidentiality criteria, verified annually." },
    { name: "ISO 27001 ISMS", code: "ISO 27001", details: "Certified ISMS", scope: "Information security management systems framework." },
    { name: "GDPR Privacy", code: "GDPR", details: "EEA Privacy Compliance", scope: "Data protection, consent logs, and DPA agreements." },
    { name: "HIPAA Security", code: "HIPAA", details: "HIPAA Eligible", scope: "Patient Health Info safeguards and logging guidelines." },
    { name: "PCI DSS Vaults", code: "PCI DSS", details: "Compliance Ready", scope: "Secure credit card ledger tokenizations and perimeter walls." }
  ];

  const timelineSteps = [
    { title: "Assess", desc: "Identify regulatory gaps, scoping data flows, and infrastructure audits." },
    { title: "Implement", desc: "Configure encryption controls, IAM least privilege, and backup vaults." },
    { title: "Audit", desc: "Co-deliver automated readiness profiles and third-party audit reports." },
    { title: "Monitor", desc: "Maintain continuous checkmarks, real-time logging, and drift alerts." },
    { title: "Certified", desc: "Obtain clean audit certification parameters and trust validation certificates." }
  ];

  const matrixRows = [
    { req: "Database Encryption", hipaa: true, gdpr: true, soc2: true },
    { req: "Automated Audit Logs", hipaa: true, gdpr: true, soc2: true },
    { req: "Multi-Region Backups", hipaa: true, gdpr: true, soc2: true },
    { req: "Access Revocation SLA", hipaa: false, gdpr: true, soc2: true },
    { req: "mTLS Intra-service", hipaa: false, gdpr: false, soc2: true }
  ];

  const handleRequestAccess = () => {
    toast.success("Request for compliance package sent to our legal advisory team!");
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden text-left"
      style={{
        background: `
          radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.035), transparent 40%),
          #f8fafc
        `
      }}
    >
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <motion.header 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
              COMPLIANCE AT AETHERIS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-outfit tracking-tight leading-[1.08]">
              Built to Comply. <br />
              Designed to Scale.
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We adhere to global compliance standards and frameworks to ensure your business meets regulatory and industry requirements with confidence.
            </p>
          </div>

          {/* Right: 3D Folder pedestal SVG */}
          <div className="hidden lg:block lg:col-span-5 relative h-[280px]">
            <svg viewBox="0 0 400 280" className="w-full h-full text-blue-500" fill="none">
              <g transform="translate(50, 40)">
                {/* Grid Pedestal Surface */}
                <path d="M 50 140 L 150 85 L 250 140 L 150 195 Z" fill="rgba(37,99,235,0.03)" stroke="rgba(37,99,235,0.12)" strokeWidth="1.5" />
                
                {/* Pedestal 3D Base */}
                <path d="M 50 140 L 150 195 L 150 205 L 50 150 Z" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.15)" />
                <path d="M 250 140 L 150 195 L 150 205 L 250 150 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.15)" />

                {/* Pedestal Layer 2 (Gloss Panel) */}
                <g transform="translate(0, -10)">
                  <path d="M 65 130 L 150 85 L 235 130 L 150 175 Z" fill="white" stroke="rgba(37,99,235,0.15)" strokeWidth="1.2" className="shadow-md" />
                </g>

                {/* 3D Folder Layout Graphic */}
                <g transform="translate(100, 30)" className="animate-float">
                  {/* Folder Back Sleeve */}
                  <path d="M 10 40 H 85 V 90 H 10 V 40 Z" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" />
                  {/* Peaking Document sheets */}
                  <rect x="20" y="25" width="55" height="50" rx="3" fill="white" stroke="rgba(37,99,235,0.15)" className="shadow-sm" />
                  <line x1="30" y1="35" x2="65" y2="35" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" />
                  <line x1="30" y1="45" x2="55" y2="45" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" />
                  
                  {/* Folder Front Sleeve */}
                  <path d="M 5 45 H 45 L 55 52 H 95 V 95 H 5 Z" fill="url(#folderGrad)" stroke="rgb(37,99,235)" strokeWidth="1.5" className="shadow-lg" />
                  
                  {/* Shield Check Badge overlay */}
                  <path d="M 50 68 L 57 71.5 V 80 C 57 85 50 89 50 89 C 50 89 43 85 43 80 V 71.5 L 50 68 Z" fill="rgba(255,255,255,0.9)" stroke="rgb(37,99,235)" strokeWidth="1.2" />
                  <path d="M 47 79 L 49.5 81.5 L 53.5 76.5" stroke="rgb(37,99,235)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>

              {/* Gradients */}
              <defs>
                <linearGradient id="folderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4bb8fa" />
                  <stop offset="100%" stopColor="#1591dc" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </motion.header>

        {/* ================= 3D CERTIFICATION BADGES ================= */}
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-1">
              COMPLIANCE ACCREDITATIONS
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Hover over each card to flip and review audit scope details.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.name} 
                className="perspective-[1000px] h-36 w-full relative cursor-pointer group"
              >
                <div className="w-full h-full relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
                  
                  {/* FRONT: Logo & Name */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-slate-200/80 rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 space-y-3 text-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight leading-tight">{cert.code}</h4>
                      <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">{cert.details}</span>
                    </div>
                  </div>

                  {/* BACK: Detailed Scope */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col justify-center text-center space-y-1.5 shadow-inner">
                    <h5 className="font-black text-[10px] text-blue-700 uppercase tracking-widest font-mono">AUDIT PROFILE</h5>
                    <p className="text-[10px] text-slate-650 font-semibold leading-relaxed">
                      {cert.scope}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPLIANCE MATRIX & JOURNEY TIMELINE ================= */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= COMPLIANCE TIMELINE ================= */}
          <div ref={timelineRef} className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-1">COMPLIANCE JOURNEY</h3>
            
            <div className="relative pl-8 space-y-8 py-4">
              {/* Scroll drawing line */}
              <div className="absolute left-[3px] top-4 bottom-4 w-[3px] bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  style={{ scaleY }}
                  className="w-full h-full bg-blue-600 origin-top shadow-[0_0_8px_#2563eb]"
                />
              </div>

              {/* Timeline Steps */}
              {timelineSteps.map((step, idx) => (
                <div key={step.title} className="relative group/timeline">
                  {/* Bullet */}
                  <div className="absolute -left-[32px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-350 z-10 transition-colors duration-300 group-hover/timeline:border-blue-600 group-hover/timeline:bg-blue-600" />
                  
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-slate-900 tracking-tight flex items-center gap-2 group-hover/timeline:text-blue-600 transition-colors">
                      {step.title}
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">Stage 0{idx + 1}</span>
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= COMPLIANCE MATRIX ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-1">COMPLIANCE MATRIX</h3>
            
            {/* Interactive Grid Table */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">
                    <th className="py-4 px-6 text-left">Requirement</th>
                    <th className="py-4 px-4 text-center">HIPAA</th>
                    <th className="py-4 px-4 text-center">GDPR</th>
                    <th className="py-4 px-4 text-center">SOC 2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {matrixRows.map((row, idx) => (
                    <tr 
                      key={row.req}
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`transition-colors font-medium ${hoveredRow === idx ? "bg-blue-50/30" : ""}`}
                    >
                      <td className="py-4 px-6 font-extrabold text-slate-900 text-xs sm:text-sm">{row.req}</td>
                      <td className="py-4 px-4 text-center">
                        {row.hipaa ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.gdpr ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.soc2 ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Document and Policies CTA Panel */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight">Access Compliance Package</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Download our Security Policy, DPA, and Subprocessor list.</p>
                </div>
              </div>
              
              <button 
                onClick={handleRequestAccess}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl transition-all flex items-center shrink-0 gap-1.5 shadow shadow-blue-600/10 active:scale-98"
              >
                Request Access
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-800 text-white text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle grid texture in banner */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Need compliance support?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-medium leading-relaxed">
                Our team can help you with security questionnaires, audit preparation, HIPAA agreements, and system reviews.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => toast.success("Compliance Support request sent! Our team will contact you shortly.")}
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center shrink-0 gap-2 shadow-md relative z-10"
          >
            Contact Compliance Team
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
