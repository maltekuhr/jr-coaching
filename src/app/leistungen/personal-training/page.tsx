import { Header } from "@/components/Header";

export default function PersonalTrainingPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background text-foreground">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Personal Training
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Direkt, individuell & persönlich – intensiv an deiner Technik arbeiten mit einem 
            Trainingskonzept, das genau auf dich zugeschnitten ist.
          </p>
        </div>

        {/* Personal Training Options */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Persönliche Betreuung vor Ort
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wähle zwischen flexiblen Einzelstunden oder regelmäßiger Betreuung für maximalen Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Einzeltraining Card */}
            <div className="bg-card flex flex-col rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="bg-foreground/10 text-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Einzeltraining</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground/80">Individuelle Preisgestaltung</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  Eine persönliche Trainingseinheit für gezielte Impulse und Technik-Feinschliff. 
                  Ideal zum Einstieg oder zur punktuellen Optimierung.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Exklusive 1:1-Betreuung:</strong> Individuell abgestimmte Trainingseinheit nur für dich</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Für jedes Fitnesslevel:</strong> Ideal für Einsteiger oder Wiedereinstieg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Technikanalyse:</strong> Analyse deiner Bewegungen und Übungsauswahl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Verletzungsprävention:</strong> Saubere Ausführung minimiert Risiken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Nachbesprechung:</strong> Auswertung und weitere Planung</span>
                  </li>
                </ul>
                
                <button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Einzeltraining buchen
                </button>
              </div>
            </div>

            {/* Personal Training Paket Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-primary transition-all duration-300 relative">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Personal Training Paket</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold">ab 280 €</span>
                  <span className="text-primary-foreground/80">/ 4 Sessions</span>
                </div>
              </div>
              <div className="absolute top-6 -right-14 w-52 rotate-45 py-2 bg-background text-foreground rounded-none text-center uppercase tracking-wide font-bold">
                Empfohlen
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  Regelmäßige persönliche Betreuung für nachhaltigen Fortschritt. 
                  Ideal für spezifische Ziele und langfristige Entwicklung.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>4 persönliche Sessions:</strong> Flexibel planbar über 6 Wochen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Progressives Training:</strong> Aufbauendes Konzept für optimale Fortschritte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Komplette Bewegungsanalyse:</strong> Detaillierte Technikoptimierung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Trainingsplan für Zuhause:</strong> Ergänzende Übungen zwischen den Sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>WhatsApp-Support:</strong> Fragen zwischen den Terminen inklusive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Abschlussevaluation:</strong> Bewertung der Fortschritte und Zukunftsplanung</span>
                  </li>
                </ul>
                
                <button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Paket buchen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Training Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Spezialisierte Trainingsformen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fokussierte Programme für spezielle Bedürfnisse und Ziele
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Funktionelles Training</h3>
              <p className="text-muted-foreground mb-4">Bewegungen für den Alltag - stärke deinen Körper für reale Situationen und verbessere deine Mobilität.</p>
              <button className="w-full bg-foreground/10 hover:bg-primary/10 text-foreground font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Mehr erfahren
              </button>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Rehabilitation & Prävention</h3>
              <p className="text-muted-foreground mb-4">Gezieltes Training nach Verletzungen oder zur Vorbeugung von Beschwerden und Schmerzen.</p>
              <button className="w-full bg-foreground/10 hover:bg-primary/10 text-foreground font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Mehr erfahren
              </button>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Wettkampfvorbereitung</h3>
              <p className="text-muted-foreground mb-4">Spezifisches Training für Sportler zur optimalen Vorbereitung auf Wettkämpfe und Events.</p>
              <button className="w-full bg-foreground/10 hover:bg-primary/10 text-foreground font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Mehr erfahren
              </button>
            </div>
          </div>
        </section>

        {/* Location & Equipment Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Flexibel an jedem Ort
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">In deinem Studio</h3>
              <p className="text-muted-foreground">Nutze die Geräte deines Fitnessstudios optimal und lerne neue Übungen kennen.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Bei dir Zuhause</h3>
              <p className="text-muted-foreground">Equipment wird mitgebracht - trainiere bequem in deinen eigenen vier Wänden.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 bg-foreground/10 rounded-2xl p-8 sm:p-12 border border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Bereit für persönliche Betreuung?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lass uns in einem kostenlosen Vorgespräch herausfinden, 
            wie Personal Training dir zu deinen Zielen verhelfen kann.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Kostenloses Beratungsgespräch
          </button>
        </div>
      </main>
    </>
  );
} 