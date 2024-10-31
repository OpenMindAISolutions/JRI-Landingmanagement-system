import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TransitionSection } from "@/components/sections/TransitionSection"
import { IntegrationSection } from "@/components/sections/IntegrationSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ResourcesSection } from "@/components/sections/ResourcesSection"
import { CTASection } from "@/components/sections/CTASection"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fe]">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TransitionSection />
      <IntegrationSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </div>
  )
}