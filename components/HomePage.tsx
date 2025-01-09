'use client'

import { motion } from 'framer-motion'
import { Navigation } from './navigation'
import { FallingDotsBackground } from './FallingDotsBackground'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D261F] text-[#a7adc6] relative overflow-hidden">
      <FallingDotsBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="container mx-auto px-4">
          <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <div className="text-center">
              <motion.h2 
                className="text-2xl md:text-2xl lg:text-2xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hello World, I am
              </motion.h2>
              <motion.h1
                // className="text-[#53AC93] text-4xl md:text-4xl lg:text-4xl font-bold mb-3"
                className="text-[#f1f7ff] text-7xl md:text-7xl lg:text-6xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Santiago Quiroga Turdera
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Full Stack Software Developer
              </motion.p>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-3 bg-[#a7adc6] text-[#0D261F] rounded-full font-medium hover:bg-[#dde3fd] transition-colors"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

