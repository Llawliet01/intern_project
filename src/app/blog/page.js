"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogData } from "@/data/siteData";

export default function BlogHub() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background visual elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Engineering Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Aetheris Tech Log
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Guides, best practices, and insights regarding software engineering, automated DevOps, and security structures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(blogData).map(([slug, post]) => {
          return (
            <div key={slug} className="p-6 rounded-2xl glass-card flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span className="font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    By {post.author} • {post.date}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 pt-2">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1e2038]/40">
                <Link 
                  href={`/blog/${slug}`}
                  className="inline-flex items-center text-xs font-bold text-primary group-hover:text-cyan-300 transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
