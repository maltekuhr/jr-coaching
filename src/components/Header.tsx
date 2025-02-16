import { Button } from "@/components/ui/button"
import { ScrollingBanner } from "@/components/ScrollingBanner"

export function Header() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Full-width background container */}
        <div className="absolute inset-0 flex justify-center">
          {/* Max-width background wrapper */}
          <div className="relative w-full max-w-7xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
              style={{
                backgroundImage: `linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%),
                               url("/background.jpg")`,
              }}
            />
            {/* Overlay for side fades - only on md and up */}
            <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black to-transparent hidden md:block" />
          </div>
        </div>

        {/* Container for content */}
        <div className="max-w-7xl mx-auto relative h-full">
          <div className="relative z-10 h-full">
            {/* Logo Section */}
            <header className="flex items-center justify-center p-4 bg-gradient-to-b from-black to-transparent">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="logo" className="size-16 fill-white" />
              </div>
            </header>

            {/* Scrolling Banner */}
            <div className="absolute bottom-0 w-full">
              <ScrollingBanner />
            </div>

            {/* Main Content */}
            <main className="pb-44 pt-10 px-8">
              <div className="max-w-xl space-y-4">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  DEIN TRAUM
                  <br />
                  MEIN PLAN
                  <br />
                  UNSER WEG
                </h1>

                <p className="text-sm text-background/80">
                  Erreiche deine Fitnessziele mit maßgeschneidertem <b>Personal Training</b>!
                  Profitiere von individueller Betreuung, effektiven Trainingsplänen, optimal abgestimmten Ernährungsstrategien und meiner fachlichen Expertise!
                </p>

                <div className="space-y-4 pt-4 grid">
                  <Button className="w-full bg-primary text-primary-foreground rounded-xl text-lg py-5 font-bold hover:bg-primary/90 tracking-widest uppercase">
                    Jetzt anfragen
                  </Button>
                  <Button className="text-lg py-5 font-bold bg-transparent rounded-xl border-white border-2 tracking-widest uppercase hover:bg-white/10 focus-visible:text-white">
                    Mehr erfahren
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
} 