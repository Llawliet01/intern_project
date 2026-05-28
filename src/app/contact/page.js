"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Simulate successful form submit
    toast.success("Form submitted successfully");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 bg-slate-50 text-slate-900">
      
      {/* Background visual element */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2C5EAD]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#2C5EAD] uppercase bg-[#C4E2F5]/30 px-3 py-1.5 rounded-full border border-[#C4E2F5]">
          Contact Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Connect With Our Technical Division
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Arrange a system audit, ask about our engagement packages, or request custom software advisory sessions.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:shadow-[#4BB8FA]/10 hover:border-[#1591DC]/40 transition-all flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Telephone Advisory</h3>
              <p className="text-xs text-slate-500 mt-1">Speak with our solutions leads.</p>
              <a href="tel:+919998233946" className="text-xs text-primary font-bold hover:underline block mt-2">
                +91 9998233946
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:shadow-[#4BB8FA]/10 hover:border-[#1591DC]/40 transition-all flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Electronic Support</h3>
              <p className="text-xs text-slate-500 mt-1">Send us system briefs or scoping documents.</p>
              <a href="mailto:info@aetherissystems.com" className="text-xs text-primary font-bold hover:underline block mt-2">
                info@aetherissystems.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Registered HQ</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                A-202, Second Floor, Mondeal Heights,<br />
                Sarkhej-Gandhinagar Highway,<br />
                Ahmedabad, Gujarat, 380015, IN
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-slate-200/60 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Elena Rostova"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary text-xs text-slate-900 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Corporate Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary text-xs text-slate-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Organization Name (Optional)</label>
              <input 
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Aetheris Systems"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary text-xs text-slate-900 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Describe Your Project *</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly explain your application scaling needs, microservices plans, or infrastructure roadmap..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary text-xs text-slate-900 outline-none transition-all resize-none"
              />
            </div>

            <div>
              <button 
                type="submit"
                className="flex items-center justify-center w-full py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 hover:shadow-lg hover:shadow-primary/20 transition-all text-center shadow-md shadow-primary/10"
              >
                Send Message Securely
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}
