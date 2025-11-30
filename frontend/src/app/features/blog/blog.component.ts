import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { BlogPost } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$!: Observable<BlogPost[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.posts$ = this.apiService.getBlogPosts();
  }
}
