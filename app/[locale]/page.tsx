import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CertificationsSection } from "@/components/certifications-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <CertificationsSection />
          <FeaturesSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
