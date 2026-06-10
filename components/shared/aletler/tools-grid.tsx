import React from "react";
import { ToolCard, ToolCardProps } from "../cards/tool-card";
import { Briefcase, ChartColumn, File, Map, MapPin, Star } from "lucide-react";

const tools: ToolCardProps[] = [
    {
        icon: File,
        title: "CV Builder",
        description:
            "DMA'nın rəsmi CV hazırlama aləti. Peşəkar formatda CV yaradın, redaktə edin və yükləyin.",
        buttonText: "CV Hazırla",
        href: "https://cv.dma.gov.az/?hl=en",
    },
    {
        icon: Briefcase,
        title: "Karyera Portalı",
        description:
            "e-sosial platforması. Vakansiyalar, məşğulluq xidmətləri və işəgötürən əlaqələri üçün milli portal.",
        buttonText: "Portala keç",
        href: "https://careerportal.e-social.gov.az/az",
    },
    {
        icon: Map,
        title: "Peşə Xəritəsi",
        description:
            "Azərbaycanda mövcud peşə sahələrini, tələb olunan bacarıqları və karyera yollarını kəşf edin.",
        buttonText: "Xəritəyə bax",
        href: "#",
    },
    {
        icon: MapPin,
        title: "Məşğulluq Xəritəsi",
        description:
            "Regional məşğulluq göstəricilərini, iş bazarı trendlərini və vakansiya sıxlığını görüntüləyin.",
        buttonText: "Xəritəni aç",
        href: "#",
    },
    {
        icon: Star,
        title: "BACAR Platforması",
        description:
            "Bacarıq qiymətləndirmə platforması. Soft skills, texniki bacarıqlar və peşəkar inkişaf testləri.",
        buttonText: "Qiymətləndir",
        href: "#",
    },
    {
        icon: ChartColumn,
        title: "Məzun Məşğulluq Reytinqi",
        description:
            "Universitetləri məzunlarının məşğulluq nisbətinə görə müqayisə edin. Şəffaf statistika.",
        buttonText: "Reytinqə bax",
        href: "#",
    },
];

export const ToolsGrid: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((item, index) => (
                <ToolCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    href={item.href}
                />
            ))}
        </div>
    );
};
