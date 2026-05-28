import { caseStudiesData } from "@/data/siteData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = caseStudiesData[slug];
  if (!data) return {};
  return {
    title: `${data.title} - Case Study | Aetheris Systems`,
    description: data.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const data = caseStudiesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background visual element */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <div className="max-w-4xl space-y-6">
        <div className="flex flex-wrap gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-[#4FACFE] text-[#030308]">
            {data.industry}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-[#1e2038] text-slate-300">
            {data.duration}
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {data.title}
        </h1>
        <p className="text-lg text-primary font-semibold">
          Client: {data.client}
        </p>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
          {data.description}
        </p>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {data.metrics.map((m, idx) => (
          <div key={idx} className="p-8 rounded-2xl glass-card text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {m.value}
            </div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Project Breakdown */}
      <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-[#1e2038]/40">
        
        {/* Challenge and Solution details */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 border-l-2 border-secondary pl-3">
              The Challenge & Pain Points
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {data.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 border-l-2 border-primary pl-3">
              Our Solution & Architecture
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {data.solution}
            </p>
          </div>
        </div>

        {/* Tech stack sidebar */}
        <div className="lg:col-span-4 p-8 rounded-2xl glass-card space-y-6 h-fit">
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest text-slate-400">
            Project Environment
          </h3>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-[#1e2038]/60">
              <span className="text-slate-500">Client Partner</span>
              <span className="text-slate-300 font-medium">{data.client}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#1e2038]/60">
              <span className="text-slate-500">Vertical Segment</span>
              <span className="text-slate-300 font-medium">{data.industry}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Engagement</span>
              <span className="text-slate-300 font-medium">{data.duration}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1e2038]/60 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-xs text-slate-300 bg-white/[0.02] border border-[#1e2038] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Replicating Testimonial or Call to Action */}
      <div className="p-8 sm:p-12 rounded-2xl glass-panel text-center max-w-4xl mx-auto space-y-6 border border-primary/20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          Want similar operational scaling results?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Arrange an analysis session with our systems division to study your existing databases, microservices configuration, or CI/CD pipelines.
        </p>
        <div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/15"
          >
            Schedule Systems Review
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
