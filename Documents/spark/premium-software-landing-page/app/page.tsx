import { HeroSection } from "@/components/hero-section"
import { TrustStrip } from "@/components/trust-strip"
import { ServicesPreview } from "@/components/services-preview"
import { FeaturedWork } from "@/components/featured-work"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FinalCta } from "@/components/final-cta"

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedWork />
      <WhyChooseUs />
      <FinalCta />
    </main>
  )
}
