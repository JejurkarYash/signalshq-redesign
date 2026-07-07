import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/Hero";
import ProductWalkthrough from "@/components/sections/ProductWalkthrough";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import ProductWorkflow from "@/components/sections/ProductWorkflow";
import UseCases from "@/components/sections/UseCases";
import CustomerStories from "@/components/sections/CustomerStories";
import SecurityTrust from "@/components/sections/SecurityTrust";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/utils/SmoothScroll";
import InteractiveSpotlight from "@/components/utils/InteractiveSpotlight";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-base">
      <SmoothScroll />
      <InteractiveSpotlight />
      <NavBar />
      <main className="flex flex-col flex-1">
        <Hero />
        <ProductWalkthrough />
        <ImpactMetrics />
        <ProductWorkflow />
        <UseCases />
        <CustomerStories />
        <SecurityTrust />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
