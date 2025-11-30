import { Component, HostListener } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a (click)="scrollTo('home')" class="nav-logo">Ajith C Ravi</a>
        <ul class="nav-menu" [class.active]="isMenuOpen">
          <li><a (click)="scrollTo('home')" [class.active]="activeSection === 'home'" class="nav-link">Home</a></li>
          <li><a (click)="scrollTo('portfolio')" [class.active]="activeSection === 'portfolio'" class="nav-link">Projects</a></li>
          <li><a (click)="scrollTo('blog')" [class.active]="activeSection === 'blog'" class="nav-link">Blog</a></li>
          <li><a (click)="scrollTo('apps')" [class.active]="activeSection === 'apps'" class="nav-link">Softwares</a></li>
          <li><a (click)="scrollTo('contact')" [class.active]="activeSection === 'contact'" class="nav-link">Contact</a></li>
        </ul>
        <button class="nav-toggle" (click)="toggleMenu()" aria-label="Toggle navigation">
          <span class="hamburger"></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
      padding: 1.5rem 0;
      
      &.scrolled {
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    .nav-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;

      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: #0a0a0a;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
        
        &.active {
          right: 0;
        }
      }
    }

    .nav-link {
      color: #cccccc;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
      position: relative;

      &:hover, &.active {
        color: #d4af37;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: #d4af37;
        transition: width 0.3s ease;
      }

      &:hover::after, &.active::after {
        width: 100%;
      }
    }

    .nav-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1001;

      @media (max-width: 768px) {
        display: block;
      }

      .hamburger {
        display: block;
        width: 24px;
        height: 2px;
        background: #fff;
        position: relative;
        transition: 0.3s ease;

        &::before, &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #fff;
          transition: 0.3s ease;
        }

        &::before { top: -8px; }
        &::after { top: 8px; }
      }
    }
  `]
})
export class NavigationComponent {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';

  constructor(private router: Router, private location: Location) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.checkActiveSection();
  }

  scrollTo(sectionId: string) {
    this.isMenuOpen = false;

    // Check if we're on home page
    const isHomePage = this.location.path() === '' || this.location.path() === '/';

    if (isHomePage) {
      // On home page - scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Height of fixed header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // On different page - navigate to home first, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private checkActiveSection() {
    const sections = ['home', 'portfolio', 'blog', 'apps', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
