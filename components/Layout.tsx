'use client'

import { useEffect, useRef } from 'react'
import { useViewStore } from '@/store/useViewStore'
import gsap from 'gsap'
import LandingView from './views/LandingView'
import GridView from './views/GridView'
import AboutView from './views/AboutView'
import MenuOverlay from './MenuOverlay'

export default function Layout() {
  const { activeTab, theme, isMenuOpen, toggleMenu, isTransitioning } = useViewStore()
  const viewContainerRef = useRef<HTMLDivElement>(null)
  const isDark = theme === 'DARK'

  // View transition animation
  useEffect(() => {
    if (!viewContainerRef.current) return

    gsap.fromTo(
      viewContainerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
  }, [activeTab])

  const renderCurrentView = () => {
    switch (activeTab) {
      case 'LANDING':
        return <LandingView />
      case 'COMMERCIAL':
        return <GridView category="COMMERCIAL" />
      case 'MV':
        return <GridView category="MV" />
      case 'JAMES_WEBB':
        return <GridView category="JAMES_WEBB" />
      case 'ABOUT':
        return <AboutView />
      default:
        return <LandingView />
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Layer for theme transition */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}
      />

      {/* Logo - Top Left */}
      <div className="fixed top-8 left-8 z-[200] mix-blend-difference">
        <h1 className="text-lg md:text-xl tracking-[0.3em] font-light text-white">
          WEBB
          <span className="text-xs ml-1 opacity-60">Inc.</span>
        </h1>
      </div>

      {/* Menu Trigger - Top Right */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-[200] p-2"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 mix-blend-difference">
          <span
            className={`block w-7 h-[2px] bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Current View */}
      <div
        ref={viewContainerRef}
        className={`absolute inset-0 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderCurrentView()}
      </div>

      {/* Menu Overlay */}
      <MenuOverlay />
    </div>
  )
}
