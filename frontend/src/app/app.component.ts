import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    FooterComponent
  ],
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio';
}
