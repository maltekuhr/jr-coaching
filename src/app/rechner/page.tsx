import { Header } from "@/components/Header";
import CalorieCalculator from "./components/calorie-calculator";

export default function RechnerPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Kalorienbedarf Rechner</h1>
        <p className="text-lg mb-8">
          Berechnen Sie Ihren individuellen Kalorienbedarf, um Ihre Fitness- und Ernährungsziele besser planen zu können.
        </p>
        
        <CalorieCalculator />
      </main>
    </>
  );
} 