import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { LiveApp } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-softwares',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1 class="page-title">All Softwares</h1>
        <p class="page-description">Check out all my live applications and software projects</p>
      </header>
      
      <div class="apps-grid" *ngIf="apps$ | async as apps">
        <div class="app-card" *ngFor="let app of apps">
          <div class="app-screenshot">
            <img [src]="app.screenshot?.url || 'assets/placeholder.jpg'" [alt]="app.title">
            <div class="app-status" [ngClass]="app.status.toLowerCase()">{{ app.status }}</div>
          </div>
          <div class="app-content">
            <div class="app-header">
              <h3 class="app-title">{{ app.title }}</h3>
              <span class="app-category">{{ app.category }}</span>
            </div>
            <p class="app-description">{{ app.description }}</p>
            <a [href]="app.liveUrl" target="_blank" class="btn btn-block btn-primary">Launch App</a>
          </div>
        </div>
      </div>
      
      <div class="back-link">
        <a routerLink="/" class="btn-secondary">← Back to Home</a>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 8rem 2rem 4rem;
      min-height: 100vh;
      background: #0a0a0a;
    }

    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .page-title {
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      color: #fff;
      margin-bottom: 1rem;
    }

    .page-description {
      font-size: 1.2rem;
      color: #aaa;
    }

    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .app-card {
      background: #111;
      border-radius: 16px;
      padding: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);
      }
    }

    .app-screenshot {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      height: 180px;
      margin-bottom: 1.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .app-status {
        position: absolute;
        top: 1rem;
        left: 1rem;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        
        &.live { background: #2ecc71; color: #fff; }
        &.beta { background: #f1c40f; color: #000; }
        &.maintenance { background: #e74c3c; color: #fff; }
      }
    }

    .app-content {
      padding: 0 0.5rem;
    }

    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .app-title {
      font-size: 1.25rem;
      color: #fff;
      font-weight: 600;
      margin: 0;
    }

    .app-category {
      font-size: 0.8rem;
      color: #888;
      border: 1px solid #333;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }

    .app-description {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .btn-block {
      display: block;
      width: 100%;
      text-align: center;
    }

    .back-link {
      text-align: center;
      margin-top: 3rem;
    }

    .btn-secondary {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: transparent;
      color: #d4af37;
      border: 2px solid #d4af37;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        background: #d4af37;
        color: #000;
      }
    }
  `]
})
export class AllSoftwaresComponent implements OnInit {
  apps$!: Observable<LiveApp[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apps$ = this.apiService.getLiveApps();
  }
}
