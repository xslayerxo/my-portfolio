import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Sumit — Developer Portfolio',
  description: 'Full Stack Developer & Tech Enthusiast. Crafting digital experiences with modern technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Sumit' }],
  creator: 'Sumit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sumit-portfolio.vercel.app',
    title: 'Sumit — Developer Portfolio',
    description: 'Full Stack Developer & Tech Enthusiast. Crafting digital experiences with modern technologies.',
    siteName: 'Sumit Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit — Developer Portfolio',
    description: 'Full Stack Developer & Tech Enthusiast. Crafting digital experiences with modern technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}