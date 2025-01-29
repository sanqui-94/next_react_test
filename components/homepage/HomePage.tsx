'use client'

import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Landing from './Landing';
import VerticalNavigation from '../common/VerticalNavigation';
import NavigationBar from '../common/NavigationBar';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('landing');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="flex">
      <VerticalNavigation activeSection={activeSection} />
      <div className="flex-1">
        <section id="landing">
          <NavigationBar />
          <Landing />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </div>
    </main>
  );
}

