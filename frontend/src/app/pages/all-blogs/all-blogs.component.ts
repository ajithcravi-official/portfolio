import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { BlogPost } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1 class="page-title">All Blog Posts</h1>
        <p class="page-description">Read all my thoughts, tutorials, and technical articles</p>
      </header>
      
      <div class="blog-grid" *ngIf="posts$ | async as posts">
        <article class="blog-card" *ngFor="let post of posts">
          <div class="blog-image">
            <img [src]="post.featuredImage?.url || 'assets/placeholder.jpg'" [alt]="post.title">
            <div class="read-time">{{ post.readTime }} min read</div>
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">{{ post.publishedAt | date:'mediumDate' }}</span>
              <span class="author">by {{ post.author }}</span>
            </div>
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <a class="read-more">Read Article <span class="arrow">→</span></a>
          </div>
        </article>
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
      background: #0f0f0f;
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

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
      margin-bottom: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .blog-card {
      background: #1a1a1a;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);

        .blog-title {
          color: #d4af37;
        }

        .arrow {
          transform: translateX(5px);
        }
      }
    }

    .blog-image {
      position: relative;
      height: 220px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .read-time {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        backdrop-filter: blur(5px);
      }
    }

    .blog-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .blog-meta {
      display: flex;
      justify-content: space-between;
      color: #666;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }

    .blog-title {
      font-size: 1.4rem;
      color: #fff;
      margin-bottom: 1rem;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .blog-excerpt {
      color: #aaa;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex: 1;
    }

    .read-more {
      color: #d4af37;
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;

      .arrow {
        transition: transform 0.3s ease;
      }
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
export class AllBlogsComponent implements OnInit {
  posts$!: Observable<BlogPost[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.posts$ = this.apiService.getBlogPosts();
  }
}
