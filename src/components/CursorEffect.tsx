'use client'

import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      document.body.classList.add('cursor-visible')
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      ring.style.width = '56px'
      ring.style.height = '56px'
    }
    const onLeave = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
    }

    const attachHoverListeners = () => {
      document.querySelectorAll<HTMLElement>('a, button, .project-card, .contact-link-item').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    // attach after paint so DOM elements exist
    setTimeout(attachHoverListeners, 500)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
