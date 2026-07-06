import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/Hero";
import ProductWalkthrough from "@/components/sections/ProductWalkthrough";
import ImpactMetrics from "@/components/sections/ImpactMetrics";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-base">
      <NavBar />
      <main className="flex flex-col flex-1">
        <Hero />
        <ProductWalkthrough />
        <ImpactMetrics />
      </main>
    </div>
  );
}
