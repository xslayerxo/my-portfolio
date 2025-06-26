# Sumit's Portfolio - Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, custom cursor effects, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper focus management
- **Custom Animations**: Framer Motion animations and custom cursor effects
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-vercel
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your site

### Manual Deployment

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── PageTransition.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#000000',
  secondary: '#ffffff',
  accent: '#0066FF',
  // ... other colors
}
```

### Content
Update your personal information in the respective components:
- `Hero.tsx` - Main introduction
- `About.tsx` - About section content
- `Skills.tsx` - Technical skills
- `Projects.tsx` - Portfolio projects
- `Experience.tsx` - Work experience
- `Contact.tsx` - Contact information

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).