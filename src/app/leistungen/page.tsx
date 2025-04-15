import { Header } from "@/components/Header";

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Leistungen</h1>
        
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Persönliches Training</h2>
            <p className="text-lg mb-4">
              Individuell abgestimmtes 1:1 Training mit professioneller Betreuung. 
              Ideal für alle, die maximale Ergebnisse in minimaler Zeit erzielen möchten.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Individuelle Trainingsplanung</li>
              <li>Kontinuierliche Technikkorrektur</li>
              <li>Regelmäßige Fortschrittskontrolle</li>
              <li>Flexible Terminplanung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Online Coaching</h2>
            <p className="text-lg mb-4">
              Flexibles Training mit professioneller Betreuung aus der Ferne. 
              Perfekt für selbstständige Trainierende mit vollem Terminkalender.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maßgeschneiderte Trainingspläne</li>
              <li>Ernährungsberatung</li>
              <li>Regelmäßige Anpassungen</li>
              <li>Kontinuierliche Unterstützung per Chat</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Ernährungsberatung</h2>
            <p className="text-lg mb-4">
              Professionelle Ernährungsberatung für optimale Ergebnisse. 
              Die ideale Ergänzung zu Ihrem Trainingsprogramm.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ausführliche Ernährungsanalyse</li>
              <li>Individuelle Ernährungspläne</li>
              <li>Anpassung an Lebensstil und Vorlieben</li>
              <li>Regelmäßige Fortschrittsbesprechungen</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
} 