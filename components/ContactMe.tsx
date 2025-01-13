'use client';

import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <section className="min-h-screen bg-[#0D261F] text-[#bdbdbd] py-24 shadow-md relative z-10" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Me</h2>
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-[#e0e0e0] rounded-md shadow-sm focus:ring-[#98CDBE] focus:border-[#53AC93] sm:text-sm text-[#326758]"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98CDBE] focus:border-[#53AC93] sm:text-sm text-[#326758]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98CDBE] focus:border-[#53AC93] sm:text-sm text-[#326758]"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#53AC93] text-[#f5f5f5] font-semibold rounded-md shadow-md hover:bg-[#295649] focus:outline-none focus:ring-2 focus:ring-[#326758] focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
