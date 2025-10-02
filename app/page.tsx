import { Suspense } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import LoadingSpinner from "@/components/ui/loading-spinner"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

// Dynamically import sections for better performance
import dynamic from "next/dynamic"

// Lazy load components with suspense fallbacks for better performance
const HeroSection = dynamic(() => import("@/components/hero/hero-section"), {
  loading: () => <LoadingSection height="100vh" />,
})
const AboutSection = dynamic(() => import("@/components/about/about-section"), {
  loading: () => <LoadingSection height="50vh" />,
})
const SkillsSection = dynamic(() => import("@/components/skills/skills-section"), {
  loading: () => <LoadingSection height="50vh" />,
})
const ExperienceSection = dynamic(() => import("@/components/experience/experience-section"), {
  loading: () => <LoadingSection height="50vh" />,
})
const CTASection = dynamic(() => import("@/components/contact/cta-section"), {
  loading: () => <LoadingSection height="30vh" />,
})

// Loading placeholder component
function LoadingSection({ height }: { height: string }) {
  return (
    <div className={`w-full flex items-center justify-center`} style={{ height }}>
      <LoadingSpinner size="lg" />
    </div>
  )
}

/**
 * Main page component that assembles all sections of the portfolio
 * Uses Suspense for better loading performance
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <Header />

      <Suspense fallback={<LoadingSection height="100vh" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingSection height="50vh" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<LoadingSection height="50vh" />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<LoadingSection height="50vh" />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<LoadingSection height="30vh" />}>
        <CTASection />
      </Suspense>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  )
}

