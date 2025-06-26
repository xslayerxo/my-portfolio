'use client'

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-400 text-center py-12 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <p className="font-jetbrains text-sm md:text-base">
          &copy; 2025 <span className="text-accent">[Portfolio]</span> Sumit. | 
          <a 
            href="mailto:sumitx0777@gmail.com" 
            className="text-gray-300 hover:text-accent transition-colors duration-300 ml-2"
          >
            sumitx0777@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer