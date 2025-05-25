"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";

// Results Modal Component
function ResultsModal({ 
  open, 
  setOpen, 
  bmr, 
  calories,
  gender,
  weight
}: { 
  open: boolean; 
  setOpen: (open: boolean) => void; 
  bmr: number | null; 
  calories: number | null;
  gender: string;
  weight: string;
}) {
  const [goal, setGoal] = useState<"maintain" | "lose" | "gain">("maintain");
  
  if (!bmr || !calories) return null;
  
  const weightKg = parseFloat(weight);
  
  // Calculate goal-based calories
  const goalCalories = {
    maintain: calories,
    lose: calories - 400,
    gain: calories + 300
  }[goal];
  
  // Calculate macronutrients based on weight and gender
  // Fat: gender-specific (1.1g/kg for women, 0.85g/kg for men)
  // Protein: 2.5g per kg for everyone
  const fatPerKg = gender === "female" ? 1.1 : 0.85;
  const proteinPerKg = 2.5;
  
  const protein = Math.round(weightKg * proteinPerKg);
  const fat = Math.round(weightKg * fatPerKg);
  
  // Calculate protein and fat calories
  const proteinCalories = protein * 4.1; // 4 calories per gram
  const fatCalories = fat * 9.1;     // 9 calories per gram
  
  // Remaining calories go to carbs
  const carbCalories = Math.max(0, goalCalories - proteinCalories - fatCalories);
  const carbs = Math.round(carbCalories / 4); // 4 calories per gram
  
  // Calculate macronutrient percentages
  const proteinPercent = Math.round((proteinCalories / goalCalories) * 100);
  const fatPercent = Math.round((fatCalories / goalCalories) * 100);
  const carbPercent = 100 - proteinPercent - fatPercent;
  
  // Calculate percentages for the progress bar
  const percentages = {
    maintain: 100,
    lose: Math.round((goalCalories / calories) * 100),
    gain: Math.round((calories / goalCalories) * 100)
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-background w-[90vw] overflow-hidden rounded-lg px-0" style={{
        WebkitBoxShadow: "0px 0px 50px 16px hsl(var(--primary) / 20%)",
        boxShadow: "0px 0px 50px 16px hsl(var(--primary) / 40%)"
      }}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Dein Kalorienbedarf</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          
          <div className="space-y-2 px-4">
            <Label>Wähle Dein Ziel aus:</Label>
            <RadioGroup 
              value={goal} 
              onValueChange={(value) => setGoal(value as "maintain" | "lose" | "gain")} 
              className="flex flex-col gap-2 mt-2"
            >
              <div 
                className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer transition-all ${goal === "maintain" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
                onClick={() => setGoal("maintain")}
              >
                <RadioGroupItem value="maintain" id="maintain" className="sr-only" />
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⚖️</div>
                  <Label htmlFor="maintain" className="cursor-pointer">
                    <div className="font-medium">Gewicht halten</div>
                  </Label>
                </div>
              </div>
              <div 
                className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer transition-all ${goal === "lose" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
                onClick={() => setGoal("lose")}
              >
                <RadioGroupItem value="lose" id="lose" className="sr-only" />
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🪶</div>
                  <Label htmlFor="lose" className="cursor-pointer">
                    <div className="font-medium">Abnehmen</div>
                  </Label>
                </div>
              </div>
              <div 
                className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer transition-all ${goal === "gain" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
                onClick={() => setGoal("gain")}
              >
                <RadioGroupItem value="gain" id="gain" className="sr-only" />
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{gender === "female" ? "🍑" : "💪"}</div>
                  <Label htmlFor="gain" className="cursor-pointer">
                    <div className="font-medium">Muskelaufbau</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="gap-2 px-4 flex justify-between items-center">
            <span className="font-medium">Dein Ziel:</span> <span className="font-bold">{goalCalories} kcal</span>
          
          </div>
          <div className="mt-4 space-y-3">
            {/* Single line macronutrient distribution */}
            <div className="space-y-2 border-y border-foreground overflow-hidden">
              <div className="h-10 bg-gray-700  overflow-hidden">
                <div className="flex h-full w-full">
                  <div 
                    className="h-full bg-red-400 text-xs text-center flex items-center justify-center text-red-900 font-medium"
                    style={{ width: `${proteinPercent}%` }}
                  >
                    <span>Protein<br /> {protein}g ({proteinPercent}%)</span>
                  </div>
                  <div 
                    className="h-full bg-yellow-400 text-xs text-center flex items-center justify-center text-yellow-900 font-medium"
                    style={{ width: `${fatPercent}%` }}
                  >
                    <span>Fett <br /> {fat}g ({fatPercent}%)</span>
                  </div>
                  <div 
                    className="h-full bg-blue-400 text-xs text-center flex items-center justify-center text-blue-900 font-medium"
                    style={{ width: `${carbPercent}%` }}
                  >
                    <span>Kohlenhydrate <br /> {carbs}g ({carbPercent}%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end px-4 mt-1">
            <Link href="/leistungen" className="w-full">
              <Button variant="outline" className="w-full bg-foreground text-background tracking-widest uppercase font-bold">Jetzt durchstarten</Button>
            </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function RechnerPage() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [calories, setCalories] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const activityMultipliers = {
    sedentary: 1.2, // Sitzend – wenig oder keine Bewegung
    light: 1.375, // Leicht aktiv – leichte körperliche Aktivität/Sport 1-3 Tage/Woche
    moderate: 1.55, // Mäßig aktiv – moderate körperliche Aktivität/Sport an 3-5 Tagen/Woche
    active: 1.725, // Sehr aktiv – starke körperliche Aktivität/Sport an 6-7 Tagen/Woche
    veryActive: 1.9, // Sehr stark aktiv – sehr starke tägliche körperliche Aktivität/Sport oder 2X tägliches Training
  };

  const calculateCalories = () => {
    if (!age || !height || !weight) return;

    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    
    if (isNaN(ageNum) || isNaN(heightNum) || isNaN(weightNum)) return;
    
    // Harris-Benedict Formula (genaue Werte aus dem Nutrium-Artikel)
    let calculatedBmr = 0;
    if (gender === "male") {
      calculatedBmr = 66 + (13.7 * weightNum) + (5 * heightNum) - (6.8 * ageNum);
    } else {
      calculatedBmr = 655 + (9.6 * weightNum) + (1.8 * heightNum) - (4.7 * ageNum);
    }
    
    const tdee = calculatedBmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
    setBmr(Math.round(calculatedBmr));
    setCalories(Math.round(tdee));
    setShowResults(true);
  };

  const scrollToContact = () => {
    window.location.href = '/#contact-section';
  };

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      {/* Intro Copy */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Kalorienrechner – Deine erste Orientierung auf dem Weg zum Ziel</h1>
        <p className="text-lg mb-6">
          Du möchtest abnehmen, Muskeln aufbauen oder einfach fitter und gesünder leben? Dann ist dieser Kalorienrechner ein idealer erster Schritt.
        </p>
        <p className="text-lg mb-8">
          Er zeigt dir, wie viele Kalorien dein Körper im Alltag ungefähr verbrennt – basierend auf deinen persönlichen Angaben.
        </p>
      </div>

      {/* Calculator Section */}
      <section className="border rounded-lg p-6 bg-background/50 mb-12">
        <h2 className="text-2xl font-bold mb-6">Kalorienbedarf Rechner</h2>
        <p className="mb-4 text-muted-foreground">Berechnung des täglichen Kalorienbedarfs nach der Harris-Benedict-Formel.</p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="age">Alter</Label>
            <Input
              id="age"
              type="number"
              placeholder="Jahre"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label>Geschlecht</Label>
            <RadioGroup value={gender} onValueChange={setGender} className="flex mt-1 space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Männlich</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Weiblich</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="height">Körpergröße (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="z.B. 175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="weight">Gewicht (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="z.B. 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="activity">Aktivitätslevel</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Aktivitätslevel wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sitzend (wenig/keine Bewegung)</SelectItem>
                <SelectItem value="light">Leicht aktiv (1-3x/Woche)</SelectItem>
                <SelectItem value="moderate">Moderat aktiv (3-5x/Woche)</SelectItem>
                <SelectItem value="active">Sehr aktiv (6-7x/Woche)</SelectItem>
                <SelectItem value="veryActive">Extrem aktiv (2x täglich)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={calculateCalories}
            className="w-full mt-4"
          >
            Kalorienbedarf berechnen
          </Button>
        </div>
      </section>

      {/* Why Numbers Are Just the Start */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Warum diese Zahlen nur der Anfang sind</h3>
        <p className="text-lg mb-4">
          So genau der Rechner auch rechnet – jeder Körper reagiert individuell. Dein Energieverbrauch kann durch Stoffwechsel, 
          hormonelle Prozesse, Muskelmasse oder Alltagsschwankungen stark abweichen.
        </p>
        <p className="text-lg mb-4">
          Deshalb gilt: Ein Kalorienrechner liefert eine fundierte Ausgangsbasis – aber keine Garantie. Die wahren Erfolge 
          entstehen in der konsequenten Umsetzung, der richtigen Anpassung und einer Strategie, die wirklich zu dir passt.
        </p>
      </div>

      {/* Personal Coaching Benefits */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Wieso persönliche Betreuung den Unterschied macht</h3>
        <p className="text-lg mb-4">Als Coach helfe ich dir dabei:</p>
        <ul className="list-disc list-inside space-y-2 text-lg mb-4 ml-4">
          <li>die Zahlen aus dem Rechner richtig zu interpretieren</li>
          <li>deinen Plan realistisch und nachhaltig umzusetzen</li>
          <li>regelmäßig Anpassungen vorzunehmen, wenn dein Körper sich verändert</li>
          <li>Rückschläge zu meistern und dranzubleiben</li>
        </ul>
        <p className="text-lg">
          So erreichst du nicht nur dein Ziel – sondern hältst es auch langfristig.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Kalorienrechner + Coaching = dein Erfolgsrezept</h3>
        <p className="text-lg mb-4">
          Nutze den Kalorienrechner als deine Startlinie. Du bekommst damit ein erstes Gefühl für deinen Energiebedarf.
        </p>
        <p className="text-lg mb-6">
          Für weitere Unterstützung bin ich als Coach an deiner Seite – mit Erfahrung, Know-how und einem klaren Plan, 
          der dich Schritt für Schritt zu deinem Ziel führt.
        </p>
        <p className="text-xl font-bold mb-6">Lass uns den Weg zu DEINER BESTFORM gemeinsam gehen</p>
        <Button size="lg" onClick={scrollToContact} className="bg-foreground text-background tracking-widest uppercase font-bold">
          Jetzt starten
        </Button>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Häufige Fragen zum Kalorienrechner</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              1. Warum sollte ich meinen Kalorienbedarf kennen?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base leading-relaxed">
                Ohne zu wissen, wie viele Kalorien dein Körper tatsächlich verbraucht, ist es schwer, deine Fitnessziele zu erreichen. 
                Ein Kalorienrechner hilft dir dabei die benötigten Kalorien zu ermitteln, um:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>Zuverlässig abzunehmen</li>
                <li>Gezielt Muskeln aufzubauen</li>
                <li>Dein Gewicht zu halten</li>
              </ul>
              <p className="mt-2">Kurz gesagt: Wer seinen Körper versteht, kann ihn auch gezielt formen.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              2. Ich habe schon öfter Kalorien berechnet – warum klappt's trotzdem nicht?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base leading-relaxed">
                Weil Kalorienberechnen nur ein Teil vom Ganzen ist. Ein Kalorienrechner ist ein hilfreiches Werkzeug – aber kein Alleskönner. 
                Er ersetzt keine persönliche Anpassung, kein Feedback aus der Praxis und vor allem keinen individuellen Plan, 
                der zu deinem Alltag und deinen Bedürfnissen passt.
              </p>
              <p className="mt-2">
                In der Umsetzung liegt oft die Herausforderung: Portionsgrößen, versteckte Kalorien, wenig Bewegung oder Stress 
                machen den Unterschied. Genau da setzt Coaching an – mit alltagstauglichen Lösungen, die zu dir passen.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              3. Wie oft sollte ich meinen Kalorienbedarf neu berechnen?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base leading-relaxed">
                Du solltest deinen Kalorienbedarf neu berechnen, wenn sich etwas Wesentliches verändert – z. B. dein Gewicht, 
                deine Trainingsroutine oder dein Alltag.
              </p>
              <p className="mt-2 font-semibold">
                Ändert sich dein Ziel, ändert sich auch dein Kalorienbedarf!
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              4. Warum unterscheiden sich die Ergebnisse bei verschiedenen Rechnern?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base leading-relaxed">
                Es gibt mehrere Formeln zur Berechnung des Kalorienbedarfs – wie Harris-Benedict, Mifflin-St. Jeor oder Katch-McArdle. 
                Je nach gewählter Formel und Berechnungsweise kann das Ergebnis leicht variieren. Wichtig ist, mit einer Methode 
                konsistent zu arbeiten und sie als Orientierung zu nutzen – nicht als absolute Wahrheit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <ResultsModal 
        open={showResults} 
        setOpen={setShowResults} 
        bmr={bmr} 
        calories={calories}
        gender={gender}
        weight={weight}
      />
    </main>
  );
} 