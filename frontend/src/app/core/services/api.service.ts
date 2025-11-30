import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
    StrapiResponse,
    PortfolioProject,
    BlogPost,
    LiveApp,
    ContactInfo,
    SiteSettings,
} from '../models/strapi.models';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = environment.apiUrl;
    private strapiUrl = environment.strapiUrl;

    constructor(private http: HttpClient) { }

    // Portfolio Projects
    getPortfolioProjects(featured?: boolean): Observable<PortfolioProject[]> {
        let params = new HttpParams().set('populate', '*').set('sort', 'order:asc');

        if (featured !== undefined) {
            params = params.set('filters[featured][$eq]', featured.toString());
        }

        return this.http
            .get<StrapiResponse<PortfolioProject[]>>(
                `${this.apiUrl}/portfolio-projects`,
                { params }
            )
            .pipe(map((response) => response.data));
    }

    getPortfolioProjectBySlug(slug: string): Observable<PortfolioProject | null> {
        const params = new HttpParams()
            .set('filters[slug][$eq]', slug)
            .set('populate', '*');

        return this.http
            .get<StrapiResponse<PortfolioProject[]>>(
                `${this.apiUrl}/portfolio-projects`,
                { params }
            )
            .pipe(
                map((response) => {
                    if (response.data.length > 0) {
                        return response.data[0];
                    }
                    return null;
                })
            );
    }

    // Blog Posts
    getBlogPosts(featured?: boolean): Observable<BlogPost[]> {
        let params = new HttpParams()
            .set('populate', '*')
            .set('sort', 'publishedAt:desc');

        if (featured !== undefined) {
            params = params.set('filters[featured][$eq]', featured.toString());
        }

        return this.http
            .get<StrapiResponse<BlogPost[]>>(
                `${this.apiUrl}/blog-posts`,
                { params }
            )
            .pipe(map((response) => response.data));
    }

    getBlogPostBySlug(slug: string): Observable<BlogPost | null> {
        const params = new HttpParams()
            .set('filters[slug][$eq]', slug)
            .set('populate', '*');

        return this.http
            .get<StrapiResponse<BlogPost[]>>(
                `${this.apiUrl}/blog-posts`,
                { params }
            )
            .pipe(
                map((response) => {
                    if (response.data.length > 0) {
                        return response.data[0];
                    }
                    return null;
                })
            );
    }

    // Live Applications
    getLiveApps(): Observable<LiveApp[]> {
        const params = new HttpParams()
            .set('populate', '*')
            .set('sort', 'order:asc');

        return this.http
            .get<StrapiResponse<LiveApp[]>>(
                `${this.apiUrl}/live-apps`,
                { params }
            )
            .pipe(map((response) => response.data));
    }

    // Contact Information (Single Type)
    getContactInfo(): Observable<ContactInfo> {
        return this.http
            .get<StrapiResponse<ContactInfo>>(`${this.apiUrl}/contact-info`)
            .pipe(map((response) => response.data));
    }

    // Site Settings (Single Type)
    getSiteSettings(): Observable<SiteSettings> {
        return this.http
            .get<StrapiResponse<SiteSettings>>(`${this.apiUrl}/site-setting`)
            .pipe(map((response) => response.data));
    }

    // Helper method to get media URL
    getMediaUrl(media: any): string {
        if (!media) return '';

        // Handle Strapi v5 flattened structure (media is the object directly)
        // or v4 structure (media.data.attributes)
        const url = media.url || media.data?.attributes?.url;

        if (!url) return '';

        // If URL is relative, prepend Strapi URL
        return url.startsWith('http') ? url : `${this.strapiUrl}${url}`;
    }

    // Helper method to get image with size
    getImageUrl(media: any, size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
        if (!media) return '';

        const formats = media.formats || media.data?.attributes?.formats;

        if (formats && formats[size]) {
            const url = formats[size].url;
            return url.startsWith('http') ? url : `${this.strapiUrl}${url}`;
        }

        return this.getMediaUrl(media);
    }
}
