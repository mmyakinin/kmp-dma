import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about-section";
import { CareerPlanningSection } from "@/components/sections/career-planning-section";
import { LatestNewsSection } from "@/components/sections/latest-news-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
    return (
        <>
            <Hero />
            <StatsSection />
            <AboutSection />
            <LatestNewsSection />
            <CareerPlanningSection />
        </>
    );
}
