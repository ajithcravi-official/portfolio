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
  templateUrl: './all-softwares.component.html',
  styleUrls: ['./all-softwares.component.scss']
})
export class AllSoftwaresComponent implements OnInit {
  apps$!: Observable<LiveApp[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apps$ = this.apiService.getLiveApps();
  }
}
