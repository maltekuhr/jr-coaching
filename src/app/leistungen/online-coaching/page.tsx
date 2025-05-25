import { Header } from "@/components/Header";

export default function OnlineCoachingPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background text-foreground">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Online-Fitness-Coaching
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Individuell & flexibel – echte persönliche Begleitung, abgestimmt auf deine Bedürfnisse. 
            Du entscheidest wann und wo!
          </p>
        </div>

        {/* Online Coaching Plans */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Wähle dein Coaching-Paket
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zwei maßgeschneiderte Optionen für deinen individuellen Weg zum Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Flex Coaching Card */}
            <div className="bg-card relative flex flex-col rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Flex Coaching</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold">39,90 €</span>
                  <span className="text-primary-foreground/80">/ Monat</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
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
                
                <button className="w-full bg-primary mt-auto hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Flex Coaching wählen
                </button>
              </div>
            </div>

            {/* Pro Coaching Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-primary transition-all duration-300 relative">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Pro Coaching</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold">29,90 €</span>
                  <span className="text-primary-foreground/80">/ Monat</span>
                </div>
              </div>
              <div className="absolute top-6 -right-14 w-52 rotate-45 py-2 bg-background text-foreground rounded-none text-center uppercase tracking-wide font-bold">
                Beliebt
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
                <p className="absolute bottom-1 left-0 right-0 text-foreground/60 text-center text-xs">(3 Monate Mindestvertragslaufzeit)</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              So funktioniert's
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Kennenlernen</h3>
              <p className="text-muted-foreground">Kostenloses Erstgespräch zur Analyse deiner Ziele und aktuellen Situation.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Individueller Plan</h3>
              <p className="text-muted-foreground">Erstellung deines persönlichen Trainings- und Ernährungsplans basierend auf deinen Bedürfnissen.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Kontinuierliche Betreuung</h3>
              <p className="text-muted-foreground">Regelmäßige Check-ins und Anpassungen für nachhaltigen Erfolg.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 bg-foreground/10 rounded-2xl p-8 sm:p-12 border border-border">
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