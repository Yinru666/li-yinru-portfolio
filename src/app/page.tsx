import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestNotesSection } from "@/components/sections/LatestNotesSection";
import { ResearchInterestsSection } from "@/components/sections/ResearchInterestsSection";
import { TechnicalStackSection } from "@/components/sections/TechnicalStackSection";

export default function Home() {
  return (
    <div className="section-fade">
      <HeroSection />
      <FeaturedProjectsSection />
      <ResearchInterestsSection />
      <AchievementsSection />
      <TechnicalStackSection />
      <LatestNotesSection />
      <ContactCTASection />
    </div>
  );
}
