import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let mouse = { x: -100, y: -100 }
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 10,
          y: mouse.y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          size: Math.random() * 2 + 0.5,
        })
      }
    }

    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Main glow
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 200
      )
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.04)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.015
        p.vx *= 0.98
        p.vy *= 0.98

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.life * 0.15})`
        ctx.fill()
      }

      // Connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 80) {
            const alpha = (1 - dist / 80) * particles[i].life * particles[j].life * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Cap particles
      if (particles.length > 150) {
        particles = particles.slice(-150)
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
