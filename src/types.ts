import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    details: string;
}

export interface HeroContent {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    backgroundImage: string;
    tagline: string;
}

export interface BlogPost {
    title: string;
    slug: { current: string };
    mainImage: string;
    publishedAt: string;
    excerpt: string;
    body: any; // Sanity Block Content
    author?: string;
}
