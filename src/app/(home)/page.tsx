import { Header } from "@/components/Header"
import { AboutSection } from "./components/about-section"
import { ContactSection } from "./components/contact-section"
import { TransformationSection } from "./components/transformation-section"

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-8 pt-16">
        <h2 className="text-3xl font-bold mb-8">Willkommen bei Personal Training</h2>
        <p className="text-lg mb-4">
          Ich biete professionelles Personal Training an, das auf Ihre individuellen Bedürfnisse und Ziele zugeschnitten ist.
        </p>
        <p className="text-lg mb-12">
          Mit meiner Erfahrung und Expertise helfe ich Ihnen dabei, Ihre Fitnessziele zu erreichen und dauerhaft fit und gesund zu bleiben.
        </p>
        
        <AboutSection />
        
        <TransformationSection />
        
        <ContactSection />
      </main>
    </>
  )
}
