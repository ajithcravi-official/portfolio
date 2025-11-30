import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { PortfolioComponent } from '../../features/portfolio/portfolio.component';
import { BlogComponent } from '../../features/blog/blog.component';
import { AppsComponent } from '../../features/apps/apps.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    PortfolioComponent,
    BlogComponent,
    AppsComponent,
    ContactComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-portfolio></app-portfolio>
      <app-blog></app-blog>
      <app-apps></app-apps>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      background: #0a0a0a;
    }
  `]
})
export class HomeComponent { }
