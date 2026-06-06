import {
    Container,
    PersonnelImportance,
    PersonnelIntro,
    PersonnelSkills,
} from "@/components";
import { PageHeader } from "@/components/page-header";
import { ChartColumn } from "lucide-react";

export default function PersonnelIndexPage() {
    return (
        <Container className="py-10">
            <PageHeader
                icon={<ChartColumn size={32} className="text-white" />}
                title="Kadr İndeksi"
                badge="Milli Qiymətləndirmə Sistemi"
                desc="Azərbaycanda ali məktəb tələbə və məzunlarının bacarıq
                    səviyyəsini ölçən milli standart qiymətləndirmə sistemi"
                textCenter={true}
            />
            <PersonnelIntro />
            <PersonnelSkills />
            <PersonnelImportance />
        </Container>
    );
}
