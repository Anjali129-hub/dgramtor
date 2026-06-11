import Hero from "@/components/hero/Hero";
import MissionVision from "@/components/mission-vision/MissionVision";
import FeatureGrid from "@/components/feature-grid/FeatureGrid";
import EducationSection from "@/components/education-section/EducationSection";
import ConferenceRoom from "@/components/conference-room/ConferenceRoom";
import WhyDgramtor from "@/components/why-dgramtor/WhyDgramtor";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />

      <MissionVision />

      <FeatureGrid />

      <EducationSection />

      <ConferenceRoom />

      <WhyDgramtor />

    </main>
  );
}