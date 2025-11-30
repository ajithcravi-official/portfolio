import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ContactInfo } from '../../core/models/strapi.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact$!: Observable<ContactInfo>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.contact$ = this.apiService.getContactInfo();
  }
}
