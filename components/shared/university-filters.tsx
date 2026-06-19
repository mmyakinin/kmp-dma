"use client";

import { Search } from "lucide-react";

interface Props {
    search: string;
    setSearch: (value: string) => void;

    city: string;
    setCity: (value: string) => void;

    type: string;
    setType: (value: string) => void;

    level: string;
    setLevel: (value: string) => void;
}

export function UniversityFilters({
    search,
    setSearch,
    city,
    setCity,
    type,
    setType,
    level,
    setLevel,
}: Props) {
    return (
        <div className="bg-white rounded-xl border-2 border-border p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="flex items-center border border-border rounded-xl py-2 px-4">
                    <div className="border-r-2 border-border pr-3">
                        <Search />
                    </div>
                    <input
                        type="text"
                        placeholder="Universitet axtar..."
                        className="pl-3 w-full outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Filter by city */}
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-border rounded-xl py-2 px-4"
                >
                    <option value="all">Hamısı</option>
                    <option value="Bakı">Bakı</option>
                    <option value="Gəncə">Gəncə</option>
                    <option value="Lənkəran">Lənkəran</option>
                    <option value="Sumqayıt">Sumqayıt</option>
                </select>

                {/* Filter by type */}
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border border-border rounded-xl py-2 px-4"
                >
                    <option value="all">Hamısı</option>
                    <option value="Dövlət">Dövlət</option>
                    <option value="Özəl">Özəl</option>
                </select>

                {/* Filter by level of education */}
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="border border-border rounded-xl py-2 px-4"
                >
                    <option value="all">Hamısı</option>
                    <option value="Ali">Ali</option>
                    <option value="Orta ixtisas">Orta ixtisas</option>
                </select>
            </div>
        </div>
    );
}
