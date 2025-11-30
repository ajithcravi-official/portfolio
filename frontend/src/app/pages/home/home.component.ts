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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
