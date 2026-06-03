import { ChartColumn } from "lucide-react";

export const PersonnelHeader = () => {
    return (
        <>
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 rounded-xl">
                    <ChartColumn size={32} className="text-white" />
                </div>

                <p className="text-secondary text-sm tracking-wider uppercase font-semibold mb-2">
                    Milli Qiymətləndirmə Sistemi
                </p>

                <h1 className="text-primary text-3xl font-semibold mb-2">
                    Kadr İndeksi
                </h1>

                <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Azərbaycanda ali məktəb tələbə və məzunlarının bacarıq
                    səviyyəsini ölçən milli standart qiymətləndirmə sistemi
                </p>
            </div>
        </>
    );
};
