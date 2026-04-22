import Hero from '@/components/sections/hero'
import StatsTrust from '@/components/sections/stats-trust'
import ServicesOverview from '@/components/sections/services-overview'
import WhyChooseUs from '@/components/sections/why-choose-us'
import PortfolioPreview from '@/components/sections/portfolio-preview'
import Testimonials from '@/components/sections/testimonials'
import CTASection from '@/components/sections/cta-section'
import ProductsPreview from '@/components/sections/products-preview'

export default function Home() {
  return (
    <>
      <Hero      />
      <StatsTrust />
      <ServicesOverview />
      <ProductsPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
