import { SkillProgressBar } from "../";

const skills = [
    { label: "Soft Skills", value: 72 },
    { label: "Dil Bilikləri", value: 81 },
    { label: "Rəqəmsal Bacarıqlar", value: 68 },
];

const average = (
    skills.reduce((acc, item) => acc + item.value, 0) / skills.length
).toFixed(1);

export const PersonnelIntro = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-300 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-xl text-primary font-semibold mb-4">
                        Kadr İndeksi nədir?
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        Kadr İndeksi Azərbaycan Respublikasının Əmək Nazirliyi
                        tərəfindən həyata keçirilən bir layihədir. Tələbə və
                        məzunların üç əsas bacarıq sahəsindəki səviyyəsini
                        ölçür.
                    </p>
                    <p className="text-gray-500">
                        Bu indeks həm işəgötürənlərə, həm universitetlərə, həm
                        də dövlət qurumlarına əmək bazarının ehtiyaclarını
                        anlamaq üçün dəyərli bir alət kimi xidmət edir.
                    </p>
                </div>
                <div className="bg-blue-100 p-8 rounded-xl">
                    <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-primary">
                            {average}
                        </div>
                        <div className="text-sm text-gray-500">
                            2024 Milli Ortalama Kadr İndeksi
                        </div>
                    </div>
                    {/* Progress Bars */}
                    <div className="space-y-3">
                        {skills.map((item, index) => (
                            <SkillProgressBar
                                key={index}
                                label={item.label}
                                value={item.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
