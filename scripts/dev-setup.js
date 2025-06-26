#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up development environment...\n');

// Create public directory and add placeholder files
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('✅ Created public directory');
}

// Create placeholder images directory
const imagesDir = path.join(publicDir, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
  console.log('✅ Created images directory');
}

// Create projects directory
const projectsDir = path.join(imagesDir, 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir);
  console.log('✅ Created projects directory');
}

// Create a simple favicon
const faviconContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#0066FF"/>
  <text x="50" y="65" font-family="Arial, sans-serif" font-size="60" font-weight="bold" text-anchor="middle" fill="white">S</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconContent);
console.log('✅ Created favicon');

// Create robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('✅ Created robots.txt');

// Create a development environment file template
const envTemplate = `# Development Environment Variables
# Copy this to .env.local and update with your values

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Sumit Portfolio"

# Analytics (Optional)
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
# NEXT_PUBLIC_MIXPANEL_TOKEN=your-mixpanel-token

# Contact Form (Optional)
# EMAILJS_SERVICE_ID=your-emailjs-service-id
# EMAILJS_TEMPLATE_ID=your-emailjs-template-id
# EMAILJS_PUBLIC_KEY=your-emailjs-public-key

# CMS (Optional)
# SANITY_PROJECT_ID=your-sanity-project-id
# SANITY_DATASET=production
# SANITY_API_TOKEN=your-sanity-token`;

fs.writeFileSync(path.join(__dirname, '..', '.env.example'), envTemplate);
console.log('✅ Created .env.example');

console.log('\n🎉 Development environment setup complete!');
console.log('\n📝 Next steps:');
console.log('1. Copy .env.example to .env.local and update values');
console.log('2. Add your project images to public/images/projects/');
console.log('3. Update components with your real data');
console.log('4. Run "npm run dev" to start development server');
console.log('\n📚 Check ENHANCEMENTS.md for improvement suggestions');
console.log('📖 Check DEPLOYMENT.md for deployment instructions');