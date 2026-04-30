'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const COUNT = 55
const CONN = 120
const SPEED = 0.3

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    let rafId: number
    const mouse = { x: -9999, y: -9999 }

    const nodes: Node[] = []
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * 1200,
        y: Math.random() * 900,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: Math.random() * 1.5 + 0.5,
      })
    }

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const heroWrap = canvas.parentElement
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    heroWrap?.addEventListener('mousemove', onMouseMove)
    heroWrap?.addEventListener('mouseleave', onMouseLeave)

    const isLightTheme = () => {
      const html = document.documentElement
      if (html.classList.contains('light')) return true
      if (html.classList.contains('dark')) return false
      return window.matchMedia('(prefers-color-scheme: light)').matches
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const light = isLightTheme()
      const dotColor = light ? 'rgba(30,35,60,0.18)' : 'rgba(255,255,255,0.18)'
      const lineColor = light ? 'rgba(30,35,60,1)' : 'rgba(255,255,255,1)'

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1

        const dx = n.x - mouse.x, dy = n.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 90 && dist > 0) {
          n.x += dx / dist * 0.6
          n.y += dy / dist * 0.6
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONN) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.globalAlpha = (1 - d / CONN) * 0.12
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      heroWrap?.removeEventListener('mousemove', onMouseMove)
      heroWrap?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" />
}
