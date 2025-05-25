import { Header } from "@/components/Header";
import Link from "next/link";

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background text-foreground">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Wähle, was zu dir passt!
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Du möchtest deine Fitnessziele erreichen, brauchst aber ein Coaching, das in deinen Alltag passt? 
            Entdecke die verschiedenen Möglichkeiten, wie ich dir helfen kann!
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Unsere Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drei verschiedene Ansätze für deine individuelle Fitness-Journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Online Coaching Card */}
            <div className="bg-card relative flex flex-col rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Online Coaching</h3>
                <p className="text-primary-foreground/90">Flexibel & individuell</p>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  Individuelles Training und Ernährung - wo und wann du willst. 
                  Persönliche Betreuung per App und Video-Calls.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Individuelle Trainings- & Ernährungspläne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Wöchentliche Check-ins & Video-Calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Coaching-App für alle Pläne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Ab 29,90€ / Monat</span>
                  </div>
                </div>
                
                <Link href="/leistungen/online-coaching" className="w-full bg-primary mt-auto hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center block group-hover:bg-primary/90">
                  Online Coaching entdecken
                </Link>
              </div>
            </div>

            {/* Personal Training Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group">
              <div className="bg-foreground/10 text-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Personal Training</h3>
                <p className="text-foreground/90">Direkt & persönlich</p>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  1:1 Training vor Ort - bei dir Zuhause oder im Studio. 
                  Intensive Betreuung für maximale Fortschritte.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Exklusive 1:1 Betreuung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Technikanalyse & Optimierung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Flexible Termine vor Ort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Individuelle Preisgestaltung</span>
                  </div>
                </div>
                
                <Link href="/leistungen/personal-training" className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center block group-hover:bg-primary/90">
                  Personal Training buchen
                </Link>
              </div>
            </div>

            {/* Firmenfitness Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Firmenfitness</h3>
                <p className="text-primary-foreground/90">Betriebsgesundheit</p>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  Betriebliches Gesundheitsmanagement für Unternehmen. 
                  Gesunde Teams, höhere Produktivität.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Corporate Wellness Programme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Vor-Ort Training für Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Gesundheits-Workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground">Maßgeschneiderte Konzepte</span>
                  </div>
                </div>
                
                <Link href="/leistungen/firmenfitness" className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center block group-hover:bg-primary/90">
                  Firmenfitness erkunden
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Warum bei uns?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Individuelle Betreuung</h3>
              <p className="text-muted-foreground">Jeder Plan wird speziell für dich und deine Ziele entwickelt - keine Standardlösungen.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Nachhaltige Erfolge</h3>
              <p className="text-muted-foreground">Wir setzen auf langfristige Gewohnheitsänderungen statt kurzfristige Diäten.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Flexible Lösungen</h3>
              <p className="text-muted-foreground">Ob online, vor Ort oder im Unternehmen - wir passen uns deinem Lifestyle an.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 bg-foreground/10 rounded-2xl p-8 sm:p-12 border border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Nicht sicher, was das Richtige für dich ist?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lass uns in einem unverbindlichen Erstgespräch herausfinden, 
            welche Option am besten zu dir und deinen Zielen passt.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Kostenloses Beratungsgespräch
          </button>
        </div>
      </main>
    </>
  );
} 