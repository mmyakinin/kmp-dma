import { Building2, GraduationCap, Landmark, UserRound } from "lucide-react";

type PersonnelItemProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

export const PersonnelImportance = () => {
    return (
        <div className="bg-primary text-primary-foreground rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Kadr İndeksi niyə vacibdir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Item
                    icon={<GraduationCap size={32} />}
                    title={"Universitetlər üçün"}
                    text={
                        "Tədris proqramlarını bazarın ehtiyaclarınauyğunlaşdırmaq"
                    }
                />
                <Item
                    icon={<Building2 size={32} />}
                    title={"İşəgötürənlər üçün"}
                    text={" Namizədləri obyektiv şəkildə qiymətləndirmək"}
                />
                <Item
                    icon={<UserRound size={32} />}
                    title={"Tələbələr üçün"}
                    text={"Güclü və zəif tərəflərini bilmək, inkişaf etmək"}
                />
                <Item
                    icon={<Landmark size={32} />}
                    title={"Dövlət üçün"}
                    text={"Əmək bazarı siyasəti üçün dəqiq məlumat bazası"}
                />
            </div>
        </div>
    );
};

const Item = ({ icon, title, text }: PersonnelItemProps) => {
    return (
        <div className="bg-white/30 p-4 rounded-xl">
            <div className="mb-2">{icon}</div>
            <h4 className="font-medium text-sm mb-1">{title}</h4>
            <p className="text-xs opacity-80">{text}</p>
        </div>
    );
};
