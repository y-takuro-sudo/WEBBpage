'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

export default function AboutView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: containerRef.current.firstElementChild as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!contentRef.current) return

    const elements = contentRef.current.querySelectorAll('[data-animate]')

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-white"
    >
      <div ref={contentRef} className="min-h-full pt-32 pb-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl">
          <h1
            data-animate
            className="text-6xl md:text-8xl font-light tracking-tight mb-16 text-black"
          >
            ABOUT
          </h1>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2
                data-animate
                className="text-sm tracking-widest mb-6 text-black/40"
              >
                COMPANY
              </h2>
              <p data-animate className="text-lg md:text-xl leading-relaxed text-black">
                WEBB Inc. is a creative production company founded in Tokyo.
              </p>
              <p
                data-animate
                className="text-lg md:text-xl leading-relaxed mt-4 text-black/70"
              >
                We specialize in creating visual content that resonates—film,
                photography, and design that captures the essence of brands and
                stories.
              </p>
            </div>

            <div>
              <h2
                data-animate
                className="text-sm tracking-widest mb-6 text-black/40"
              >
                PHILOSOPHY
              </h2>
              <p data-animate className="text-lg md:text-xl leading-relaxed text-black">
                Contrast creates meaning. Minimalism reveals truth.
              </p>
              <p
                data-animate
                className="text-lg md:text-xl leading-relaxed mt-4 text-black/70"
              >
                We believe in the power of restraint—in letting the work breathe,
                in finding beauty in negative space.
              </p>
            </div>
          </div>

          <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2
                data-animate
                className="text-sm tracking-widest mb-6 text-black/40"
              >
                FOUNDER
              </h2>
              <h3
                data-animate
                className="text-2xl md:text-3xl font-light mb-4 text-black"
              >
                Kazuyasu Yoshioka
              </h3>
              <p data-animate className="leading-relaxed text-black/70">
                Director / Cinematographer
              </p>
            </div>

            <div>
              <h2
                data-animate
                className="text-sm tracking-widest mb-6 text-black/40"
              >
                CONTACT
              </h2>
              <a
                href="mailto:contact@webb-official.com"
                data-animate
                className="text-lg md:text-xl text-black hover:text-black/60 transition-colors"
              >
                contact@webb-official.com
              </a>
              <div data-animate className="mt-8 flex gap-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest text-black/40 hover:text-black transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest text-black/40 hover:text-black transition-colors"
                >
                  VIMEO
                </a>
              </div>
            </div>
          </div>

          <div
            data-animate
            className="mt-32 pt-8 border-t border-black/10"
          >
            <p className="text-xs tracking-widest text-black/40">
              WEBB Inc. / Tokyo, Japan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
