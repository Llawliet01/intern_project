import { blogData } from "@/data/siteData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = blogData[slug];
  if (!data) return {};
  return {
    title: `${data.title} - Blog | Aetheris Systems`,
    description: data.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const data = blogData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Background visual element */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Back button */}
      <div>
        <Link 
          href="/blog" 
          className="inline-flex items-center text-xs font-bold text-slate-400 hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase border border-primary/20">
          {data.category}
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 border-y border-[#1e2038]/60 py-4">
          <div className="flex items-center space-x-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>By {data.author}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{data.date}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>{data.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-6 pt-4">
        <p>{data.content}</p>
        <p className="border-l-4 border-primary pl-4 py-2 text-slate-400 italic">
          Disclaimer: Technical strategies and configurations outlined above are for advisory purposes. Contact Aetheris Systems for customized system architecture planning.
        </p>
        <p>
          At Aetheris Systems, we help product engineering divisions set up continuous delivery pipelines, isolate multi-tenant database records, and secure telemetry data pipelines. Reach out to see how we can optimize your application platform.
        </p>
      </article>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-2xl glass-panel text-center max-w-2xl mx-auto space-y-6 border border-primary/20 mt-16">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight">
          Want custom architectural blueprints?
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Our senior systems developers can assist in auditing your codebases, reviewing latency stats, or outlining security benchmarks.
        </p>
        <div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/15"
          >
            Arrange Consultation
          </Link>
        </div>
      </div>

    </div>
  );
}
