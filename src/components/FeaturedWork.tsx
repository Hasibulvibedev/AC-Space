import React from 'react';
import { Play, ArrowUpRight, ArrowRight, Eye, Clock, TrendingUp } from 'lucide-react';
import { PortfolioItem } from '../types';

interface FeaturedWorkProps {
  projects: PortfolioItem[];
  onSelectProject: (project: PortfolioItem) => void;
  onScrollToAll: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  projects,
  onSelectProject,
  onScrollToAll,
}) => {
  return (
    <section id="work" className="py-16 md:py-24 bg-white border-y border-[#E7EFE6]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE6] text-xs font-semibold text-[#40563E] mb-3">
              <span>Curated Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight">
              Featured Work
            </h2>
            <p className="text-base text-[#5B5B5B] mt-2 max-w-xl">
              Handpicked projects crafted for high audience retention, viral hooks, and polished storytelling.
            </p>
          </div>

          <button
            onClick={onScrollToAll}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FA98B] hover:text-[#789474] transition-colors group cursor-pointer"
          >
            <span>View All Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              id={`featured-card-${idx}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#F7F9F7] rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#8FA98B]/50 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#8FA98B] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#789474]">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.duration}</span>
                </div>

                {/* Performance Pill */}
                {project.views && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#1E1E1E] text-xs font-bold px-2.5 py-1 rounded-full shadow-2xs flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-[#8FA98B]" />
                    <span>{project.views}</span>
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#E7EFE6] text-[#40563E] text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                  {project.category}
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-[#8FA98B] mb-1.5 flex items-center gap-2">
                    <span>{project.clientName}</span>
                    {project.retention && (
                      <>
                        <span>•</span>
                        <span className="text-[#5B5B5B] font-semibold">{project.retention}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#1E1E1E] tracking-tight group-hover:text-[#8FA98B] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#5B5B5B] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="mt-5 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-white text-[#5B5B5B] px-2.5 py-0.5 rounded-md border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-[#8FA98B] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Watch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
