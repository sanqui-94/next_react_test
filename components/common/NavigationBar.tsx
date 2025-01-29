'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function  NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="py-4 bg-[#15473e] text-[#f5f5f5] relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="/"
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Sanqui
          </motion.a>

          <div className="hidden md:flex space-x-4">
            {['Projects'].map((item, index) => (
              <motion.a
                key={item}
                href={`/projects`}
                className="text-[#f5f5f5] hover:text-[#FFE2DA] transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {['Projects'].map((item) => (
                <a
                  key={item}
                  href={`/projects`}
                  className="text-[#f5f5f5] hover:text-[#FFE2DA] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

