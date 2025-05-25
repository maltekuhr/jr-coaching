import { Header } from "@/components/Header";

export default function FirmenfitnesPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background text-foreground">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Firmenfitness
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gesunde und motivierte Mitarbeiter sind das Fundament eines erfolgreichen Unternehmens. 
            Mit unserem betrieblichen Gesundheitsmanagement fördern Sie die Gesundheit Ihres Teams nachhaltig.
          </p>
        </div>

        {/* Firmenfitness Services */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Unsere Firmenfitness-Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maßgeschneiderte Fitness- und Gesundheitsprogramme für Ihr Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Corporate Wellness Card */}
            <div className="bg-card relative flex flex-col rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Betriebliche Gesundheitsförderung</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-primary-foreground/80">Auf Anfrage</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  Ganzheitliches Gesundheitsprogramm für Ihr gesamtes Team mit regelmäßigen 
                  Gesundheits-Workshops und Fitness-Sessions.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Gesundheits-Check-ups:</strong> Regelmäßige Analyse des Fitnessstands Ihrer Mitarbeiter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Gruppen-Workouts:</strong> Motivierende Trainingseinheiten für das ganze Team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Ergonomie-Beratung:</strong> Arbeitsplatzoptimierung für bessere Gesundheit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Ernährungs-Workshops:</strong> Gesunde Ernährung im Arbeitsalltag</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Stressmanagement:</strong> Techniken zur Stressreduzierung und Work-Life-Balance</span>
                  </li>
                </ul>
                
                <button className="w-full bg-primary mt-auto hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Beratungstermin vereinbaren
                </button>
              </div>
            </div>

            {/* On-Site Training Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300">
              <div className="bg-foreground/10 text-foreground p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Firmenfitness vor Ort</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground/80">Individuell kalkuliert</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <p className="text-muted-foreground mb-6">
                  Professionelle Trainingseinheiten direkt in Ihren Räumlichkeiten - 
                  flexibel, effizient und teambildend.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Flexible Terminplanung:</strong> Angepasst an Ihre Arbeitszeiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Equipment inklusive:</strong> Wir bringen alle nötigen Trainingsgeräte mit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Teambuilding-Effekt:</strong> Gemeinsam trainieren stärkt den Zusammenhalt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Verschiedene Formate:</strong> Von Yoga bis HIIT - für jeden etwas dabei</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-card-foreground"><strong>Langfristige Betreuung:</strong> Aufbau nachhaltiger Gesundheitsroutinen</span>
                  </li>
                </ul>
                
                <button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Angebot anfragen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Vorteile für Ihr Unternehmen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Weniger Krankheitstage</h3>
              <p className="text-muted-foreground">Gesunde Mitarbeiter sind seltener krank und produktiver im Arbeitsalltag.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Höhere Motivation</h3>
              <p className="text-muted-foreground">Fitness-Programme steigern die Motivation und das Wohlbefinden Ihrer Teams.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Bessere Teamdynamik</h3>
              <p className="text-muted-foreground">Gemeinsame Aktivitäten fördern den Zusammenhalt und die Kommunikation.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 bg-foreground/10 rounded-2xl p-8 sm:p-12 border border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Investieren Sie in die Gesundheit Ihres Teams
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam ein maßgeschneidertes Gesundheitsprogramm für 
            Ihr Unternehmen entwickeln. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Kostenlose Beratung anfragen
          </button>
        </div>
      </main>
    </>
  );
} 