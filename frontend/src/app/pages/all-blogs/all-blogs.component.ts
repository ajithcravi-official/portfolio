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
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  posts$!: Observable<BlogPost[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.posts$ = this.apiService.getBlogPosts();
  }
}
