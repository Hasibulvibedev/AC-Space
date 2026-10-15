import React from 'react';
import { Play, ArrowDown, Sparkles, Film, Clock, Eye, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onWatchReel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onWatchReel }) => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Soft background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-[#E7EFE6]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7EFE6] border border-[#8FA98B]/30 text-sm font-semibold text-[#40563E] mb-5 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#8FA98B] animate-pulse"></span>
              <span>Hi, I'm {profile.name} 👋</span>
              <span className="text-xs text-[#5B5B5B] font-normal">• {profile.role}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1E1E] tracking-tight leading-[1.15] mb-6"
            >
              {profile.headlinePart1}{' '}
              <span className="text-[#8FA98B] relative inline-block">
                {profile.headlineHighlight}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#8FA98B]/30"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p
              id="hero-subtext"
              className="text-lg sm:text-xl text-[#5B5B5B] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                id="hero-view-work-btn"
                href="#work"
                onClick={handleScrollToWork}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#8FA98B] hover:bg-[#789474] text-white text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                id="hero-watch-reel-btn"
                onClick={onWatchReel}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#E7EFE6]/50 border border-neutral-200 text-[#1E1E1E] text-base font-medium transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center justify-center gap-2.5 group"
              >
                <span className="w-8 h-8 rounded-full bg-[#E7EFE6] text-[#40563E] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Showreel</span>
              </button>
            </div>

            {/* Trust Stat Strip */}
            <div
              id="hero-trust-strip"
              className="w-full pt-6 border-t border-neutral-200/70 flex flex-wrap items-center gap-6 sm:gap-10"
            >
              <div>
                <div className="text-2xl font-bold text-[#1E1E1E] flex items-center gap-1">
                  <span>{profile.videosEdited}+</span>
                </div>
                <div className="text-xs font-medium text-[#5B5B5B]">Videos Edited</div>
              </div>

              <div className="h-8 w-px bg-neutral-200 hidden sm:block" />

              <div>
                <div className="text-2xl font-bold text-[#1E1E1E] flex items-center gap-1">
                  <span>{profile.totalViews}</span>
                </div>
                <div className="text-xs font-medium text-[#5B5B5B]">Combined Views</div>
              </div>

              <div className="h-8 w-px bg-neutral-200 hidden sm:block" />

              <div>
                <div className="text-2xl font-bold text-[#1E1E1E] flex items-center gap-1">
                  <span>{profile.creatorsWorkedWith}+</span>
                </div>
                <div className="text-xs font-medium text-[#5B5B5B]">Creators & Brands</div>
              </div>

              <div className="h-8 w-px bg-neutral-200 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="Creator avatar"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    alt="Creator avatar"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80"
                    alt="Creator avatar"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <span className="text-xs text-[#5B5B5B] font-medium">Top Retention Edits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative subtle backdrop frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E7EFE6] to-white rounded-3xl -rotate-1 shadow-xs -z-10" />

              {/* Main Photo Card */}
              <div
                id="hero-photo-card"
                className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-md aspect-[4/5]"
              >
                <img
                  src={profile.heroImageUrl || 'https://i.pinimg.com/1200x/05/63/b5/0563b52fbdbc5b3a318da280d04e7292.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-103"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* In-photo status pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-semibold text-[#1E1E1E]">{profile.availability}</span>
                  </div>
                  <span className="text-[11px] font-medium text-[#5B5B5B]">Turnaround: {profile.turnaroundTime}</span>
                </div>
              </div>

              {/* Top-Right Floating Badge: Years Editing */}
              <div
                id="hero-floating-badge-1"
                className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-md border border-[#E7EFE6] flex items-center gap-3 animate-in fade-in zoom-in duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E7EFE6] text-[#40563E] flex items-center justify-center">
                  <Film className="w-5 h-5 text-[#8FA98B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1E1E1E]">{profile.experienceYears}+ Years Editing</div>
                  <div className="text-xs text-[#5B5B5B]">Pro NLE & Colorist</div>
                </div>
              </div>

              {/* Bottom-Left Floating Badge: Retention Metric */}
              <div
                id="hero-floating-badge-2"
                className="absolute -bottom-15 -left-20 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-md border border-[#E7EFE6] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E7EFE6] text-[#40563E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#8FA98B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1E1E1E]">High-Retention Pacing</div>
                  <div className="text-xs text-[#5B5B5B]">Hook & Loop Optimization</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
