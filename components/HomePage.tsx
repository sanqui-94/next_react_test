'use client'


import { Navigation } from './navigation'
import { FallingDotsBackground } from './FallingDotsBackground'
import AboutMe from './AboutMe'
import Landing from './Landing'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Landing />
      <AboutMe />
    </main>
    
  )
}

