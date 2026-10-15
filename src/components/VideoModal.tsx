import React from 'react';
import { X, ExternalLink, Clock, TrendingUp, CheckCircle2, Award } from 'lucide-react';
import { PortfolioItem } from '../types';

interface VideoModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  // Use YouTube embed ID if present, otherwise default fallback
  const embedId = project.youtubeId || 'aqz-KE-bpKQ';

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="video-modal-content"
        className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold bg-[#E7EFE6] text-[#40563E] px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs text-[#5B5B5B] font-medium">• {project.clientName}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-[#5B5B5B] hover:text-[#1E1E1E] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${embedId}?autoplay=1&rel=0`}
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Body Info */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#1E1E1E] tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#5B5B5B] mt-1.5 leading-relaxed">
                {project.description}
              </p>
            </div>

            <a
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#8FA98B] hover:bg-[#789474] text-white transition-colors shrink-0 shadow-xs"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Metrics & Tags */}
          <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B5B5B]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 font-medium text-[#1E1E1E]">
                <Clock className="w-3.5 h-3.5 text-[#8FA98B]" />
                {project.duration}
              </span>
              {project.views && (
                <span className="flex items-center gap-1 font-medium text-[#1E1E1E]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#8FA98B]" />
                  {project.views}
                </span>
              )}
              {project.retention && (
                <span className="flex items-center gap-1 font-semibold text-[#40563E] bg-[#E7EFE6] px-2 py-0.5 rounded">
                  {project.retention}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F7F9F7] text-[#5B5B5B] border border-neutral-200 px-2 py-0.5 rounded text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
