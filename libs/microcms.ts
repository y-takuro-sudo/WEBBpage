import { createClient } from 'microcms-js-sdk'

// Types
export type Category = 'JAMES WEBB' | 'COMMERCIAL' | 'MV'

export interface MicroCMSImage {
  url: string
  height: number
  width: number
}

export interface Project {
  id: string
  title: string
  category: Category[]
  thumbnail: MicroCMSImage
  videoUrl?: string
  year?: string
  client?: string
  description?: string
}

export interface ProjectsResponse {
  contents: Project[]
  totalCount: number
  offset: number
  limit: number
}

// Client
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  console.warn('MICROCMS_SERVICE_DOMAIN is not defined')
}

if (!process.env.MICROCMS_API_KEY) {
  console.warn('MICROCMS_API_KEY is not defined')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
})

// Fetch functions with ISR
export async function getProjects(
  category?: Category,
  limit: number = 100
): Promise<Project[]> {
  try {
    const queries: Record<string, string | number> = {
      limit,
    }

    if (category) {
      queries.filters = `category[contains]${category}`
    }

    const response = await client.get<ProjectsResponse>({
      endpoint: 'projects',
      queries,
    })

    return response.contents
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const project = await client.get<Project>({
      endpoint: 'projects',
      contentId: id,
    })

    return project
  } catch (error) {
    console.error('Failed to fetch project:', error)
    return null
  }
}

// Fallback data for development/preview when CMS is not configured
export const FALLBACK_PROJECTS: Project[] = [
  // COMMERCIAL
  {
    id: 'commercial-001',
    title: 'UNIQLO SS24',
    category: ['COMMERCIAL'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2024',
    client: 'UNIQLO',
    description: 'Spring/Summer 2024 Campaign',
  },
  {
    id: 'commercial-002',
    title: 'Toyota Crown',
    category: ['COMMERCIAL'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2024',
    client: 'Toyota',
    description: 'New Crown launch campaign',
  },
  {
    id: 'commercial-003',
    title: 'Shiseido Beauty',
    category: ['COMMERCIAL'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2023',
    client: 'Shiseido',
    description: 'Beauty campaign',
  },
  {
    id: 'commercial-004',
    title: 'Muji Living',
    category: ['COMMERCIAL'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2023',
    client: 'MUJI',
    description: 'Minimal living campaign',
  },
  // MV
  {
    id: 'mv-001',
    title: 'Kenshi Yonezu - LADY',
    category: ['MV'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2024',
    client: 'Kenshi Yonezu',
    description: 'Music video',
  },
  {
    id: 'mv-002',
    title: 'YOASOBI - Idol',
    category: ['MV'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2023',
    client: 'YOASOBI',
    description: 'Animated music video',
  },
  {
    id: 'mv-003',
    title: 'King Gnu - SPECIALZ',
    category: ['MV'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2023',
    client: 'King Gnu',
    description: 'Cinematic visual narrative',
  },
  // JAMES WEBB
  {
    id: 'jameswebb-001',
    title: 'Nocturne',
    category: ['JAMES WEBB'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2024',
    client: 'JAMES WEBB',
    description: 'Light and darkness in the cosmos',
  },
  {
    id: 'jameswebb-002',
    title: 'Deep Field',
    category: ['JAMES WEBB'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2024',
    client: 'JAMES WEBB',
    description: 'Journey through the infinite',
  },
  {
    id: 'jameswebb-003',
    title: 'Pillars of Creation',
    category: ['JAMES WEBB'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2023',
    client: 'JAMES WEBB',
    description: 'Birth of stars',
  },
  {
    id: 'jameswebb-004',
    title: 'Event Horizon',
    category: ['JAMES WEBB'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2023',
    client: 'JAMES WEBB',
    description: 'Edge of the unknown',
  },
  {
    id: 'jameswebb-005',
    title: 'Stellar Nursery',
    category: ['JAMES WEBB'],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80',
      width: 800,
      height: 600,
    },
    year: '2024',
    client: 'JAMES WEBB',
    description: 'Where stars are born',
  },
]

// Helper to get projects with fallback
export async function getProjectsWithFallback(
  category?: Category
): Promise<Project[]> {
  // Check if CMS is configured
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    console.log('Using fallback data (CMS not configured)')
    if (category) {
      return FALLBACK_PROJECTS.filter((p) => p.category.includes(category))
    }
    return FALLBACK_PROJECTS
  }

  const projects = await getProjects(category)

  // Use fallback if CMS returns empty
  if (projects.length === 0) {
    console.log('Using fallback data (CMS returned empty)')
    if (category) {
      return FALLBACK_PROJECTS.filter((p) => p.category.includes(category))
    }
    return FALLBACK_PROJECTS
  }

  return projects
}
