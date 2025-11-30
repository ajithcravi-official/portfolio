import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { SiteSettings } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero" *ngIf="siteSettings$ | async as settings">
      <div class="hero-content">
        <h1 class="hero-title fade-in-up">{{ settings.heroTitle }}</h1>
        <h2 class="hero-subtitle fade-in-up delay-1">{{ settings.heroSubtitle }}</h2>
        <div class="hero-description fade-in-up delay-2">
          <p>{{ settings.heroDescription }}</p>
        </div>
        <div class="hero-cta fade-in-up delay-3">
          <a (click)="scrollToPortfolio()" class="btn btn-primary">View My Work</a>
          <a (click)="scrollToContact()" class="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div class="hero-background">
        <div class="gradient-sphere"></div>
        <div class="grid-overlay"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 0 2rem;
    }

    .hero-content {
      text-align: center;
      z-index: 2;
      max-width: 800px;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #fff 0%, #a5a5a5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    .hero-subtitle {
      font-size: 2rem;
      color: #d4af37;
      margin-bottom: 2rem;
      font-weight: 300;
      letter-spacing: 2px;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .hero-description {
      font-size: 1.2rem;
      color: #cccccc;
      margin-bottom: 3rem;
      line-height: 1.6;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta {
      display: flex;
      gap: 1.5rem;
      justify-content: center;

      @media (max-width: 480px) {
        flex-direction: column;
      }
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      
      .gradient-sphere {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60vw;
        height: 60vw;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
        filter: blur(60px);
        animation: pulse 10s infinite ease-in-out;
      }

      .grid-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 50px 50px;
        mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
      }
    }

    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
      50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    }
  `]
})
export class HeroComponent implements OnInit {
  siteSettings$!: Observable<SiteSettings>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.siteSettings$ = this.apiService.getSiteSettings();
  }

  scrollToPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
