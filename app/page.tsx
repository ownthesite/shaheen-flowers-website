import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Hero from '@/components/sections/hero'
import StatsTrust from '@/components/sections/stats-trust'
import ServicesOverview from '@/components/sections/services-overview'
import WhyChooseUs from '@/components/sections/why-choose-us'
import PortfolioPreview from '@/components/sections/portfolio-preview'
import Testimonials from '@/components/sections/testimonials'
import CTASection from '@/components/sections/cta-section'
import ProductsPreview from '@/components/sections/products-preview'

export const metadata: Metadata = pageMetadata.home

export default function Home() {
  return (
    <>
      <Hero />
      <StatsTrust />
      <ServicesOverview />
      <ProductsPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CTASection
        title="Talk to Our Team Today"
        description="Whether you need landscaping with AMC, indoor plant maintenance, or a green wall installation — we are here to help. Reach out for a free consultation."
      />
    </>
  )
}
