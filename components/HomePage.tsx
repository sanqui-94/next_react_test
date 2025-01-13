'use client'


import { Navigation } from './navigation'
import AboutMe from './AboutMe'
import Landing from './Landing'
import ContactMe from './ContactMe'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Landing />
      <AboutMe />
      <ContactMe />
    </main>
    
  )
}

