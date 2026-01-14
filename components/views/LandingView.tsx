'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LandingView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return

    const tl = gsap.timeline()

    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex flex-col items-center justify-center bg-white"
    >
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-light tracking-tight leading-none text-black"
        >
          WEBB
        </h1>
        <p
          ref={subtitleRef}
          className="text-sm md:text-base tracking-[0.5em] mt-6 text-black/50"
        >
          FILM / PHOTO / DESIGN
        </p>
      </div>

      {/* Scroll Indicator - Hidden since no scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0">
        <span className="text-xs tracking-widest text-black/40">MENU</span>
      </div>
    </div>
  )
}
