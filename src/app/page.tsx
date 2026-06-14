import Hero from "@/components/hero/Hero";
import VideoSection from "@/components/video-section/VideoSection";
import EducationSection from "@/components/education-section/EducationSection";
import ConferenceRoom from "@/components/conference-room/ConferenceRoom";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />

      <VideoSection />

      <EducationSection />

      <ConferenceRoom />

    </main>
  );
}