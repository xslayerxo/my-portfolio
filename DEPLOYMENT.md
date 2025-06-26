# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Next.js portfolio"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch will trigger a new deployment
   - Preview deployments for pull requests

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set up domain
   - Deploy

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel's IP

## 📊 Performance Optimization

### Already Implemented:
- ✅ Static Site Generation (SSG)
- ✅ Image optimization
- ✅ Code splitting
- ✅ Font optimization
- ✅ CSS optimization

### Build Output Analysis:
- Total bundle size: ~121 kB (excellent)
- First Load JS: 81.9 kB (very good)
- All pages are statically generated

## 🔧 Environment Variables

If you need environment variables:

1. **Create `.env.local`:**
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

2. **Add to Vercel:**
   - Project Settings → Environment Variables
   - Add your variables

## 📈 Analytics Setup

### Google Analytics (Optional)
1. Add to `app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
         </body>
       </html>
     )
   }
   ```

### Vercel Analytics (Built-in)
1. Install:
   ```bash
   npm install @vercel/analytics
   ```

2. Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## 🔍 SEO Optimization

### Already Implemented:
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Semantic HTML
- ✅ Proper heading structure

### Additional SEO:
1. **Add sitemap.xml:**
   ```bash
   # Create app/sitemap.ts
   export default function sitemap() {
     return [
       {
         url: 'https://your-domain.com',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
       },
     ]
   }
   ```

2. **Add robots.txt:**
   ```bash
   # Create app/robots.ts
   export default function robots() {
     return {
       rules: {
         userAgent: '*',
         allow: '/',
       },
       sitemap: 'https://your-domain.com/sitemap.xml',
     }
   }
   ```

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check ESLint errors: `npm run lint`
   - Fix TypeScript errors: `npm run build`

2. **Images Not Loading:**
   - Ensure images are in `public/` folder
   - Use Next.js Image component

3. **Fonts Not Loading:**
   - Fonts are loaded via Google Fonts
   - Check network connectivity

### Performance Monitoring:
- Use Vercel Analytics
- Monitor Core Web Vitals
- Check Lighthouse scores

## 📱 Mobile Testing

Test on various devices:
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad)
- Desktop (Chrome, Firefox, Safari)

## 🔄 Continuous Deployment

Your setup includes:
- ✅ Automatic deployments on push
- ✅ Preview deployments for PRs
- ✅ Rollback capabilities
- ✅ Branch deployments