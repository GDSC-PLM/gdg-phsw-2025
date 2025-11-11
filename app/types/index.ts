/**
 * Type definitions for the GDGoC PLM Event Website
 */

export interface Speaker {
  id: string;
  name: string;
  title: string;
  topic: string;
  topicDescription: string;
  biography: string;
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  tier: 'major' | 'minor';
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  speaker?: string;
}

export interface EventDetails {
  name: string;
  theme: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  format: string;
  audience: string;
}

export interface ExternalLink {
  url: string;
  label: string;
  openInNewTab: boolean;
}
