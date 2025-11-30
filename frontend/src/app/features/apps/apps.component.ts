import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { LiveApp } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  apps$!: Observable<LiveApp[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apps$ = this.apiService.getLiveApps();
  }
}
