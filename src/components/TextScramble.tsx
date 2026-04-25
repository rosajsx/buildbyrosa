'use client'

import { useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

function scramble(el: HTMLElement, target: string) {
  let frame = 0
  const total = 22
  const id = setInterval(() => {
    el.textContent = target.split('').map((ch, i) => {
      if (ch === ' ') return ' '
      if (ch === '.') return frame > total * 0.7 ? '.' : CHARS[Math.floor(Math.random() * CHARS.length)]
      return frame / total > i / target.length ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
    }).join('')
    if (++frame > total) { el.textContent = target; clearInterval(id) }
  }, 40)
}

interface Props {
  text: string
  children: React.ReactNode
  as?: 'span' | 'em'
  delay?: number
}

export default function TextScramble({ text, children, as: Tag = 'span', delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = () => {
      setTimeout(() => scramble(el, text), 400 + delay)
    }

    if (document.readyState === 'complete') {
      trigger()
    } else {
      window.addEventListener('load', trigger, { once: true })
    }
  }, [text, delay])

  return <Tag ref={ref as React.Ref<HTMLElement>}>{children}</Tag>
}
