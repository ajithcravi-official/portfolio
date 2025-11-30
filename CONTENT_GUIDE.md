# Quick Guide: Adding Content to Strapi CMS

Since your Strapi server is running at `http://localhost:1337/admin`, follow this guide to quickly add all the content from your static site.

## Step 1: Access Strapi Admin

Open `http://localhost:1337/admin` in your browser.

##Step 2: Create Content Types

Before adding content, you need to create the content types. Go to **Content-Type Builder** (puzzle icon) and create each one as outlined below.

### Portfolio Project (Collection Type)

1. Click "Create new collection type"
2. Display name: `Portfolio Project`
3. Add fields:
   - `title` (Text, Required, Short text)
   - `slug` (UID, Attached to "title")
   - `description` (Rich Text - Markdown)
   - `image` (Media, Single media, Required)
   - `tags` (JSON)
   - `projectUrl` (Text, Short text)
   - `githubUrl` (Text, Short text)
   - `featured` (Boolean, Default: false)
   - `order` (Number, Integer format)
4. Click "Save"

### Blog Post (Collection Type)

1. Display name: `Blog Post`
2. Add fields:
   - `title` (Text, Required)
   - `slug` (UID, Attached to "title")
   - `excerpt` (Text, Long text)
   - `content` (Rich Text - Markdown, Required)
   - `featuredImage` (Media, Single media)
   - `readTime` (Number, Integer)
   - `author` (Text, Required)
   - `featured` (Boolean, Default: false)
3. Click "Save"

### Live App (Collection Type)

1. Display name: `Live App`
2. Add fields:
   - `title` (Text, Required)
   - `slug` (UID, Attached to "title")
   - `description` (Rich Text - Markdown, Required)
   - `screenshot` (Media, Single media, Required)
   - `liveUrl` (Text, Required)
   - `category` (Text)
   - `tags` (JSON)
   - `status` (Enumeration, Required, Values: `Live`, `Beta`, `Maintenance`)
   - `order` (Number, Integer)
3. Click "Save"

### Contact Info (Single Type)

1. Click "Create new single type"
2. Display name: `Contact Info`
3. Add fields:
   - `email` (Email, Required)
   - `github` (Text)
   - `linkedin` (Text)
   - `twitter` (Text)
   - `bio` (Rich Text - Markdown)
4. Click "Save"

### Site Setting (Single Type)

1. Display name: `Site Setting`
2. Add fields:
   - `siteName` (Text, Required)
   - `tagline` (Text)
   - `heroTitle` (Text, Required)
   - `heroSubtitle` (Text)
   - `heroDescription` (Rich Text - Markdown)
3. Click "Save"

## Step 3: Set API Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Check these permissions:
   - **Portfolio-project**: `find`, `findOne`
   - **Blog-post**: `find`, `findOne`
   - **Live-app**: `find`, `findOne`
   - **Contact-info**: `find`
   - **Site-setting**: `find`
3. Click **Save**

## Step 4: Add Content

Now go to **Content Manager** and add content for each type.

### Site Settings

1. Go to Content Manager → Site Setting
2. Fill in:
   - Site Name: `Portfolio`
   - Tagline: `Elegant Showcase`
   - Hero Title: `Hi, I'm Your Name`
   - Hero Subtitle: `Welcome to my Portfolio`
   - Hero Description: `A passionate developer crafting elegant digital experiences. Specializing in building beautiful, functional, and user-centric applications.`
3. Click **Save** → **Publish**

### Contact Info

1. Go to Content Manager → Contact Info  
2. Fill in:
   - Email: `your.email@example.com`
   - GitHub: `https://github.com`
   - LinkedIn: `https://linkedin.com`
   - Twitter: `https://twitter.com`
   - Bio: `Whether you have a project in mind, want to discuss collaboration opportunities, or just want to say hello, feel free to reach out!`
3. Click **Save** → **Publish**

### Portfolio Projects (6 items)

Click "Create new entry" for each project:

#### 1. Analytics Dashboard
- Title: `Analytics Dashboard`
- Description: `A comprehensive analytics dashboard with real-time data visualization and interactive charts for business intelligence.`
- Tags: `["React", "D3.js", "Node.js"]`
- Featured: ✓ (checked)
- Order: `1`
- Image URL: Paste in browser: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop`
  - Right-click → "Copy image" → Paste in Strapi Media field
- Save → Publish

#### 2. E-Commerce Platform
- Title: `E-Commerce Platform`
- Description: `Full-featured e-commerce solution with secure payments, inventory management, and seamless user experience.`
- Tags: `["Next.js", "Stripe", "MongoDB"]`
- Order: `2`
- Image: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop`

#### 3. Fitness Tracker App
- Title: `Fitness Tracker App`
- Description: `Cross-platform mobile application for tracking workouts, nutrition, and health metrics with AI-powered insights.`
- Tags: `["React Native", "Firebase", "Health API"]`
- Order: `3`
- Image: `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop`

#### 4. AI Content Generator
- Title: `AI Content Generator`
- Description: `AI-powered content generation tool leveraging large language models for marketing copy and creative writing.`
- Tags: `["Python", "OpenAI", "FastAPI"]`
- Order: `4`
- Image: `https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop`

#### 5. Portfolio CMS
- Title: `Portfolio CMS`
- Description: `Headless CMS portfolio builder with drag-and-drop interface and real-time preview capabilities.`
- Tags: `["Vue.js", "Contentful", "Tailwind"]`
- Order: `5`
- Image: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop`

#### 6. Data Visualization Suite
- Title: `Data Visualization Suite`
- Description: `Interactive 3D data visualization platform for complex datasets with immersive exploration capabilities.`
- Tags: `["TypeScript", "Three.js", "WebGL"]`
- Order: `6`
- Image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop`

### Blog Posts (6 items)

#### 1. Modern Web Development Trends
- Title: `Modern Web Development Trends`
- Excerpt: `Exploring the latest trends in web development including AI integration, micro-frontends, and the future of JavaScript frameworks.`
- Content: (Add your full blog content or leave for now)
- Read Time: `5`
- Author: `Your Name`
- Featured: ✓
- Featured Image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop`

#### 2. Building Scalable APIs
- Title: `Building Scalable APIs`
- Excerpt: `A comprehensive guide to designing and implementing scalable REST APIs with best practices for authentication and rate limiting.`
- Read Time: `8`
- Author: `Your Name`
- Image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop`

#### 3. The Art of UI Animation
- Title: `The Art of UI Animation`
- Excerpt: `Learn how to create smooth, performant animations that enhance user experience without compromising on performance.`
- Read Time: `6`
- Author: `Your Name`
- Image: `https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop`

#### 4. CI/CD Pipeline Essentials
- Title: `CI/CD Pipeline Essentials`
- Excerpt: `Setting up automated deployment pipelines with GitHub Actions, Docker, and Kubernetes for seamless delivery.`
- Read Time: `10`
- Author: `Your Name`
- Image: `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop`

#### 5. Advanced TypeScript Patterns
- Title: `Advanced TypeScript Patterns`
- Excerpt: `Deep dive into advanced TypeScript patterns including generics, decorators, and utility types for better code quality.`
- Read Time: `7`
- Author: `Your Name`
- Image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop`

#### 6. Web Performance Optimization
- Title: `Web Performance Optimization`
- Excerpt: `Techniques and strategies for optimizing web application performance including lazy loading, code splitting, and caching.`
- Read Time: `9`
- Author: `Your Name`
- Image: `https://images.unsplash.com/photo-1557853197-aefb550b6fdc?w=600&h=400&fit=crop`

### Live Apps (6 items)

#### 1. TaskFlow Pro
- Title: `TaskFlow Pro`
- Description: `Advanced task management platform with team collaboration, real-time updates, and powerful analytics.`
- Live URL: `#`
- Category: `SaaS`
- Tags: `["SaaS"]`
- Status: `Live`
- Order: `1`
- Screenshot: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop`

#### 2. ChatConnect
- Title: `ChatConnect`
- Description: `Secure messaging platform with end-to-end encryption, video calls, and file sharing capabilities.`
- Live URL: `#`
- Category: `Real-time`
- Tags: `["Real-time"]`
- Status: `Live`
- Order: `2`
- Screenshot: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop`

#### 3. CodePen Clone
- Title: `CodePen Clone`
- Description: `Online code editor with live preview, syntax highlighting, and collaborative coding features.`
- Live URL: `#`
- Category: `Editor`
- Tags: `["Editor"]`
- Status: `Live`
- Order: `3`
- Screenshot: `https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop`

#### 4. Weather Pro
- Title: `Weather Pro`
- Description: `Beautiful weather application with detailed forecasts, radar maps, and personalized weather alerts.`
- Live URL: `#`
- Category: `API`
- Tags: `["API"]`
- Status: `Live`
- Order: `4`
- Screenshot: `https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop`

#### 5. Budget Tracker
- Title: `Budget Tracker`
- Description: `Personal finance manager with expense tracking, budgeting tools, and financial insights.`
- Live URL: `#`
- Category: `Finance`
- Tags: `["Finance"]`
- Status: `Live`
- Order: `5`
- Screenshot: `https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop`

#### 6. MusicStream
- Title: `MusicStream`
- Description: `Modern music streaming platform with playlists, recommendations, and high-quality audio playback.`
- Live URL: `#`
- Category: `Media`
- Tags: `["Media"]`
- Status: `Live`
- Order: `6`
- Screenshot: `https://images.unsplash.com/photo-1590650046871-92c887180603?w=600&h=400&fit=crop`

## 🎉 Done!

After adding all content:
1. Verify everything is published
2. Test the API endpoints:
   - `http://localhost:1337/api/portfolio-projects`
   - `http://localhost:1337/api/blog-posts`
   - `http://localhost:1337/api/live-apps`
   - `http://localhost:1337/api/contact-info`
   - `http://localhost:1337/api/site-setting`

Your Strapi CMS is now populated with all the content from the static site!

---

**Tip**: For images, you can either:
1. Paste the Unsplash URL in your browser, download the imageand upload to Strapi
2. Or use a URL-to-upload browser extension
3. Or manually download and drag-drop into Strapi
