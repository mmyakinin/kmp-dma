import {
    AboutSection,
    CareerPlanningSection,
    Hero,
    LatestNewsSection,
    StatsSection,
} from "@/components/shared";

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
