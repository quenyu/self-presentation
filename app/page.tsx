import { HeroSection } from "@/components/hero/HeroSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SystemMap } from "@/components/sections/SystemMap";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <SystemMap />
      <ContactSection />
    </main>
  );
}
