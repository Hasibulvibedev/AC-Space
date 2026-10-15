import React, { useState } from 'react';
import { X, Check, RotateCcw, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';
import { initialProfileData } from '../data/portfolioData';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(initialProfileData);
  };

  return (
    <div
      id="edit-profile-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="edit-profile-modal-dialog"
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E7EFE6] flex items-center justify-center text-[#8FA98B]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1E1E1E]">Customize Portfolio Info</h3>
              <p className="text-xs text-[#5B5B5B]">Easily swap [bracketed placeholders] with your real details</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-[#5B5B5B] hover:text-[#1E1E1E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
                placeholder="e.g. Alex Rivers"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Role Title</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
                placeholder="e.g. Freelance Video Editor"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Headline (First part)</label>
              <input
                type="text"
                value={formData.headlinePart1}
                onChange={(e) => handleChange('headlinePart1', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
                placeholder="e.g. I Turn Raw Footage Into"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Headline Highlight (Sage Green)</label>
              <input
                type="text"
                value={formData.headlineHighlight}
                onChange={(e) => handleChange('headlineHighlight', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
                placeholder="e.g. Scroll-Stopping Content."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Bio / Subtext</label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              placeholder="What you edit, style, experience..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Videos Edited</label>
              <input
                type="number"
                value={formData.videosEdited}
                onChange={(e) => handleChange('videosEdited', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Total Views</label>
              <input
                type="text"
                value={formData.totalViews}
                onChange={(e) => handleChange('totalViews', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Years Editing</label>
              <input
                type="number"
                value={formData.experienceYears}
                onChange={(e) => handleChange('experienceYears', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Contact Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Availability</label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Turnaround Time</label>
              <input
                type="text"
                value={formData.turnaroundTime}
                onChange={(e) => handleChange('turnaroundTime', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Instagram Handle</label>
              <input
                type="text"
                value={formData.instagramHandle}
                onChange={(e) => handleChange('instagramHandle', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">X / Twitter Handle</label>
              <input
                type="text"
                value={formData.xHandle}
                onChange={(e) => handleChange('xHandle', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E1E1E] mb-1">Hero Photo Image URL</label>
            <input
              type="text"
              value={formData.heroImageUrl}
              onChange={(e) => handleChange('heroImageUrl', e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:border-[#8FA98B] bg-[#F7F9F7]"
              placeholder="https://..."
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-medium text-[#5B5B5B] hover:text-[#1E1E1E] flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#5B5B5B] hover:text-[#1E1E1E] rounded-full border border-neutral-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-[#8FA98B] hover:bg-[#789474] rounded-full flex items-center gap-1.5 shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Details</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
