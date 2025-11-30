import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} {{ siteName }}. Crafted with passion and code.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0a0a0a;
      padding: 2rem 0;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: auto;
    }

    p {
      color: #888888;
      font-size: 0.9rem;
      margin: 0;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  siteName = 'Portfolio'; // Could come from API
}
