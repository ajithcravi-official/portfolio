# Elegant Portfolio - Angular + Strapi

A modern, dynamic portfolio website built with Angular 18 and self-hosted Strapi 5 CMS, featuring a sophisticated black, white, and gold color scheme.

## 🏗️ Project Structure

```
portfolio/
├── frontend/           # Angular 18 application
├── backend/            # Strapi 5 CMS
└── static-reference/   # Original HTML/CSS/JS design reference
```

## 🚀 Quick Start

### Prerequisites

- Node.js v20.17.0 or higher
- npm 10.8.2 or higher

### Installation

#### 1. Start Strapi Backend

```bash
cd backend
npm run develop
```

This will:
- Start Strapi on `http://localhost:1337`
- Open the admin panel for first-time setup
- Create your admin account

#### 2. Start Angular Frontend

In a new terminal:

```bash
cd frontend
npm start
```

This will:
- Start Angular dev server on `http://localhost:4200`
- Open your browser automatically

## 📝 Strapi Setup (First Time)

### Creating Admin Account

1. Navigate to `http://localhost:1337/admin`
2. Create your admin account (first time only)
3. You'll be redirected to the Strapi dashboard

### Content Types to Create

You need to create the following content types in Strapi:

#### 1. Portfolio Project (Collection Type)

**API ID**: `portfolio-project`

| Field Name | Type | Options |
|------------|------|---------|
| title | Text | Required |
| slug | UID | Target field: title |
| description | Rich Text (Markdown) | - |
| image | Media | Single, Required |
| tags | JSON | - |
| projectUrl | Text | - |
| githubUrl | Text | - |
| featured | Boolean | Default: false |
| order | Number | Integer |

#### 2. Blog Post (Collection Type)

**API ID**: `blog-post`

| Field Name | Type | Options |
|------------|------|---------|
| title | Text | Required |
| slug | UID | Target field: title |
| excerpt | Text | - |
| content | Rich Text (Markdown) | Required |
| featuredImage | Media | Single |
| readTime | Number | Integer (minutes) |
| author | Text | Required |
| featured | Boolean | Default: false |

#### 3. Live Application (Collection Type)

**API ID**: `live-app`

| Field Name | Type | Options |
|------------|------|---------|
| title | Text | Required |
| slug | UID | Target field: title |
| description | Rich Text (Markdown) | Required |
| screenshot | Media | Single, Required |
| liveUrl | Text | Required |
| category | Text | - |
| tags | JSON | - |
| status | Enumeration | Values: Live, Beta, Maintenance |
| order | Number | Integer |

#### 4. Contact Information (Single Type)

**API ID**: `contact-info`

| Field Name | Type | Options |
|------------|------|---------|
| email | Email | Required |
| github | Text | - |
| linkedin | Text | - |
| twitter | Text | - |
| bio | Rich Text (Markdown) | - |

#### 5. Site Settings (Single Type)

**API ID**: `site-setting`

| Field Name | Type | Options |
|------------|------|---------|
| siteName | Text | Required |
| tagline | Text | - |
| heroTitle | Text | Required |
| heroSubtitle | Text | - |
| heroDescription | Rich Text (Markdown) | - |

### Setting API Permissions

For each content type:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Enable the following permissions:
   - **Portfolio-project**: find, findOne
   - **Blog-post**: find, findOne
   - **Live-app**: find, findOne
   - **Contact-info**: find
   - **Site-setting**: find
3. Click **Save**

## 🎨 Design System

The application uses a premium black, white, and gold color palette:

- **Primary Black**: `#0a0a0a`
- **Primary White**: `#ffffff`
- **Gold Accent**: `#d4af37`
- **Gold Light**: `#f1e4c3`

Typography:
- **Headings**: Playfair Display
- **Body**: Inter

## 📦 Available Scripts

### Frontend (Angular)

```bash
cd frontend

# Development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Backend (Strapi)

```bash
cd backend

# Development mode (with file watching)
npm run develop

# Production mode
npm run start

# Build admin panel
npm run build

# Deploy
npm run deploy
```

## 🔧 Configuration

### CORS Configuration

CORS is already configured in `/backend/config/middlewares.ts` to allow:
- `http://localhost:4200` (Angular dev server)

For production, update this file with your production domain.

### Environment Variables

Frontend environment configuration is in:
- Development: `/frontend/src/environments/environment.ts`
- Production: `/frontend/src/environments/environment.prod.ts`

Update the production file with your actual Strapi URL when deploying.

## 📂 Angular Project Structure

```
frontend/src/
├── app/
│   ├── core/          # Services, guards, interceptors
│   ├── shared/        # Shared components, directives, pipes
│   ├── features/      # Feature modules (portfolio, blog, apps)
│   └── layouts/       # Layout components (nav, footer)
├── assets/            # Images, fonts
└── styles/            # Global SCSS styles
```

## 🌐 API Endpoints

Once content is created, you can access:

- **Portfolio Projects**: `http://localhost:1337/api/portfolio-projects`
- **Blog Posts**: `http://localhost:1337/api/blog-posts`
- **Live Apps**: `http://localhost:1337/api/live-apps`
- **Contact Info**: `http://localhost:1337/api/contact-info`
- **Site Settings**: `http://localhost:1337/api/site-setting`

## 🎯 Next Steps

1. ✅ Backend and frontend are initialized
2. ⏳ Create content types in Strapi admin (see above)
3. ⏳ Set API permissions for public access
4. ⏳ Add sample content
5. ⏳ Build Angular components to display content
6. ⏳ Customize the design

## 🚀 Deployment

### Frontend (Angular)

Options:
- **Vercel**: Connect your git repository
- **Netlify**: Drag & drop build folder
- **Firebase Hosting**: `ng build && firebase deploy`

### Backend (Strapi - Self Hosted)

Recommended options:
- **DigitalOcean Droplet** with PostgreSQL
- **AWS EC2** with RDS
- **Railway.app** (easiest for beginners)
- **Linode**

Requirements:
- Node.js 18+
- PostgreSQL database (recommended for production)
- PM2 for process management
- Nginx for reverse proxy

## 📚 Resources

- [Angular Documentation](https://angular.dev/)
- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi 5 Migration Guide](https://docs.strapi.io/dev-docs/migration-guides)

## 🎨 Static Reference

The original static HTML/CSS/JS design is preserved in `/static-reference/` for reference. This demonstrates the target design that the Angular app will implement.

## 📝 Notes

- Strapi will use SQLite in development (file-based database)
- For production, switch to PostgreSQL for better performance
- Angular is configured with routing and SCSS support
- CORS is pre-configured for local development

---

**Built with** ❤️ **using Angular 18 and Strapi 5**
