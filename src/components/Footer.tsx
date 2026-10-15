import React from 'react';
import { ArrowUp, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-[#E7EFE6] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Row: Logo, Tagline & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#1E1E1E] mb-2"
            >
              <span>{profile.name}</span>
              <span className="w-2 h-2 rounded-full bg-[#8FA98B]"></span>
            </a>
            <p className="text-sm text-[#5B5B5B] max-w-sm">
              Editing videos that get watched, shared, and remembered.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#5B5B5B] hover:text-[#1E1E1E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`https://instagram.com/${profile.instagramHandle.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#F7F9F7] border border-neutral-200/80 flex items-center justify-center text-[#5B5B5B] hover:text-[#1E1E1E] hover:border-[#8FA98B] hover:bg-[#E7EFE6]/50 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://${profile.youtubeChannel}`}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-[#F7F9F7] border border-neutral-200/80 flex items-center justify-center text-[#5B5B5B] hover:text-[#1E1E1E] hover:border-[#8FA98B] hover:bg-[#E7EFE6]/50 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={`https://x.com/${profile.xHandle.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="w-10 h-10 rounded-full bg-[#F7F9F7] border border-neutral-200/80 flex items-center justify-center text-[#5B5B5B] hover:text-[#1E1E1E] hover:border-[#8FA98B] hover:bg-[#E7EFE6]/50 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href={`https://${profile.linkedinUrl}`}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#F7F9F7] border border-neutral-200/80 flex items-center justify-center text-[#5B5B5B] hover:text-[#1E1E1E] hover:border-[#8FA98B] hover:bg-[#E7EFE6]/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B5B5B]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#8FA98B] font-medium">Video Editor Portfolio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-medium text-[#1E1E1E] hover:text-[#8FA98B] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
