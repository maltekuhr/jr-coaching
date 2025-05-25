'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const FITNESS_GOALS = [
  "Mehr Energie im Alltag",
  "Muskelaufbau", 
  "Fettreduktion",
  "Ausdauer steigern",
  "anderes Ziel",
]

export const ContactSection = () => {
  const [name, setName] = useState("")
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  
  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal) 
        : [...prev, goal]
    )
  }

  const generateWhatsAppLink = () => {
    if (!name.trim() || selectedGoals.length === 0) {
      return '#'
    }
    
    const message = `Hallo John 👋. Ich bin ${name.trim()} und interessiere mich für ein Personal Training mit Fokus auf ${selectedGoals.join(', ')}. Können wir uns darüber unterhalten?`

    return `https://api.whatsapp.com/send/?phone=+491602221298&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      alert("Bitte gib deinen Namen ein")
      return
    }
    if (selectedGoals.length === 0) {
      alert("Bitte wähle mindestens ein Fitnessziel aus")
      return
    }
    window.open(generateWhatsAppLink(), '_blank')
  }

  return (
    <div id="contact-section">
      <h3 className="text-2xl font-bold mb-2 text-center">Wähle, was zu dir passt!</h3>
      <p className="text-lg mb-6 text-center text-muted-foreground">Kontaktiere mich für dein persönliches Training</p>
      <Card className="max-w-md mx-auto bg-card border-border text-card-foreground shadow-lg relative">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Dein Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Wie heißt du?"
                required
              />
            </div>
            
            <div className="space-y-3">
              <Label>
                Fitnessziel auswählen
              </Label>
              <div className="grid gap-2">
                {FITNESS_GOALS.map((goal) => (
                  <div 
                    key={goal} 
                    onClick={() => handleGoalToggle(goal)}
                    className={cn(
                      "cursor-pointer rounded-lg p-2 border",
                      selectedGoals.includes(goal) 
                        ? "border-primary ring-1 ring-primary bg-primary/5" 
                        : "border-border"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{goal}</span>
                      {selectedGoals.includes(goal) && (
                        <CheckIcon className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-xl text-lg py-5 font-bold hover:bg-primary/90 tracking-widest uppercase"
                disabled={!name.trim() || selectedGoals.length === 0}
            >
              Jetzt kontaktieren
            </Button>
          {(name.trim() === '' || selectedGoals.length === 0) && (
            <p className="absolute bottom-2 inset-x-0 text-xs text-muted-foreground text-center">
              {name.trim() === '' && selectedGoals.length === 0 
                ? 'Bitte gib deinen Namen ein und wähle ein Fitnessziel aus'
                : name.trim() === '' 
                  ? 'Bitte gib deinen Namen ein'
                  : 'Bitte wähle mindestens ein Fitnessziel aus'}
            </p>
          )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 