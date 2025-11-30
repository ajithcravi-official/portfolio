import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { PortfolioProject } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  projects$!: Observable<PortfolioProject[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.projects$ = this.apiService.getPortfolioProjects();
  }
}
