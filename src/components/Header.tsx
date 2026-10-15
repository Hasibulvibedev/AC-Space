import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { ProfileData } from '../types';

interface HeaderProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ profile, onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-[#E7EFE6]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#1E1E1E]"
        >
          <span>{profile.name}</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#8FA98B] transition-transform group-hover:scale-125"></span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-[#5B5B5B] hover:text-[#1E1E1E] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick placeholder customizer toggle */}
          <button
            id="customize-info-btn"
            onClick={onOpenCustomizer}
            title="Customize your name & portfolio details"
            className="px-3 py-1.5 text-xs font-medium text-[#5B5B5B] hover:text-[#1E1E1E] bg-white border border-neutral-200/80 rounded-full flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8FA98B]" />
            <span>Edit Info</span>
          </button>

          {/* Primary CTA */}
          <a
            id="header-contact-btn"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#8FA98B] hover:bg-[#789474] transition-all duration-200 shadow-xs hover:shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1E1E1E] hover:bg-[#E7EFE6] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="sm:hidden bg-white/98 border-b border-[#E7EFE6] px-6 py-5 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium text-[#1E1E1E] py-2 border-b border-neutral-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-2.5 px-4 text-sm font-medium text-[#1E1E1E] bg-[#E7EFE6]/60 rounded-full flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#8FA98B]" />
              <span>Customize Info Placeholder</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-2.5 px-4 rounded-full text-sm font-semibold text-white bg-[#8FA98B]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
