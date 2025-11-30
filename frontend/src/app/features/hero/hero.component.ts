import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { SiteSettings } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
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
