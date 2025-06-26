'use client'

import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      label: 'Email',
      value: 'sumitx0777@gmail.com',
      href: 'mailto:sumitx0777@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: '/in/sumit-dev',
      href: 'https://linkedin.com/in/sumit-dev'
    },
    {
      label: 'GitHub',
      value: '@xslayerxo',
      href: 'https://github.com/xslayerxo'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/sumit-dev', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/xslayerxo', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/sumitcodes', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/sumitcodes', label: 'Instagram' }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-primary text-secondary">
      <div className="max-w-4xl w-full mx-auto text-center">
        <div className="fade-in">
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-xl text-gray-400 mb-15 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, I&apos;m always open to new connections and opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                  {method.label}
                </h4>
                <a 
                  href={method.href}
                  className="text-lg font-medium text-secondary hover:text-accent transition-colors duration-300"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-5">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center text-secondary transition-all duration-300 hover:bg-secondary hover:text-primary hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact