import { Header } from "@/components/Header"
import { AboutSection } from "./components/about-section"
import { ContactSection } from "./components/contact-section"
import { TransformationSection } from "./components/transformation-section"

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-8 overflow-hidden">
        <TransformationSection />
        
        <AboutSection />
        
        <ContactSection />
      </main>
    </>
  )
}
