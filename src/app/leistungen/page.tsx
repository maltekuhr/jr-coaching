import { Header } from "@/components/Header";

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
            Dann ist mein individuelles Coaching die perfekte Wahl für dich!
          </p>
        </div>

        {/* Online Coaching Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Online-Fitness-Coaching
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Individuell & flexibel – echte persönliche Begleitung, abgestimmt auf deine Bedürfnisse. 
              Du entscheidest wann und wo!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Flex Coaching Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Option 1: Flex Coaching</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold">39,90 €</span>
                  <span className="text-primary-foreground/80">/ Monat</span>
                </div>
                <p className="text-primary-foreground/80 mt-2">Monatlich kündbar</p>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Volle Flexibilität ohne langfristige Bindung – ideal zum Ausprobieren oder 
                  um unabhängig zu bleiben.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Individueller Trainingsplan:</strong> Basierend auf deinem Ziel und deinen Möglichkeiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Angepasster Ernährungsplan:</strong> Auf deinen Alltag und Vorlieben abgestimmt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Wöchentlicher Check-in:</strong> Kurze Updates per App</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>2x monatlich Video-Call:</strong> Fortschrittsbesprechung & Plananpassung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Coaching-App:</strong> Übersichtliche Darstellung deiner Pläne & Fortschritte</span>
                  </li>
                </ul>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Flex Coaching wählen
                </button>
              </div>
            </div>

            {/* Pro Coaching Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Beliebt
              </div>
              
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Option 2: Pro Coaching</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold">29,90 €</span>
                  <span className="text-primary-foreground/80">/ Monat</span>
                </div>
                <p className="text-primary-foreground/80 mt-2">3 Monate Laufzeit</p>
                <p className="text-sm text-primary-foreground/80 mt-1">Du sparst 10 € pro Monat!</p>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Perfekt für nachhaltigen Erfolg. Drei Monate sind ideal, um Fortschritte zu erzielen 
                  und dauerhafte Routinen zu etablieren.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Individueller Trainingsplan:</strong> Basierend auf deinem Ziel und deinen Möglichkeiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Angepasster Ernährungsplan:</strong> Auf deinen Alltag und Vorlieben abgestimmt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Wöchentlicher Check-in:</strong> Kurze Updates per App</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>2x monatlich Video-Call:</strong> Fortschrittsbesprechung & Plananpassung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Coaching-App:</strong> Übersichtliche Darstellung deiner Pläne & Fortschritte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Langfristige Planung:</strong> 12-Wochen-Plan für zielgerichtete Fortschritte</span>
                  </li>
                </ul>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Pro Coaching wählen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Training Section */}
        <section>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Personal Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Direkt, individuell & persönlich – intensiv an deiner Technik arbeiten mit einem 
              Trainingskonzept, das genau auf dich zugeschnitten ist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Einzeltraining Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="bg-secondary text-foreground p-6 border-b border-border">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Option 1: Einzeltraining</h3>
                <p className="text-muted-foreground">Eine Trainingseinheit</p>
                <p className="text-sm text-muted-foreground mt-2">Individuelle Preisgestaltung</p>
              </div>
              
              <div className="p-6">
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
                
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Einzeltraining buchen
                </button>
              </div>
            </div>

            {/* Intensiv Paket Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="bg-secondary text-foreground p-6 border-b border-border">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Option 2: Intensiv Paket</h3>
                <p className="text-muted-foreground">Vier Trainingseinheiten</p>
                <p className="text-sm text-muted-foreground mt-2">Individuelle Preisgestaltung</p>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Vier Einheiten für spürbare Fortschritte und nachhaltige Ergebnisse. 
                  Dein persönlicher Trainingsfahrplan mit kontinuierlicher Betreuung.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Vier exklusive Einheiten:</strong> Persönliches Coaching über vier Termine hinweg</span>
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
                    <span className="text-card-foreground"><strong>Fortschrittsbegleitung:</strong> Schrittweise Anpassung der Übungen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Nachhaltige Erfolge:</strong> Verbesserung von Technik, Haltung und Leistung</span>
                  </li>
                </ul>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Intensiv Paket buchen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 bg-secondary rounded-2xl p-8 sm:p-12 border border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Bereit für deine Transformation?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lass uns in einem unverbindlichen Erstgespräch herausfinden, 
            welche Option am besten zu dir und deinen Zielen passt.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Kostenloses Erstgespräch vereinbaren
          </button>
        </div>
      </main>
    </>
  );
} 