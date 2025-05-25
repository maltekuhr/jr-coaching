'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const AboutSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Dein Coach</h2>
      
      <div className="flex flex-col sm:flex-row sm:gap-12 sm:mb-12 items-center justify-center">
        {/* Image - Full width on mobile, left side on desktop */}
        <div className="relative w-1/2 aspect-square mb-6 md:mb-0 rounded-full overflow-hidden shadow-xl shadow-foreground/20 border-4">
          <Image 
            src="/john.jpg" 
            alt="John Reinhardt" 
            fill 
            style={{ objectFit: 'cover' }}
            className="rounded-full w-full h-full"
          />
        </div>
        
        {/* Text content - Full width on mobile, right side on desktop */}
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            Fitness-Coach mit einem Bachelor in Fitnessökonomie und mehreren Jahren Erfahrung im Personal Training und Online-Coaching.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Bachelor in Fitnessökonomie</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Personal Trainer</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Online-Coach</span>
            </li>
          </ul>
        </div>
      </div>
    
      {/* Philosophy section - Below both on all screen sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-4 mt-8">Meine Philosophie</h3>
        <p className="text-lg mb-4">
          Mein Ziel ist es, individuelle und alltagstaugliche Trainings- und Ernährungsstrategien zu entwickeln, die nachhaltige Erfolge bringen – ohne unnötige Einschränkungen oder Verzicht.
        </p>
        <p className="text-lg mb-4">
          Ob Muskelaufbau, Fettabbau oder mehr Fitness – mit 1:1 Personal Training oder flexiblem Online-Coaching begleite ich dich auf deinem Weg.
        </p>
        <p className="text-lg">
          Mein Ziel ist es, Sie nicht nur zu trainieren, sondern Sie auch zu inspirieren und zu befähigen, ein gesünderes und aktiveres Leben zu führen.
        </p>
      </div>
    </section>
  )
} 