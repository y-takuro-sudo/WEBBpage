export type TabType = 'LANDING' | 'JAMES_WEBB' | 'COMMERCIAL' | 'MV' | 'ABOUT'
export type Theme = 'LIGHT' | 'DARK'
export type CategoryType = 'JAMES WEBB' | 'COMMERCIAL' | 'MV'

export interface MenuItem {
  id: TabType
  label: string
}

// Re-export CMS types
export type { Project, Category, MicroCMSImage } from '@/libs/microcms'
