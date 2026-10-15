export type VideoCategory = 'All' | 'YouTube' | 'Shorts & Reels' | 'Brand & Ads' | 'Podcast';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'YouTube' | 'Shorts & Reels' | 'Brand & Ads' | 'Podcast';
  thumbnailUrl: string;
  videoUrl: string; // YouTube embed or watch link
  youtubeId?: string;
  duration: string;
  views?: string;
  retention?: string;
  clientName: string;
  description: string;
  aspectRatio: '16:9' | '9:16';
  featured?: boolean;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  channelOrBrand: string;
  avatarUrl: string;
  stat: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface ProfileData {
  name: string;
  role: string;
  headlinePart1: string;
  headlineHighlight: string;
  bio: string;
  experienceYears: number;
  videosEdited: number;
  totalViews: string;
  creatorsWorkedWith: number;
  email: string;
  location: string;
  availability: string;
  turnaroundTime: string;
  instagramHandle: string;
  youtubeChannel: string;
  xHandle: string;
  linkedinUrl: string;
  heroImageUrl: string;
  showreelYoutubeId: string;
}
