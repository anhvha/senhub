import {
  HeroSection,
  ValuePropositionSection,
  SimpleSection,
  CatalogSection,
  HowItWorksSection,
  FAQSection,
  CTASection,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <SimpleSection />
      <CatalogSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
