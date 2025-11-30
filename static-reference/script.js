// ============================================
// ELEGANT PORTFOLIO - INTERACTIVE FEATURES
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initScrollProgress();
    initMobileMenu();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const nav = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                updateActiveNavLink(this);
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        updateNavOnScroll();
        addScrolledClassToNav();
    });
}

function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function updateNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.getElementById('navbar').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function addScrolledClassToNav() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        if (navMenu.classList.contains('active')) {
            this.textContent = '✕';
        } else {
            this.textContent = '☰';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.textContent = '☰';
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Parallax effect for hero section (optional enhancement)
function initParallax() {
    window.addEventListener('scroll', debounce(function() {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 10));
}

// Add smooth revealing effect for cards on hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Add ripple effect to buttons (optional enhancement)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// DYNAMIC CONTENT (Optional - for future use)
// ============================================

// Function to dynamically load blog posts or portfolio items
function loadDynamicContent(type, container) {
    // This is a placeholder for future API integration
    // You can fetch data from a CMS or API here
    console.log(`Loading ${type} content into ${container}`);
}

// ============================================
// THEME TOGGLE (Optional enhancement)
// ============================================

// If you want to add a light/dark mode toggle in the future
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        }
    }
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ANALYTICS (Optional - for future use)
// ============================================

// Track section views
function trackSectionView(sectionName) {
    // Integrate with Google Analytics, Mixpanel, etc.
    console.log(`Section viewed: ${sectionName}`);
}

// Track button clicks
document.querySelectorAll('.btn, .card-link').forEach(element => {
    element.addEventListener('click', function() {
        const action = this.textContent.trim();
        console.log(`Button clicked: ${action}`);
        // Send to analytics service
    });
});

// ============================================
// CONSOLE GREETING
// ============================================

console.log('%c Welcome to my Portfolio! ', 'background: #d4af37; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Interested in the code? Check out the repository! ', 'color: #d4af37; font-size: 14px;');
