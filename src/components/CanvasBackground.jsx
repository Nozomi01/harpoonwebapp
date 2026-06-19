import { useEffect, useRef } from 'react'

export default function CanvasBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Stars
    const stars = Array.from({ length: 900 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
      brightness: Math.random() * 0.6 + 0.4,
    }))

    // Nebula clouds
    const nebulae = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 320 + 100,
      color: i % 3 === 0 ? '0, 212, 255' : i % 3 === 1 ? '139, 92, 246' : '255, 107, 53',
      opacity: Math.random() * 0.045 + 0.015,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
    }))

    // Shooting stars
    const shooters = []
    let shootTimer = 0

    const spawnShooter = () => {
      shooters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 6 + 4,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      })
    }

    // Grid lines (very subtle)
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.025)'
      ctx.lineWidth = 1
      const spacing = 80
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
    }

    const animate = () => {
      ctx.fillStyle = '#020212'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGrid()

      // Nebulae
      nebulae.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < -n.radius) n.x = canvas.width + n.radius
        if (n.x > canvas.width + n.radius) n.x = -n.radius
        if (n.y < -n.radius) n.y = canvas.height + n.radius
        if (n.y > canvas.height + n.radius) n.y = -n.radius
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius)
        g.addColorStop(0, `rgba(${n.color}, ${n.opacity})`)
        g.addColorStop(1, `rgba(${n.color}, 0)`)
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2); ctx.fill()
      })

      // Stars
      stars.forEach(s => {
        s.phase += s.speed
        const a = ((Math.sin(s.phase) + 1) / 2) * s.brightness
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill()
        if (s.r > 1.2) {
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200,220,255,${a * 0.15})`; ctx.fill()
        }
      })

      // Shooting stars
      shootTimer++
      if (shootTimer > 180 && Math.random() < 0.04) { spawnShooter(); shootTimer = 0 }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]
        s.life++; s.x += Math.cos(s.angle) * s.speed; s.y += Math.sin(s.angle) * s.speed
        s.opacity = 1 - s.life / s.maxLife
        const tail = { x: s.x - Math.cos(s.angle) * s.len, y: s.y - Math.sin(s.angle) * s.len }
        const grad = ctx.createLinearGradient(tail.x, tail.y, s.x, s.y)
        grad.addColorStop(0, `rgba(255,255,255,0)`)
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity * 0.9})`)
        ctx.strokeStyle = grad; ctx.lineWidth = 1.5
        ctx.beginPath(); ctx.moveTo(tail.x, tail.y); ctx.lineTo(s.x, s.y); ctx.stroke()
        if (s.life >= s.maxLife) shooters.splice(i, 1)
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  )
}
