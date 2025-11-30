import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ContactInfo } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section" *ngIf="contact$ | async as contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <div class="contact-card">
            <p class="contact-bio">{{ contact.bio }}</p>
            <a [href]="'mailto:' + contact.email" class="email-link">{{ contact.email }}</a>
            <div class="social-links">
              <a [href]="contact.github" target="_blank" class="social-link" *ngIf="contact.github">GitHub</a>
              <a [href]="contact.linkedin" target="_blank" class="social-link" *ngIf="contact.linkedin">LinkedIn</a>
              <a [href]="contact.twitter" target="_blank" class="social-link" *ngIf="contact.twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 6rem 0;
      background: #0f0f0f;
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

    .contact-content {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    .contact-card {
      background: #1a1a1a;
      padding: 3rem;
      border-radius: 20px;
      text-align: center;
      max-width: 600px;
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

      &:hover {
        border-color: rgba(212, 175, 55, 0.3);
      }
    }

    .contact-bio {
      color: #ccc;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .email-link {
      display: inline-block;
      font-size: 1.5rem;
      color: #d4af37;
      text-decoration: none;
      margin-bottom: 2.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    .social-link {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 30px;
      transition: all 0.3s ease;

      &:hover {
        background: #fff;
        color: #000;
        transform: translateY(-3px);
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  contact$!: Observable<ContactInfo>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.contact$ = this.apiService.getContactInfo();
  }
}
