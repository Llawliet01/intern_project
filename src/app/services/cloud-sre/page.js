"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Server,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Play, Cloud, ShieldAlert
} from "lucide-react";

export default function CloudSrePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const approach = {
    migration: {
      title: "Cloud Migration",
      desc: "Phased, safe workload migrations ensuring transaction safety and minimal disruption.",
      bullets: [
        "Readiness assessment & audit",
        "Landing zone baseline setup",
        "Lift-and-shift or microservices re-architecture",
        "Active data migration strategies",
        "Cutover dry-run & planning"
      ]
    },
    iac: {
      title: "Infrastructure as Code",
      desc: "Declarative configuration states that completely replace manual server setup cycles.",
      bullets: [
        "Terraform & CloudFormation modules",
        "GitOps delivery pipelines",
        "Multi-environment states lock",
        "Automated workspace provisioning",
        "Drift compliance detection rules"
      ]
    },
    sre: {
      title: "Site Reliability Engineering",
      desc: "Continuous performance audits, incident management systems, and target SLA tracking.",
      bullets: [
        "SLO/SLI baseline threshold definition",
        "Error budget tracking rules",
        "Automated incident escalations",
        "Observability dashboard (Grafana / Datadog)",
        "Disaster Recovery & active back syncs"
      ]
    }
  };

  const cloudPlatforms = [
    {
      name: "Amazon Web Services (AWS)",
      desc: "EC2 runtime nodes, EKS clusters, Lambda serverless, PostgreSQL RDS, S3 storage buckets, CloudFront CDN, and Route53 routing gateways.",
      color: "border-orange-500/20 text-orange-400"
    },
    {
      name: "Microsoft Azure",
      desc: "Azure VMs, AKS Kubernetes clusters, Functions backend handlers, SQL server directories, Blob Storage buckets, and Azure CDN.",
      color: "border-blue-500/20 text-blue-400"
    },
    {
      name: "Google Cloud Platform (GCP)",
      desc: "Compute Engine nodes, GKE orchestrators, Cloud Run handlers, Cloud SQL schemas, and Google Cloud Storage buckets.",
      color: "border-red-500/20 text-red-400"
    }
  ];

  const migrationSteps = [
    {
      title: "Assessment",
      desc: "We analyze your active server states, catalog database assets, calculate cloud TCO (Total Cost of Ownership), and map system dependencies.",
      bullets: ["Asset inventory audits", "TCO cost calculators", "Initial risks matrix"]
    },
    {
      title: "Planning",
      desc: "We draft secure landing zones, configure virtual networks, map IAM identity groups, and draft migration waves.",
      bullets: ["Landing zone design", "IAM user controls setup", "Compliance baseline checks"]
    },
    {
      title: "Migration",
      desc: "We migrate core files and database layers in waves, running parallel pilot validations before final DNS switchovers.",
      bullets: ["Pilot wave run", "Microservices extraction", "Ledger sync validation"]
    },
    {
      title: "Optimization",
      desc: "We tune database indices, implement automated autoscaling rules, configure monitoring dashboards, and set budget guardrails.",
      bullets: ["Cost scaling guardrails", "Grafana alerts thresholds", "Continuous load auditing"]
    }
  ];

  const costTuning = [
    "Right-sizing instances based on actual usage",
    "Reserved instances & savings plans configurations",
    "Spot instances for non-critical workloads",
    "Auto-scaling policies triggered by threshold metrics",
    "Storage lifecycle policies & automatic archives",
    "Unused resources identification and cleanup",
    "Multi-region cost analysis"
  ];

  const successStories = [
    {
      title: "E-Commerce Platform Cloud Migration",
      desc: "Migrated a legacy monolithic ERP infrastructure to multi-region cloud nodes with zero transactional downtime.",
      solution: "Phased migration with blue-green deployment strategy and real-time database synchronizations.",
      borderColor: "border-blue-500/25"
    },
    {
      title: "SaaS Company Multi-Cloud Strategy",
      desc: "Reduced platform vendor lock-in risk and optimized delivery speeds for globally distributed users.",
      solution: "Engineered cloud-agnostic configurations utilizing containerized Kubernetes nodes managed by Terraform.",
      borderColor: "border-purple-500/25"
    }
  ];

  const faqs = [
    {
      q: "How long does a typical cloud migration take?",
      a: "Simple migrations can take 8-12 weeks. Complex enterprise migrations typically range from 6-12 months depending on workload complexity, data volume, and regulatory requirements. We use a phased approach to minimize risk."
    },
    {
      q: "What is the typical cost savings from cloud migration?",
      a: "Most clients see 20-40% cost reduction after optimization. Initial costs may be similar to on-premise, but savings come from eliminating hardware refresh cycles, reducing data center costs, and optimizing resource utilization."
    },
    {
      q: "Do you provide ongoing support after migration?",
      a: "Yes! We offer managed cloud services with 24/7 monitoring, incident response, optimization, and cost management. Our SRE team ensures your infrastructure remains reliable and efficient."
    },
    {
      q: "Can you help with multi-cloud strategy?",
      a: "Absolutely. We design cloud-agnostic architectures using Kubernetes, Terraform, and container technologies that work across multiple cloud platforms. This prevents vendor lock-in and optimizes costs."
    },
    {
      q: "What about compliance and security?",
      a: "We implement security best practices including encryption at rest/transit, IAM policies, network segmentation, security compliance frameworks, and regular security audits."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Cloud className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>Cloud & Site Reliability Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Cloud Migrations <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & SRE Practices
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Migrate to the cloud safely, automate infrastructure setups using declarative states, and implement Site Reliability Engineering workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Your Project
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

            {/* Right Side Vector/SVG Blueprint Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-sre" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-sre)" />
                  <circle cx="200" cy="150" r="50" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 5" />
                  <circle cx="200" cy="150" r="18" fill="#090d16" stroke="#8b5cf6" strokeWidth="2.5" />
                  <Server className="w-4 h-4 text-[#8b5cf6] -translate-x-2 -translate-y-2" style={{ transform: "translate(200px, 150px)" }} />
                  
                  <g transform="translate(100, 100)">
                    <circle r="16" fill="#0c0e1e" stroke="#c084fc" strokeWidth="2" />
                    <Cpu className="w-4 h-4 text-[#c084fc] -translate-x-2 -translate-y-2" />
                  </g>
                  <g transform="translate(300, 100)">
                    <circle r="16" fill="#0c0e1e" stroke="#c084fc" strokeWidth="2" />
                    <Layers className="w-4 h-4 text-[#c084fc] -translate-x-2 -translate-y-2" />
                  </g>
                  <g transform="translate(200, 250)">
                    <circle r="16" fill="#0c0e1e" stroke="#c084fc" strokeWidth="2" />
                    <Database className="w-4 h-4 text-[#c084fc] -translate-x-2 -translate-y-2" />
                  </g>
                  <path d="M 100,100 Q 200,100 200,132" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="svg-blueprint-line" />
                  <path d="M 300,100 Q 200,100 200,132" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="svg-blueprint-line" />
                  <path d="M 200,250 L 200,168" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="svg-blueprint-line" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THE THREE-COLUMN APPROACH */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">operational::framework</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our SRE & Infrastructure Approach</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(approach).map(([key, value]) => (
              <div 
                key={key}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">{value.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{value.desc}</p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {value.bullets.map((b) => (
                      <li key={b} className="flex items-start text-xs text-slate-300">
                        <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* 3. SUPPORTED PLATFORMS */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">supported::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Cloud Platforms We Support</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cloudPlatforms.map((plat) => (
              <div 
                key={plat.name}
                className={`p-6 rounded-2xl bg-slate-950/40 border ${plat.color} flex flex-col space-y-3`}
              >
                <h4 className="text-base font-bold text-white">{plat.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MIGRATION TIMELINE PROCESS */}
      <section id="process" className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 text-white">
            <h2 className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-mono">migration::waves</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">The Migration Process</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationSteps.map((step, idx) => (
              <div 
                key={step.title}
                className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black font-mono text-[#4BB8FA]">0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <ul className="space-y-1.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center text-[10px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#4BB8FA] mr-2 flex-shrink-0" />
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

      {/* 5. COST OPTIMIZATION AND CHECKS */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">efficiency::audit</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Cost Optimization Guardrails</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              We proactively audit and scale resources down to avoid runaway infrastructure bills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {costTuning.map((tune) => (
              <div 
                key={tune}
                className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start space-x-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-semibold">{tune}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">case::studies</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Cloud Success Stories</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.title}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-2">{story.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{story.desc}</p>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-1">Our Strategy</span>
                  <span className="text-xs text-slate-800 font-medium">{story.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#f1f5f9] to-[#ffffff] py-20 overflow-hidden text-slate-950">
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

      {/* 8. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#ffffff] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Plan Your Cloud Migration
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Let's assess your infrastructure and create a migration roadmap tailored to your needs. Talk with our site reliability engineers.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Talk to SRE Crew
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
