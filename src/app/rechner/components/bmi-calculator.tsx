"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInM = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (isNaN(heightInM) || isNaN(weightInKg) || heightInM <= 0 || weightInKg <= 0) return;
    
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue);
    
    // Set category
    if (bmiValue < 18.5) {
      setCategory("Untergewicht");
    } else if (bmiValue < 25) {
      setCategory("Normalgewicht");
    } else if (bmiValue < 30) {
      setCategory("Übergewicht");
    } else {
      setCategory("Adipositas");
    }
  };

  return (
    <section className="border rounded-lg p-6 bg-background/50">
      <h2 className="text-2xl font-bold mb-6">BMI Rechner</h2>
      <div className="space-y-4">
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
        
        <Button 
          onClick={calculateBMI}
          className="w-full mt-4"
        >
          BMI berechnen
        </Button>
        
        {bmi !== null && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <h3 className="font-bold text-lg">Ergebnis</h3>
            <p className="mt-2">Ihr BMI: <span className="font-bold">{bmi.toFixed(1)}</span></p>
            <p className="mt-1">Kategorie: <span className="font-bold">{category}</span></p>
          </div>
        )}
      </div>
    </section>
  );
} 