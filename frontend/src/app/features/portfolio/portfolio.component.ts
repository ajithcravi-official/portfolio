import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { PortfolioProject } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="portfolio" class="section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid" *ngIf="projects$ | async as projects">
          <div class="project-card" *ngFor="let project of projects.slice(0, 3)">
            <div class="project-image">
              <img [src]="project.image?.url || 'assets/placeholder.jpg'" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.projectUrl" target="_blank" class="btn btn-sm btn-primary" *ngIf="project.projectUrl">View Live</a>
                  <a [href]="project.githubUrl" target="_blank" class="btn btn-sm btn-outline" *ngIf="project.githubUrl">GitHub</a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="view-all">
          <a routerLink="/projects" class="btn-view-all">View All Projects →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 6rem 0;
      background: #0a0a0a;
      display: flex;
      flex-direction: column;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      text-align: center;
      margin-bottom: 4rem;
      color: #fff;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: #d4af37;
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
      margin-bottom: 3rem;
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .project-card {
      background: #111;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.05);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        border-color: rgba(212, 175, 55, 0.3);

        .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          opacity: 1;
        }
      }
    }

    .project-image {
      position: relative;
      height: 240px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .project-description {
      color: #aaa;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      font-size: 0.8rem;
      color: #d4af37;
      background: rgba(212, 175, 55, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      border: 1px solid rgba(212, 175, 55, 0.2);
    }

    .view-all {
      text-align: center;
      margin-top: 2rem;
    }

    .btn-view-all {
      display: inline-block;
      padding: 0.75rem 2.5rem;
      background: transparent;
      color: #d4af37;
      border: 2px solid #d4af37;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background: #d4af37;
        color: #000;
        transform: translateY(-2px);
      }
    }
  `]
})
export class PortfolioComponent implements OnInit {
  projects$!: Observable<PortfolioProject[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.projects$ = this.apiService.getPortfolioProjects();
  }
}
