import { create } from 'zustand'
import { TabType, Theme } from '@/types'

interface ViewState {
  activeTab: TabType
  previousTab: TabType | null
  theme: Theme
  isMenuOpen: boolean
  isTransitioning: boolean
  setActiveTab: (tab: TabType) => void
  toggleMenu: () => void
  setMenuOpen: (open: boolean) => void
  setTransitioning: (transitioning: boolean) => void
}

export const useViewStore = create<ViewState>((set, get) => ({
  activeTab: 'LANDING',
  previousTab: null,
  theme: 'LIGHT',
  isMenuOpen: false,
  isTransitioning: false,

  setActiveTab: (tab) => {
    const currentTab = get().activeTab
    if (currentTab === tab) {
      set({ isMenuOpen: false })
      return
    }

    set({
      isTransitioning: true,
      previousTab: currentTab,
      isMenuOpen: false,
    })

    setTimeout(() => {
      set({
        activeTab: tab,
        theme: tab === 'JAMES_WEBB' ? 'DARK' : 'LIGHT',
      })

      setTimeout(() => {
        set({ isTransitioning: false })
      }, 600)
    }, 300)
  },

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
}))
