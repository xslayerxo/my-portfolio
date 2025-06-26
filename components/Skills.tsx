'use client'

const Skills = () => {
  const skillCategories = [
    {
      icon: '⚡',
      title: 'Frontend',
      skills: ['React.js', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'SASS']
    },
    {
      icon: '🔧',
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      icon: '💾',
      title: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Docker']
    },
    {
      icon: '🛠',
      title: 'Tools & Others',
      skills: ['Git', 'CI/CD', 'Jest', 'Webpack', 'Figma', 'ML Basics']
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6 bg-secondary">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-20 fade-in">
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="fade-in bg-gray-100 p-10 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <h3 className="font-syne text-2xl font-semibold mb-5 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </h3>
              
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="bg-secondary px-4 py-2 rounded-2xl text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-primary hover:text-secondary hover:-translate-y-0.5 cursor-default skill-tag"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills