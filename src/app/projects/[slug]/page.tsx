import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import ProjectDetail from '@/components/ProjectDetail'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — built by rosa`,
    description: project.tagline.pt,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return <ProjectDetail project={project} />
}
