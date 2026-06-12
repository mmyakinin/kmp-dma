import { UniversityProps } from "@/@types/university.types.";
import { Container, PageHeader, UniversityCard } from "@/components/shared";

const universities: UniversityProps[] = [
    {
        id: 1,
        slug: "bdu-karyera-merkezi",
        name: "Bakı Dövlət Universiteti",
        description: `Azərbaycanın ən köhnə və nüfuzlu ali təhsil müəssisəsi.
                    1919-cu ildə təsis edilmiş, 15.000-dən çox tələbəyə ev
                    sahibliyi edir.`,
        city: "Bakı",
        type: "Dövlət",
        careerCenter: "BDU Karyera Mərkəzi",
        imageUrl: "/bdu-logo.png",
    },
    {
        id: 2,
        slug: "aztu-karyera-merkezi",
        name: "Azərbaycan Texniki Universiteti",
        description: `Mühəndislik və texnologiya sahəsində Azərbaycanın aparıcı universiteti. 1950-ci ildən fəaliyyət göstərir.`,
        city: "Bakı",
        type: "Dövlət",
        careerCenter: "AzTU Karyera və Məşğulluq Mərkəzi",
        imageUrl: "/aztu-logo.png",
    },
];

export default function UniversitiesPage() {
    return (
        <Container className="py-10">
            <PageHeader
                title="Universitetlər və Kolleclər"
                badge="Təhsil Müəssisələri"
                desc="Azərbaycandakı bütün ali və orta ixtisas təhsil müəssisələrini araşdırın

"
            />
            <div className="text-sm text-muted mb-4">
                {universities.length} nəticə tapıldı
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((item) => (
                    <UniversityCard
                        key={item.id}
                        id={item.id}
                        slug={item.slug}
                        name={item.name}
                        description={item.description}
                        city={item.city}
                        type={item.type}
                        careerCenter={item.careerCenter}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </Container>
    );
}
