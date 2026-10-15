import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Clock, Copy, Check, ArrowUpRight, Play, Sparkles, MessageCircle } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
  onPlayShowreel: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onPlayShowreel }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F7F9F7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE6] text-xs font-semibold text-[#40563E] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8FA98B]" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight">
            Let's Create Something Great Together
          </h2>
          <p className="text-base text-[#5B5B5B] mt-2 leading-relaxed">
            Have raw footage waiting for an edit or looking for a long-term editor for your channel or brand? Reach out directly — no forms, no friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Quick Action CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-xs">
            <div>
              <div className="text-xs font-bold text-[#8FA98B] uppercase tracking-wider mb-2">
                Get In Touch
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-6">
                Start a Conversation
              </h3>

              {/* Info Cards Grid */}
              <div className="space-y-4 mb-8">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-neutral-200/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#E7EFE6] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#8FA98B]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[#5B5B5B]">Direct Email</div>
                      <div className="text-sm sm:text-base font-bold text-[#1E1E1E] truncate">
                        {profile.email}
                      </div>
                    </div>
                  </div>

                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-[#8FA98B] text-[#5B5B5B] hover:text-[#1E1E1E] transition-colors shrink-0 shadow-2xs"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-neutral-200/70 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E7EFE6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8FA98B]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B5B5B]">Location</div>
                    <div className="text-sm font-bold text-[#1E1E1E]">{profile.location}</div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="p-4 rounded-2xl bg-[#E7EFE6]/60 border border-[#8FA98B]/30 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#8FA98B]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#40563E] font-medium">Availability</div>
                    <div className="text-sm font-bold text-[#1E1E1E] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {profile.availability}
                    </div>
                  </div>
                </div>

                {/* Turnaround Time */}
                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-neutral-200/70 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E7EFE6] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#8FA98B]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B5B5B]">Standard Turnaround</div>
                    <div className="text-sm font-bold text-[#1E1E1E]">{profile.turnaroundTime} per project</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-neutral-200/70 flex flex-col sm:flex-row gap-3">
              <a
                id="contact-email-cta"
                href={`mailto:${profile.email}?subject=Video Editing Project Inquiry`}
                className="flex-1 py-3.5 px-6 rounded-full bg-[#8FA98B] hover:bg-[#789474] text-white text-sm font-semibold transition-all duration-200 shadow-xs flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              <a
                id="contact-social-cta"
                href={`https://instagram.com/${profile.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-white hover:bg-[#E7EFE6]/50 border border-neutral-200 text-[#1E1E1E] text-sm font-semibold transition-all duration-200 shadow-2xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#8FA98B]" />
                <span>DM on Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Showreel Centerpiece Visual */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              id="showreel-preview-card"
              onClick={onPlayShowreel}
              className="group cursor-pointer relative h-full min-h-[380px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-xs flex flex-col justify-end p-8"
            >
              {/* High-production preview background image */}
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="Video Editor Showreel"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#8FA98B] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-[#789474]">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Showreel Info Bar */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-3 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>Featured Showreel 2026</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  120-Second High-Energy Reel
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md">
                  A rapid compilation of pacing arcs, 3D motion graphics, kinetic typography, and DaVinci color grades.
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-neutral-400">
                  <span>⏱ 1:45 Duration</span>
                  <span>•</span>
                  <span>4K 60FPS</span>
                  <span>•</span>
                  <span className="text-[#8FA98B] font-medium flex items-center gap-1 group-hover:underline">
                    Click to Play
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
