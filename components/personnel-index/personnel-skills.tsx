import React from "react";

import { Brain, Earth, Laptop } from "lucide-react";

type SkillCardProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

export const PersonnelSkills = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SkillCard
                icon={<Brain size={32} className="text-white" />}
                title={"Soft Skills"}
                text={
                    "Ünsiyyət, liderlik, komanda işi, problem həlli və emosional zəka kimi şəxsiyyətə aid bacarıqlar qiymətləndirilir."
                }
            />
            <SkillCard
                icon={<Earth size={32} className="text-white" />}
                title={"Dil Bilikləri"}
                text={
                    "Azərbaycan, ingilis, rus dillərindəki bilik səviyyəsi CEFR standartlarına görə ölçülür."
                }
            />
            <SkillCard
                icon={<Laptop size={32} className="text-white" />}
                title={"Rəqəmsal Bacarıqlar"}
                text={
                    " MS Office, proqramlaşdırma, data analitika, rəqəmsal savadlılıq üzrə qiymətləndirmə."
                }
            />
        </div>
    );
};

const SkillCard = ({ icon, title, text }: SkillCardProps) => {
    return (
        <article className="bg-white rounded-xl border border-border p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                {icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{text}</p>
        </article>
    );
};
