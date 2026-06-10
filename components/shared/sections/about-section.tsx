import React from "react";

import { Container } from "../";
import { Briefcase, Building2, Check, FileText, Handshake } from "lucide-react";

export const services = [
    {
        icon: Briefcase,
        title: "Karyera məsləhəti",
        description:
            "Tələbələrə peşəkar karyera yolu seçimində fərdi məsləhət verilir.",
    },
    {
        icon: FileText,
        title: "CV dəstəyi",
        description:
            "Peşəkar CV hazırlama, müraciət məktubu yazmaq üzrə dəstək.",
    },
    {
        icon: Handshake,
        title: "Staj imkanları",
        description:
            "Yerli və beynəlxalq şirkətlərdə ödənişli staj proqramları.",
    },
    {
        icon: Building2,
        title: "İşəgötürən əlaqəsi",
        description: "Tələbələri işəgötürənlərlə birləşdirən karyera günləri.",
    },
];

export const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <Container className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-secondary text-sm tracking-wider uppercase font-semibold mb-2">
                        Karyera Mərkəzləri haqqında
                    </p>
                    <h2 className="text-primary text-3xl font-semibold mb-3">
                        Karyera Mərkəzi nədir?
                    </h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Karyera Mərkəzləri universitetlər daxilindəki struktur
                        vahidlərdir. Tələbə və məzunların iş bazarına uğurlu
                        inteqrasiyasını təmin etmək məqsədi daşıyır.
                    </p>
                    <p className="text-muted leading-relaxed mb-6">
                        Karyera Mərkəzləri universitetlər daxilindəki struktur
                        vahidlərdir. Tələbə və məzunların iş bazarına uğurlu
                        inteqrasiyasını təmin etmək məqsədi daşıyır.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="inline-flex gap-1 items-center text-sm text-muted">
                            <Check size={24} className="text-primary" />{" "}
                            Tələbələr üçün{" "}
                        </div>
                        <div className="inline-flex gap-1 items-center text-sm text-muted">
                            <Check size={24} className="text-primary" />{" "}
                            Məzunlar üçün
                        </div>
                        <div className="inline-flex gap-1 items-center text-sm text-muted">
                            <Check size={24} className="text-primary" />{" "}
                            Akademik heyət üçün
                        </div>
                        <div className="inline-flex gap-1 items-center text-sm text-muted">
                            <Check size={24} className="text-primary" />{" "}
                            İşəgötürənlər üçün
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {services.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-blue-100 p-4 rounded-lg"
                            >
                                <div className="mb-3">
                                    <Icon size={32} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
