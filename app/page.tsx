import { BackendArchitecture } from "@/components/sections/BackendArchitecture";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSignal } from "@/components/sections/ProjectsSignal";
import { StackOverview } from "@/components/sections/StackOverview";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(102,231,255,0.08),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,49,49,0.06),transparent_25%)]" />
      <HeroSection />
      <StackOverview />
      <ProjectsSignal />
      <BackendArchitecture />
      <ContactSection />
    </main>
  );
}
