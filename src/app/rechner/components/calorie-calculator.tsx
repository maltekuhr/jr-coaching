"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [calories, setCalories] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);

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
  };

  return (
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
        
        {calories !== null && bmr !== null && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <h3 className="font-bold text-lg">Ergebnis</h3>
            <div className="space-y-2 mt-2">
              <p>Grundumsatz (BMR): <span className="font-bold">{bmr} kcal</span></p>
              <p>Täglicher Kalorienbedarf: <span className="font-bold">{calories} kcal</span></p>
            </div>
            <div className="mt-3 text-sm text-muted-foreground space-y-2">
              <p>Der Grundumsatz (BMR) ist die Energiemenge, die Ihr Körper in Ruhe benötigt.</p>
              <p>Der tägliche Kalorienbedarf berücksichtigt Ihre Aktivität und repräsentiert die Kalorienmenge für den Erhalt Ihres aktuellen Gewichts.</p>
              <p className="text-xs">Hinweis: Diese Berechnung ist eine Schätzung und berücksichtigt nicht individuelle Faktoren wie Körperzusammensetzung.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 