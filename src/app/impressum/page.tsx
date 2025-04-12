import LegalHeader from '@/components/LegalHeader';

export default function Impressum() {
  return (
    <>
      <LegalHeader title="Impressum" />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="mb-4">
            John Reinhardt<br />
            Street Name 123<br />
            12345 City<br />
            Germany
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
          <p className="mb-4">
            Telefon: +49 123 456789<br />
            E-Mail: info@yourcompany.com
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Steuerliche Hinweise</h2>
          <p className="mb-4">
            Kleinunternehmer gemäß § 19 UStG.<br />
            Umsatzsteuerbefreit nach Kleinunternehmerregelung.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="mb-4">
            John Reinhardt<br />
            Street Name 123<br />
            12345 City<br />
            Germany
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
          <p className="mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mb-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten 
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mb-4">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
            umgehend entfernen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mb-4">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </>
  );
} 