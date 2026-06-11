import { Container, PageHeader, ResourceCard } from "@/components/shared";
import { ResourceCardProps } from "@/components/shared/cards/resource-card";
import { Badge } from "@/components/ui";
import { File, Globe, Newspaper, Pin } from "lucide-react";

export const resources: ResourceCardProps[] = [
    {
        icon: Newspaper,
        title: "Əmək Bazarı Bülleteni – Q1 2025",
        badge: "Bülleten",
        date: "Mart 2025",
        description:
            "2025-ci ilin birinci rübü üzrə əmək bazarı göstəriciləri, vakansiya trendləri və sektoral analiz.",
    },
    {
        icon: File,
        title: "Məzunların Məşğulluğu Hesabatı 2024",
        badge: "Hesabat",
        date: "Yanvar 2025",
        description:
            "Ali məktəb məzunlarının işə düzəlmə faizini, müddətini və sahə bölgüsünü əhatə edən illik hesabat.",
    },
    {
        icon: Pin,
        title: "Karyera Mərkəzlərinin Fəaliyyət Standartları",
        badge: "Standart",
        date: "Oktyabr 2024",
        description:
            "Universitet karyera mərkəzlərinin xidmət keyfiyyəti, kadr strukturu və hesabatlılıq standartları.",
    },
    {
        icon: Globe,
        title: "DMA – Rəsmi Portalı",
        badge: "Xarici keçid",
        description:
            "Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin rəsmi saytı. Əmək qanunvericiliyi və proqramlar.",
        href: "https://dma.gov.az/",
    },
];

export default function UsefulResourcesPage() {
    return (
        <Container className="py-10">
            <PageHeader
                title={"Faydalı Resurslar"}
                badge="Sənədlər və Keçidlər"
            />
            <div className="grid md:grid-cols-2 gap-6">
                {resources.map((item, index) => (
                    <ResourceCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        badge={item.badge}
                        description={item.description}
                        href={item.href}
                    />
                ))}
            </div>
        </Container>
    );
}
