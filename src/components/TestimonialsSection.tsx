import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F7F9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE6] text-xs font-semibold text-[#40563E] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#8FA98B]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight">
            What Creators & Brands Say
          </h2>
          <p className="text-base text-[#5B5B5B] mt-2">
            Real feedback from YouTube channels, media companies, and startups I collaborate with.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${idx}`}
              className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Result Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8FA98B] text-[#8FA98B]" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-[#40563E] bg-[#E7EFE6] px-2.5 py-1 rounded-full">
                    {t.stat}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-[#5B5B5B] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <div className="text-sm font-bold text-[#1E1E1E]">{t.clientName}</div>
                  <div className="text-xs text-[#5B5B5B]">
                    {t.role} • <span className="text-[#8FA98B] font-medium">{t.channelOrBrand}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
