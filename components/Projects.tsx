'use client'

import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'DevKit Pro',
      description: 'A comprehensive developer toolbox featuring 23+ essential tools for development, design, and content creation. Built with privacy-first approach, everything runs in the browser with no data leaving your device.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'React'],
      link: 'https://devkit-pro.vercel.app'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time data visualization platform powered by machine learning, providing actionable business insights through interactive charts and predictive analytics.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Task Management System',
      description: 'Cross-platform productivity application with real-time collaboration, smart notifications, and seamless cloud synchronization for teams of all sizes.',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux Toolkit'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight text-primary dark:text-white transition-colors duration-300">
            Selected Works
          </h2>
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A showcase of projects that demonstrate my passion for creating innovative solutions
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="fade-in bg-secondary rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group project"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image/Preview */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[16/10] lg:aspect-[4/3] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 relative">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Project preview mockup */}
                    <div className="absolute inset-6 bg-white rounded-xl shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-4 h-full flex flex-col">
                        <div className="flex gap-2 mb-3">
                          <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                          <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                          <div className="text-accent/40 font-syne font-semibold text-lg lg:text-xl text-center">
                            {project.title}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover CTA */}
                    <div className="absolute bottom-6 left-6 bg-primary text-secondary px-4 py-2 rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Project →
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-syne text-2xl lg:text-3xl font-semibold mb-4 text-primary leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="font-jetbrains text-xs lg:text-sm text-gray-600 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 skill-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Link */}
                    <div className="pt-2">
                      <a 
                        href={project.link}
                        target={project.link !== '#' ? '_blank' : undefined}
                        rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-primary font-medium text-base transition-all duration-300 hover:text-accent hover:gap-3 group/link"
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <div className="text-center mt-16 fade-in">
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects