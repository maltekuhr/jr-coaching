import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-muted-foreground py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-6 mb-3 md:mb-0">
          <Link href="/impressum" className="hover:text-foreground transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-foreground transition-colors">
            Datenschutz
          </Link>
        </div>
        <div className="text-sm">
          &copy; {currentYear} John Reinhardt. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;