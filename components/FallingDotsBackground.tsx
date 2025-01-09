'use client'

import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  speed: number
  size: number
  opacity: number
}

export function FallingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const dots: Dot[] = []
    const dotCount = 100

    // Set canvas size with device pixel ratio support
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Initialize dots
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.2 + 0.2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#0D261F'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      dots.forEach(dot => {
        // Update position
        dot.y += dot.speed

        // Reset position when dot reaches bottom
        if (dot.y > canvas.height) {
          dot.y = -10
          dot.x = Math.random() * canvas.width
        }

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 173, 198, ${dot.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

