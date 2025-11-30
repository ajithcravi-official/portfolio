// Strapi response wrapper
export interface StrapiResponse<T> {
    data: T;
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Portfolio Project
export interface PortfolioProject {
    id: number;
    documentId?: string;
    title: string;
    slug: string;
    description: string;
    image: any; // Strapi media object
    tags: string[];
    projectUrl?: string;
    githubUrl?: string;
    featured: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Blog Post
export interface BlogPost {
    id: number;
    documentId?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: any; // Strapi media object
    readTime: number;
    author: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Live Application
export interface LiveApp {
    id: number;
    documentId?: string;
    title: string;
    slug: string;
    description: string;
    screenshot: any; // Strapi media object
    liveUrl: string;
    category: string;
    tags: string[];
    status: 'Live' | 'Beta' | 'Maintenance';
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Contact Information (Single Type)
export interface ContactInfo {
    id: number;
    documentId?: string;
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    bio?: string;
}

// Site Settings (Single Type)
export interface SiteSettings {
    id: number;
    documentId?: string;
    siteName: string;
    tagline?: string;
    heroTitle: string;
    heroSubtitle?: string;
    heroDescription?: string;
}
