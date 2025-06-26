'use client'

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 tracking-tight">
            Professional Journey
          </h2>
        </div>
        
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* IOCL Experience */}
          <div className="fade-in bg-secondary rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group border border-gray-200">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-blue-600 text-secondary rounded-xl sm:rounded-2xl flex items-center justify-center font-syne text-base sm:text-lg font-bold flex-shrink-0 shadow-lg">
                  IOCL
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="font-syne text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                      Indian Oil Corporation Limited
                    </h3>
                    <div className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full self-start">
                      Summer 2024
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-accent font-medium mb-1">
                    Research Intern — Research & Development Division
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Contributed to cutting-edge research initiatives at one of India&apos;s premier energy companies.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Key Achievements
                  </h4>
                  <div className="grid gap-2 sm:gap-3">
                    {[
                      'Developed data analysis tools that improved operational efficiency by 15%',
                      'Implemented machine learning models for predictive maintenance systems',
                      'Collaborated on research projects focused on sustainable fuel technologies',
                      'Presented findings to senior stakeholders and contributed to technical documentation',
                      'Gained hands-on experience with industrial IoT systems and real-time data processing'
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors duration-200 touch-manipulation">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SRM Experience */}
          <div className="fade-in bg-secondary rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group border border-gray-200">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-secondary rounded-xl sm:rounded-2xl flex items-center justify-center font-syne text-base sm:text-lg font-bold flex-shrink-0 shadow-lg">
                  SRM
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="font-syne text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                      SRM University
                    </h3>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full self-start">
                      2023 - Present
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-green-600 font-medium mb-1">
                    Research & Development — Advanced Computing Lab
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Active involvement in cutting-edge research across multiple domains including Quantum Computing and IoT systems.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Research Areas & Contributions
                  </h4>
                  <div className="grid gap-2 sm:gap-3">
                    {[
                      'Quantum Computing: Research on quantum algorithms and their applications in optimization problems',
                      'DevOps Engineering: Implemented CI/CD pipelines and automated deployment strategies for academic projects',
                      'Internet of Things (IoT): Developed sensor networks and data collection systems for smart campus initiatives',
                      'Machine Learning Integration: Applied ML models to enhance IoT data processing and analysis',
                      'Cross-disciplinary Collaboration: Worked with faculty and students across computer science and engineering departments'
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-green-50 transition-colors duration-200 touch-manipulation">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience