import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { EditProfileModal } from './components/EditProfileModal';
import {
  initialProfileData,
  featuredProjects,
  allPortfolioProjects,
  servicesData,
  softwareTools,
  testimonialsData,
  processSteps,
} from './data/portfolioData';
import { PortfolioItem, ProfileData } from './types';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const targetHeroImage = 'https://i.pinimg.com/1200x/05/63/b5/0563b52fbdbc5b3a318da280d04e7292.jpg';
    const saved = localStorage.getItem('video_editor_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure new hero image is applied
        if (!parsed.heroImageUrl || parsed.heroImageUrl.includes('unsplash.com') || parsed.heroImageUrl === '/photo.png') {
          parsed.heroImageUrl = targetHeroImage;
          localStorage.setItem('video_editor_profile', JSON.stringify(parsed));
        }
        return parsed;
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
    return initialProfileData;
  });

  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSelectProject = (project: PortfolioItem) => {
    setSelectedVideo(project);
    setIsVideoModalOpen(true);
  };

  const handlePlayShowreel = () => {
    const showreelItem: PortfolioItem = {
      id: 'showreel',
      title: `${profile.name} — Official Video Editor Showreel`,
      category: 'Brand & Ads',
      thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      videoUrl: `https://www.youtube.com/watch?v=${profile.showreelYoutubeId}`,
      youtubeId: profile.showreelYoutubeId,
      duration: '1:45',
      views: 'Featured Reel',
      retention: '4K 60FPS',
      clientName: profile.name,
      description: 'A rapid showcase of pacing arcs, kinetic typography, 3D camera tracking, sound design hits, and cinematic color grades.',
      aspectRatio: '16:9',
      tags: ['Showreel', 'Sound Design', 'Motion Graphics', 'Color Grade'],
    };
    setSelectedVideo(showreelItem);
    setIsVideoModalOpen(true);
  };

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('video_editor_profile', JSON.stringify(updated));
  };

  const handleScrollToAllWork = () => {
    const el = document.querySelector('#all-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F7] text-[#1E1E1E]">
      {/* Top Navigation */}
      <Header
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          profile={profile}
          onWatchReel={handlePlayShowreel}
        />

        {/* Featured Projects (4 Curated Cards) */}
        <FeaturedWork
          projects={featuredProjects}
          onSelectProject={handleSelectProject}
          onScrollToAll={handleScrollToAllWork}
        />

        {/* Full Portfolio Gallery (Replaces Pricing, with filter tabs) */}
        <PortfolioGallery
          projects={allPortfolioProjects}
          onSelectProject={handleSelectProject}
        />

        {/* Services & Editing Software Stack */}
        <ServicesSection
          services={servicesData}
          tools={softwareTools}
        />

        {/* Testimonials / Client Quotes */}
        <TestimonialsSection
          testimonials={testimonialsData}
        />

        {/* 4-Step Editing Process */}
        <ProcessSection
          steps={processSteps}
        />

        {/* Let's Connect (Replaces contact form with direct info & showreel) */}
        <ContactSection
          profile={profile}
          onPlayShowreel={handlePlayShowreel}
        />
      </main>

      {/* Simplified Footer */}
      <Footer profile={profile} />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        project={selectedVideo}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Info Placeholder Customizer */}
      <EditProfileModal
        isOpen={isCustomizerOpen}
        profile={profile}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
