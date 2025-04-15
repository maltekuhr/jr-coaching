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

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Kalorienbedarf Rechner</h1>
      <p className="text-lg mb-8">
        Berechnen Sie Ihren individuellen Kalorienbedarf, um Ihre Fitness- und Ernährungsziele besser planen zu können.
      </p>
      
      <section className="border rounded-lg p-6 bg-background/50">
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