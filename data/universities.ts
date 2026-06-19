import { UniversityProps } from "@/@types/university.types.";

export const universities: UniversityProps[] = [
    {
        id: 1,
        slug: "bdu-karyera-merkezi",
        name: "Bakı Dövlət Universiteti",
        description: `Azərbaycanın ən köhnə və nüfuzlu ali təhsil müəssisəsi.
                    1919-cu ildə təsis edilmiş, 15.000-dən çox tələbəyə ev
                    sahibliyi edir.`,
        city: "Bakı",
        type: "Dövlət",
        level: "Ali",
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
        level: "Ali",
        careerCenter: "AzTU Karyera və Məşğulluq Mərkəzi",
        imageUrl: "/aztu-logo.png",
    },
    {
        id: 3,
        slug: "ada-karyera-merkezi",
        name: "ADA Universiteti",
        description: `Azərbaycanda ilk özəl tədqiqat universiteti. Beynəlxalq akkreditasiyaya malik, çoxdilli tədris mühiti.`,
        city: "Bakı",
        type: "Özəl",
        level: "Ali",
        careerCenter: "ADA Career Development Center",
        imageUrl: "/ada-logo.png",
    },
];
