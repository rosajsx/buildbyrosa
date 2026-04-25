'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${className ? ' ' + className : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
