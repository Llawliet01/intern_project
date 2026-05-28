"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Server,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Play, Cloud, ShieldAlert, ThumbsUp
} from "lucide-react";

export default function CloudSrePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Scroll targets for Success Stories Sticky animation
  const successStoriesRef = useRef(null);
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!successStoriesRef.current) return;
      const rect = successStoriesRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollHeight = rect.height - viewportHeight;
      
      let p = 0;
      if (rect.top > 0) {
        p = 0;
      } else if (rect.bottom < viewportHeight) {
        p = 1;
      } else {
        p = -rect.top / scrollHeight;
      }
      scrollProgress.set(p);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollProgress]);

  // Scroll Mitosis Card division coordinates
  const leftCardX = useTransform(scrollProgress, [0, 0.55], [0, -55]);
  const rightCardX = useTransform(scrollProgress, [0, 0.55], [0, 55]);

  // Inner border-radius morphing: goes from 0px (merged) to 24px (fully split)
  const leftCardRadius = useTransform(scrollProgress, [0, 0.55], [0, 24]);
  const rightCardRadius = useTransform(scrollProgress, [0, 0.55], [0, 24]);

  // Inner border color fading in
  const leftCardBorderColor = useTransform(scrollProgress, [0.15, 0.55], ["rgba(16, 185, 129, 0.02)", "rgba(16, 185, 129, 0.25)"]);
  const rightCardBorderColor = useTransform(scrollProgress, [0.15, 0.55], ["rgba(16, 185, 129, 0.02)", "rgba(16, 185, 129, 0.25)"]);

  // Inner content fade & scale
  const innerOpacity = useTransform(scrollProgress, [0.35, 0.55], [0, 1]);
  const innerScale = useTransform(scrollProgress, [0.35, 0.55], [0.95, 1]);

  // Merged overlay fade & scale
  const overlayOpacity = useTransform(scrollProgress, [0, 0.20], [1, 0]);
  const overlayScale = useTransform(scrollProgress, [0, 0.20], [1, 0.9]);

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
      challenge: "Migrating legacy on-premise ERP infrastructure to the cloud with zero transactional downtime.",
      solution: "A phased migration strategy with blue-green deployment gates and real-time active data synchronization.",
      results: [
        "Zero downtime during cutover phases",
        "Active blue-green deployment waves",
        "Real-time database sync pipelines"
      ],
      borderColor: "border-blue-500/25"
    },
    {
      title: "SaaS Company Multi-Cloud Strategy",
      challenge: "Reducing platform vendor lock-in risk and optimizing delivery latency for globally distributed users.",
      solution: "A multi-cloud deployment strategy utilizing declarative Terraform modules and Kubernetes container orchestrators.",
      results: [
        "Eliminated single vendor dependency risk",
        "Reduced latency for global users by 35%",
        "100% automated infrastructure setups"
      ],
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
      <section 
        ref={successStoriesRef} 
        className="relative h-auto lg:h-[135vh] bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] border-b border-black/5 text-slate-950"
      >
        <div className="relative lg:sticky lg:top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto lg:h-screen py-12 lg:py-0 flex flex-col justify-center overflow-visible lg:overflow-hidden z-10">
          {/* Background Big Dotted Thumbs Up Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
            {/* Soft Radial Glow */}
            <div className="absolute w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[850px] lg:h-[850px] rounded-full bg-emerald-500/5 blur-[80px]" />
            <svg 
              className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] text-emerald-600 opacity-[0.15]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="thumbs-up-dots-sre" width="0.4" height="0.4" patternUnits="userSpaceOnUse">
                  <circle cx="0.2" cy="0.2" r="0.05" fill="currentColor" />
                </pattern>
              </defs>
              <path 
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                fill="url(#thumbs-up-dots-sre)"
              />
              <path 
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                stroke="currentColor"
                strokeWidth="0.12"
                strokeDasharray="0.01 0.3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animation container */}
          <div className="relative w-full max-w-5xl mx-auto h-auto lg:h-[450px] flex justify-center items-center">
            
            {/* Desktop Mitosis Scroll Animation */}
            <div className="hidden lg:flex justify-center items-center relative w-full max-w-[900px] h-full">
              
              {/* Central Separating Seam Line */}
              <motion.div 
                style={{ opacity: overlayOpacity }}
                className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/25 to-transparent z-25 pointer-events-none"
              />

              {/* 1. Left Card */}
              <motion.div 
                style={{ 
                  x: leftCardX, 
                  borderTopRightRadius: leftCardRadius, 
                  borderBottomRightRadius: leftCardRadius,
                  borderRightColor: leftCardBorderColor
                }}
                className="w-[420px] h-[450px] bg-[#060b14] border border-emerald-500/25 shadow-[0_20px_50px_rgba(6,11,20,0.25)] relative flex flex-col justify-between p-6 md:p-8 rounded-l-3xl z-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] pointer-events-auto text-white"
              >
                <div className="absolute inset-0 rounded-inherit bg-[radial-gradient(circle_at_100%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
                
                <motion.div 
                  style={{ opacity: innerOpacity, scale: innerScale }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">MIGRATION</span>
                      <span className="text-xl font-bold text-slate-700 font-mono">01</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{successStories[0].title}</h3>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[0].challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Strategy</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[0].solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1">
                      {successStories[0].results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* 2. Right Card */}
              <motion.div 
                style={{ 
                  x: rightCardX, 
                  borderTopLeftRadius: rightCardRadius, 
                  borderBottomLeftRadius: rightCardRadius,
                  borderLeftColor: rightCardBorderColor
                }}
                className="w-[420px] h-[450px] bg-[#060b14] border border-emerald-500/25 shadow-[0_20px_50px_rgba(6,11,20,0.25)] relative flex flex-col justify-between p-6 md:p-8 rounded-r-3xl z-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] pointer-events-auto text-white"
              >
                <div className="absolute inset-0 rounded-inherit bg-[radial-gradient(circle_at_0%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
                
                <motion.div 
                  style={{ opacity: innerOpacity, scale: innerScale }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-teal-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">MULTI-CLOUD</span>
                      <span className="text-xl font-bold text-slate-700 font-mono">02</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{successStories[1].title}</h3>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[1].challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Strategy</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[1].solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1">
                      {successStories[1].results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Central Overlay */}
              <motion.div 
                style={{ opacity: overlayOpacity, scale: overlayScale }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-30 pointer-events-none w-full px-8"
              >
                <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                  Our <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Success Stories</span>
                </h4>
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-4 font-mono">
                  Scroll down to divide cluster
                </p>
              </motion.div>

            </div>

            {/* Mobile View: Standard Stacked Cards */}
            <div className="block lg:hidden space-y-6 px-2 w-full max-w-md mx-auto">
              <div className="p-6 rounded-2xl bg-[#060b14] border border-emerald-500/20 shadow-md flex flex-col items-center justify-center text-center py-10 text-white">
                <ThumbsUp className="w-10 h-10 text-emerald-400 mb-4 animate-bounce" />
                <h4 className="text-xl font-extrabold text-white">Our Success Stories</h4>
                <p className="text-xs text-emerald-400 mt-2 font-medium">Read our featured case studies below</p>
              </div>
              
              {successStories.map((story) => (
                <div 
                  key={story.title}
                  className="p-6 rounded-2xl bg-[#060b14] border border-emerald-500/20 shadow-md flex flex-col justify-between text-white"
                >
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-white">{story.title}</h4>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Strategy</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1.5">
                      {story.results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="relative bg-[#ffffff] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          {/* Watermark text behind */}
          <div className="absolute inset-0 flex items-center justify-center -top-8 pointer-events-none select-none overflow-hidden">
            <span className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-100 tracking-wider whitespace-nowrap opacity-70 uppercase">
              Frequently Ask Question
            </span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 relative z-10">
            Frequently Ask Question
          </h3>
          <p className="text-sm font-bold text-cyan-500 mt-2 relative z-10 cursor-pointer hover:underline">
            <Link href="/contact">Click Here to contact now.</Link>
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Accordions & Pagination */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="space-y-4 min-h-[380px]">
                {faqs.slice(faqPage * 3, (faqPage + 1) * 3).map((faq, pageIdx) => {
                  const globalIdx = faqPage * 3 + pageIdx;
                  const isOpen = openFaqIndex === globalIdx;
                  return (
                    <div 
                      key={globalIdx} 
                      className="border border-slate-100 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                    >
                      <button
                        onClick={() => toggleFaq(globalIdx)}
                        className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <div className="w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-start gap-4 pt-6 pl-4">
                <button 
                  onClick={() => setFaqPage(0)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 0 ? "bg-cyan-600 scale-105" : "bg-cyan-500/70 hover:bg-cyan-500"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-cyan-600 scale-105" : "bg-cyan-500/70 hover:bg-cyan-500"
                  }`}
                >
                  2
                </button>
              </div>
            </div>

            {/* Right Column: Illustration & Question Input Form */}
            <div className="lg:col-span-5 flex flex-col items-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
              {/* Question mark illustration */}
              <div className="w-56 h-48 relative mb-6">
                <img 
                  src="/assets/cloud_faq_illustration.png" 
                  alt="Cloud FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                You can ask anything you want to know about Cloud Migrations & SRE.
              </p>

              {/* Submission Form */}
              <div className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono pl-1">
                    Let me know.
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter Here"
                      value={faqInput}
                      onChange={(e) => setFaqInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 pr-10 shadow-sm"
                    />
                    {faqInput && (
                      <button 
                        onClick={() => setFaqInput("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold font-mono"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    onClick={() => {
                      if (!faqInput.trim()) return;
                      setFaqSent(true);
                      setFaqInput("");
                      setTimeout(() => setFaqSent(false), 4000);
                    }}
                    className="w-full sm:w-auto px-10 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
                  >
                    {faqSent ? "Sent Successfully!" : "Sent"}
                  </button>
                </div>
                
                {faqSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[10px] font-bold text-emerald-600 font-mono mt-2"
                  >
                    Thank you! Your question has been forwarded to our support queue.
                  </motion.div>
                )}
              </div>
            </div>

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
