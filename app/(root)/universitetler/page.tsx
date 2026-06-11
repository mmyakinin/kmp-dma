import { Container, PageHeader } from "@/components/shared";
import { Badge } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function UniversitiesPage() {
    return (
        <Container className="py-10">
            <PageHeader
                title="Universitetlər və Kolleclər"
                badge="Təhsil Müəssisələri"
                desc="Azərbaycandakı bütün ali və orta ixtisas təhsil müəssisələrini araşdırın

"
            />
            <div className="text-sm text-muted mb-4">1 nəticə tapıldı</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card-hover bg-white border border-border rounded-xl overflow-hidden cursor-pointer">
                    <div className="h-2 bg-primary"></div>
                    <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-blue-100">
                                <Image
                                    src={"/bdu-logo.png"}
                                    alt="BDU"
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold">
                                    Bakı Dövlət Universiteti
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 mt-1">
                                    <Badge text={"Bakı"} />
                                    <Badge text={"Dövlət"} />
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-muted font-normal leading-relaxed mb-4">
                            Azərbaycanın ən köhnə və nüfuzlu ali təhsil
                            müəssisəsi. 1919-cu ildə təsis edilmiş, 15.000-dən
                            çox tələbəyə ev sahibliyi edir.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-primary font-medium">
                                BDU Karyera Mərkəzi
                            </span>
                            <span className="text-sm font-medium text-primary ">
                                Ətraflı{" "}
                                <ArrowRight size={18} className="inline" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
