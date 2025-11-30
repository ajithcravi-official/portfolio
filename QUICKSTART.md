# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Start Strapi Backend

```bash
cd backend
npm run develop
```

**First time?** 
- Visit `http://localhost:1337/admin`
- Create your admin account
- You'll see the Strapi dashboard

### Step 2: Create Content Types

In the Strapi admin panel:

1. Click **Content-Type Builder** (🧩 icon)
2. Click **Create new collection type**
3. Create the following content types:

#### Quick Content Type Setup

**Portfolio Project** (`portfolio-project`)
```
- title (Text, Required)
- slug (UID from title)
- description (Rich Text)  
- image (Media - Single)
- tags (JSON)
- projectUrl (Text)
- githubUrl (Text)
- featured (Boolean)
- order (Number - Integer)
```

**Blog Post** (`blog-post`)
```
- title (Text, Required)
- slug (UID from title)
- excerpt (Text)
- content (Rich Text, Required)
- featuredImage (Media - Single)
- readTime (Number - Integer)
- author (Text, Required)
- featured (Boolean)
```

**Live App** (`live-app`)
```
- title (Text, Required)
- slug (UID from title)
- description (Rich Text, Required)
- screenshot (Media - Single, Required)
- liveUrl (Text, Required)
- category (Text)
- tags (JSON)
- status (Enumeration: Live, Beta, Maintenance)
- order (Number - Integer)
```

**Contact Info** (`contact-info` - Single Type)
```
- email (Email, Required)
- github (Text)
- linkedin (Text)
- twitter (Text)
- bio (Rich Text)
```

**Site Settings** (`site-setting` - Single Type)
```
- siteName (Text, Required)
- tagline (Text)
- heroTitle (Text, Required)
- heroSubtitle (Text)
- heroDescription (Rich Text)
```

### Step 3: Set Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Check these boxes:
   - ✅ **portfolio-project**: find, findOne
   - ✅ **blog-post**: find, findOne
   - ✅ **live-app**: find, findOne
   - ✅ **contact-info**: find
   - ✅ **site-setting**: find
3. Click **Save**

### Step 4: Add Sample Content

1. Go to **Content Manager**
2. Add at least one entry for each content type
3. Click **Publish** for each entry

### Step 5: Start Angular Frontend

In a new terminal:

```bash
cd frontend
npm start
```

Visit `http://localhost:4200` 🎉

---

## 📍 Useful URLs

- **Frontend**: http://localhost:4200
- **Strapi Admin**: http://localhost:1337/admin
- **Strapi API**: http://localhost:1337/api

---

## ⚡ Quick Commands Reference

```bash
# Start both servers
# Terminal 1:
cd backend && npm run develop

# Terminal 2:
cd frontend && npm start
```

---

## 🎨 What's Next?

The Angular app structure is ready. You mentioned you want to customize it later, so:

1. **Content Types** are defined above - create them first
2. **Add your content** in Strapi
3. **Customize Angular components** when ready (I can help with this!)

The design system from the static site is your reference in `/static-reference/`.

---

## 🆘 Troubleshooting

**Strapi won't start?**
- Check if port 1337 is available
- Delete `backend/.tmp` folder and try again

**Angular won't start?**
- Check if port 4200 is available  
- Run `npm install` in the frontend folder

** CORS errors?**
- Verify CORS is configured in `/backend/config/middlewares.ts`
- Your Angular URL should be in the origin array

---

**Ready to build something amazing!** 🚀
