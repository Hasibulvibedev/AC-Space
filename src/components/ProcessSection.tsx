import React from 'react';
import { UploadCloud, Scissors, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <UploadCloud className="w-5 h-5 text-[#8FA98B]" />;
      case 1:
        return <Scissors className="w-5 h-5 text-[#8FA98B]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#8FA98B]" />;
      case 3:
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#8FA98B]" />;
    }
  };

  return (
    <section id="process" className="py-16 md:py-24 bg-white border-t border-[#E7EFE6]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE6] text-xs font-semibold text-[#40563E] mb-3">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight">
            My Editing Process
          </h2>
          <p className="text-base text-[#5B5B5B] mt-2">
            A frictionless, 4-stage pipeline designed for quick turnarounds and zero guesswork.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.stepNumber}
              id={`process-step-${idx}`}
              className="relative p-6 rounded-2xl bg-[#F7F9F7] border border-neutral-200/80 hover:border-[#8FA98B]/50 transition-all duration-300 shadow-2xs hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#8FA98B]">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center shadow-2xs">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#8FA98B] uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>

                <h3 className="text-lg font-bold text-[#1E1E1E] tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B5B5B] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/60">
                <span className="text-[11px] font-medium text-[#40563E] bg-[#E7EFE6] px-2.5 py-1 rounded-md block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
