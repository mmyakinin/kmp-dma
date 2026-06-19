"use client";

import { useState, useMemo } from "react";
import {
    Container,
    PageHeader,
    UniversityCard,
    UniversityFilters,
} from "@/components/shared";
import { universities } from "@/data/universities";

export default function UniversitiesPage() {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("all");
    const [type, setType] = useState("all");
    const [level, setLevel] = useState("all");

    const filteredUniversities = useMemo(() => {
        return universities.filter((u) => {
            const query = search.toLowerCase();

            const matchSearch =
                u.name.toLowerCase().includes(query) ||
                u.description.toLowerCase().includes(query);

            return (
                matchSearch &&
                (city === "all" || u.city === city) &&
                (type === "all" || u.type === type) &&
                (level === "all" || u.level === level)
            );
        });
    }, [search, city, type, level]);

    return (
        <Container className="py-10">
            <PageHeader
                title="Universitetlər və Kolleclər"
                badge="Təhsil Müəssisələri"
                desc="Azərbaycandakı bütün ali və orta ixtisas təhsil müəssisələrini araşdırın"
            />

            <UniversityFilters
                search={search}
                setSearch={setSearch}
                city={city}
                setCity={setCity}
                type={type}
                setType={setType}
                level={level}
                setLevel={setLevel}
            />

            <div className="text-sm text-muted mb-4">
                {filteredUniversities.length} nəticə tapıldı
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversities.map((item) => (
                    <UniversityCard key={item.id} {...item} />
                ))}
            </div>
        </Container>
    );
}
