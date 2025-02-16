import { Header } from "@/components/Header"
import { ContactForm } from "@/components/ContactForm"

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Willkommen bei Personal Training</h2>
        <p className="text-lg mb-4">
          Ich biete professionelles Personal Training an, das auf Ihre individuellen Bedürfnisse und Ziele zugeschnitten ist.
        </p>
        <p className="text-lg mb-12">
          Mit meiner Erfahrung und Expertise helfe ich Ihnen dabei, Ihre Fitnessziele zu erreichen und dauerhaft fit und gesund zu bleiben.
        </p>
        
        <div className="py-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Kontaktiere mich für dein persönliches Training</h3>
          <ContactForm />
        </div>
      </main>
    </>
  )
}
