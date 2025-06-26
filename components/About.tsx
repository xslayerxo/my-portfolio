'use client'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="fade-in">
            <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 tracking-tight leading-tight text-primary dark:text-white transition-colors duration-300">
              Building the future,<br />one line at a time
            </h2>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-8 lg:mb-10 leading-relaxed transition-colors duration-300">
              Passionate about creating elegant solutions to complex problems through code and design.
            </p>
            
            <div className="grid grid-cols-2 gap-6 lg:gap-8 mt-10 lg:mt-15">
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '5+', label: 'Technologies Mastered' },
                { number: '1', label: 'Research Internship' },
                { number: '∞', label: 'Curiosity Level' }
              ].map((stat, index) => (
                <div key={index} className="border-t border-gray-300 dark:border-gray-600 pt-4 lg:pt-5 transition-colors duration-300">
                  <div className="font-syne text-3xl lg:text-4xl xl:text-5xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in pt-4 lg:pt-5">
            <p className="text-lg lg:text-xl font-medium text-primary dark:text-white mb-6 lg:mb-8 leading-relaxed transition-colors duration-300">
              I believe in the power of technology to transform ideas into reality.
            </p>
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed transition-colors duration-300">
              Currently pursuing my degree at SRM University, I&apos;m on a mission to master the art of full-stack development while exploring the latest in tech innovation. My journey has been shaped by hands-on experience, continuous learning, and a drive to create meaningful digital solutions.
            </p>
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-10 lg:mb-15 leading-relaxed transition-colors duration-300">
              Beyond coding, I&apos;m passionate about understanding how technology can solve real-world problems and improve lives. This philosophy guided my work during my internship at Indian Oil Corporation&apos;s Research Division, where I contributed to cutting-edge research projects.
            </p>
            
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gray-300">
              {[
                { label: 'Education', value: 'SRM University' },
                { label: 'Focus Area', value: 'Full Stack Development' },
                { label: 'Experience', value: 'IOCL Research Intern' },
                { label: 'Location', value: 'India' }
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                    {item.label}
                  </h4>
                  <p className="text-lg font-medium text-primary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About