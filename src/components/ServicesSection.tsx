import React from 'react';
import { Youtube, Smartphone, Mic, Sparkles, Check, Film, Palette, Scissors, Volume2, Image as ImageIcon } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  tools: { name: string; category: string; icon: string }[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, tools }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube':
        return <Youtube className="w-6 h-6 text-[#8FA98B]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#8FA98B]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-[#8FA98B]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#8FA98B]" />;
    }
  };

  const getToolIcon = (icon: string) => {
    switch (icon) {
      case 'Film':
        return <Film className="w-4 h-4 text-[#8FA98B]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#8FA98B]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#8FA98B]" />;
      case 'Scissors':
        return <Scissors className="w-4 h-4 text-[#8FA98B]" />;
      case 'Volume2':
        return <Volume2 className="w-4 h-4 text-[#8FA98B]" />;
      default:
        return <ImageIcon className="w-4 h-4 text-[#8FA98B]" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-t border-[#E7EFE6]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE6] text-xs font-semibold text-[#40563E] mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight">
            Services I Offer
          </h2>
          <p className="text-base text-[#5B5B5B] mt-2">
            Every edit is built with one clear objective: keeping viewers engaged from the first second to the final call to action.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index}`}
              className="p-8 rounded-2xl bg-[#F7F9F7] border border-neutral-200/80 hover:border-[#8FA98B]/50 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E7EFE6] flex items-center justify-center mb-5">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-[#1E1E1E] tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#5B5B5B] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60">
                <div className="text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider mb-3">
                  What's Included:
                </div>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#5B5B5B]">
                      <Check className="w-3.5 h-3.5 text-[#8FA98B] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & NLE Stack Strip */}
        <div
          id="tools-strip"
          className="p-6 sm:p-8 rounded-2xl bg-[#F7F9F7] border border-neutral-200/70"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-[#5B5B5B] uppercase tracking-wider">
              Editing Software & Production Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white px-4 py-3 rounded-xl border border-neutral-200/80 shadow-2xs flex items-center gap-2.5 hover:border-[#8FA98B]/50 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#E7EFE6] flex items-center justify-center shrink-0">
                  {getToolIcon(tool.icon)}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-[#1E1E1E] truncate">{tool.name}</div>
                  <div className="text-[10px] text-[#5B5B5B] truncate">{tool.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
