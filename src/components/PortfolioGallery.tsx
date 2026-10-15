import React, { useState, useMemo } from 'react';
import { Play, Clock, TrendingUp, ArrowUpRight, Film, Filter } from 'lucide-react';
import { PortfolioItem, VideoCategory } from '../types';

interface PortfolioGalleryProps {
  projects: PortfolioItem[];
  onSelectProject: (project: PortfolioItem) => void;
}

const CATEGORIES: VideoCategory[] = ['All', 'YouTube', 'Shorts & Reels', 'Brand & Ads', 'Podcast'];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((item) => item.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="all-work" className="py-16 md:py-24 bg-[#F7F9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE6] text-xs font-semibold text-[#40563E] mb-3">
            <Film className="w-3.5 h-3.5 text-[#8FA98B]" />
            <span>Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight">
            All My Work
          </h2>
          <p className="text-base text-[#5B5B5B] mt-2 leading-relaxed">
            Browse through YouTube longform breakdowns, vertical shorts, high-conversion commercial ads, and studio podcasts.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const count = category === 'All' 
              ? projects.length 
              : projects.filter((p) => p.category === category).length;
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                id={`filter-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#8FA98B] text-white shadow-xs'
                    : 'bg-white text-[#5B5B5B] hover:text-[#1E1E1E] hover:bg-[#E7EFE6]/60 border border-neutral-200/80'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-neutral-100 text-[#5B5B5B]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid of Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#8FA98B]/60 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col"
            >
              {/* Thumbnail */}
              <div
                className={`relative w-full overflow-hidden bg-neutral-900 ${
                  project.aspectRatio === '9:16' ? 'aspect-[4/5] sm:aspect-video' : 'aspect-video'
                }`}
              >
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#8FA98B] text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#789474]">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.duration}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 bg-[#E7EFE6] text-[#40563E] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                  {project.category}
                </div>

                {/* Metric Pill */}
                {project.views && (
                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[#1E1E1E] text-[11px] font-bold px-2 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#8FA98B]" />
                    <span>{project.views}</span>
                  </div>
                )}
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#8FA98B] mb-1">
                    {project.clientName}
                  </div>
                  <h3 className="text-base font-bold text-[#1E1E1E] group-hover:text-[#8FA98B] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#5B5B5B] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#5B5B5B] bg-[#F7F9F7] px-2 py-0.5 rounded border border-neutral-200/60">
                    {project.tags[0] || 'High Retention'}
                  </span>
                  <span className="font-semibold text-[#8FA98B] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Watch</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
