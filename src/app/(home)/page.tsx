import { Header } from "@/components/Header"
import { AboutSection } from "./components/about-section"
import { ContactSection } from "./components/contact-section"
import { TransformationSection } from "./components/transformation-section"
import { GoogleReviewsSection } from "./components/google-reviews-section"

export default function Page() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div className="max-w-3xl mx-auto px-8">
          <TransformationSection />
        </div>
        
        <div className="max-w-3xl mx-auto px-8">
          <AboutSection />
        </div>
        
        <div className="max-w-3xl mx-auto px-8 bg-foreground/10">
          <GoogleReviewsSection />
        </div>
        
        <div className="max-w-3xl mx-auto px-8">
          <ContactSection />
        </div>
      </main>
    </>
  )
}
