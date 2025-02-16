'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

const FITNESS_GOALS = [
  "Gewichtabnehmen",
  "Muskelaufbau",
  "Allgemeine Fitness",
  "Kraft",
  "Ausdauer",
]

export function ContactForm() {
  const [name, setName] = useState("")
  const [goal, setGoal] = useState(FITNESS_GOALS[0])

  const generateWhatsAppLink = () => {
    if (!name.trim()) {
      return '#'
    }
    
    const message = `Hallo John 👋. Ich bin ${name.trim()} und interessiere mich für ein Personal Training mit Fokus auf ${goal}. Können wir uns darüber unterhalten?`

    return `https://api.whatsapp.com/send/?phone=+491602221298&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      alert("Bitte gib deinen Namen ein")
      return
    }
    window.open(generateWhatsAppLink(), '_blank')
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg text-black">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Dein Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
            placeholder="Wie heißt du?"
          />
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
            Dein Fitnessziel
          </label>
          <select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {FITNESS_GOALS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <Button 
          type="submit"
          className="w-full bg-primary text-primary-foreground rounded-xl text-lg py-5 font-bold hover:bg-primary/90 tracking-widest uppercase"
        >
          Via WhatsApp kontaktieren
        </Button>
      </form>
    </div>
  )
} 