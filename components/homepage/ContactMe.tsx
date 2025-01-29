'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 20 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <motion.section
      className="min-h-screen bg-[#15473e] text-[#f5f5f5] py-24 shadow-md relative z-10"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Me</h2>
      <div className="w-full max-w-full md:max-w-lg lg:max-w-[700px] mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-[#dedede] rounded-md shadow-sm focus:ring-[#e0f1f1] focus:border-[#b3ddda] sm:text-sm text-[#34a097]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-[#dedede] rounded-md shadow-sm focus:ring-[#e0f1f1] focus:border-[#b3ddda] sm:text-sm text-[#34a097]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-2 border border-[#dedede] rounded-md shadow-sm focus:ring-[#98CDBE] focus:border-[#b3ddda] sm:text-sm text-[#34a097]"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#34a097] text-[#f5f5f5] font-semibold rounded-md shadow-md hover:bg-[#1f8378] focus:outline-none focus:ring-2 focus:ring-[#34a097] focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactMe;
