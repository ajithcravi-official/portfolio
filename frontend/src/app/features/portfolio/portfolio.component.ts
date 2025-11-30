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
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects$!: Observable<PortfolioProject[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.projects$ = this.apiService.getPortfolioProjects();
  }
}
