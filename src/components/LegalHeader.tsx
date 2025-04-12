import Link from 'next/link';

interface LegalHeaderProps {
  title: string;
}

export default function LegalHeader({ title }: LegalHeaderProps) {
  return (
    <header className="bg-background py-4 text-center border-b border-border">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-block mb-4">
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="logo" className="size-16 fill-foreground" />
          </div>
        </Link>
        
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      </div>
    </header>
  );
} 