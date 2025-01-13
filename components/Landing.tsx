import { FallingDotsBackground } from "./FallingDotsBackground";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#0D261F] text-[#bdbdbd]">
      <FallingDotsBackground />
      <div className="text-center relative z-10">
        <motion.h2
          className="text-2xl md:text-2xl lg:text-2xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello World, I am
        </motion.h2>
        <motion.h1
          className="text-[#f5f5f5] text-7xl md:text-7xl lg:text-6xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            className="inline-block px-8 py-3 bg-[#bdbdbd] text-[#0D261F] rounded-full font-medium hover:bg-[#dde3fd] transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
