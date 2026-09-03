import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { servicesData, getServiceBySlug } from "@/lib/services-data"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  
  servicesData.forEach((service) => {
    params.push({ slug: service.slug })
    if (service.aliases) {
      service.aliases.forEach((alias) => {
        params.push({ slug: alias })
      })
    }
  })

  return params
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan | Flowdev Teams",
      description: "Halaman layanan yang Anda cari tidak ditemukan.",
    }
  }

  return {
    title: `${service.title} | Flowdev Teams`,
    description: service.summary,
    alternates: {
      canonical: `/layanan/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - Flowdev Teams`,
      description: service.summary,
      url: `https://flowdevteams.com/layanan/${service.slug}`,
      siteName: "Flowdev Teams",
      locale: "id_ID",
      type: "website",
    },
  }
}

export default async function ServiceCategoryPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <ServiceDetailView service={service} />
      </main>
      <Footer />
    </>
  )
}
