export type TabType = 'LANDING' | 'JAMES_WEBB' | 'COMMERCIAL' | 'MV' | 'ABOUT'
export type Theme = 'LIGHT' | 'DARK'

export interface Project {
  id: string
  title: string
  client: string
  category: 'COMMERCIAL' | 'MV' | 'JAMES_WEBB'
  year: number
  thumbnail: string
  description: string
  aspectRatio: '16:9' | '4:3' | '1:1' | '9:16'
}

export interface MenuItem {
  id: TabType
  label: string
}
