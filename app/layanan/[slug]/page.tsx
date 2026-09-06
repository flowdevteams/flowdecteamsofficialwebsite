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
      title: "Layanan Tidak Ditemukan",
      description: "Halaman layanan yang Anda cari tidak ditemukan.",
    }
  }

  const seoTitle = service.seoTitle || service.title

  return {
    title: seoTitle,
    description: service.summary,
    alternates: {
      canonical: `https://www.flowdevteams.com/layanan/${service.slug}`,
    },
    openGraph: {
      title: `${seoTitle} | Flowdev Teams`,
      description: service.summary,
      url: `https://www.flowdevteams.com/layanan/${service.slug}`,
      siteName: "Flowdev Teams",
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | Flowdev Teams`,
      description: service.summary,
    },
  }
}

export default async function ServiceCategoryPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    provider: {
      "@type": "ProfessionalService",
      name: "Flowdev Teams",
      url: "https://www.flowdevteams.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    description: service.summary,
    url: `https://www.flowdevteams.com/layanan/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.badgeText,
      itemListElement: service.deliverables.map((item, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
        position: index + 1,
      })),
    },
  }

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navigation />
      <main className="min-h-screen pt-20">
        <ServiceDetailView service={service} />
      </main>
      <Footer />
    </>
  )
}
