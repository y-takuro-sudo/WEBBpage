import Layout from '@/components/Layout'
import { getProjectsWithFallback } from '@/libs/microcms'

// ISR - revalidate every 60 seconds
export const revalidate = 60

export default async function Home() {
  const projects = await getProjectsWithFallback()

  return <Layout projects={projects} />
}
