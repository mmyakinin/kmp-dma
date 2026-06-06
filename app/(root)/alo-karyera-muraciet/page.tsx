import { Container } from "@/components";
import { PageHeader } from "@/components/page-header";
import { File, GraduationCap, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <Container className="max-w-5xl py-10">
            <PageHeader
                icon={<Phone size={32} className="text-white" />}
                title={"Alo Karyera"}
                desc="Azərbaycanlı tələbə və məzunlara peşəkar karyera məsləhəti verən milli konsultasiya xidməti"
                textCenter={true}
            />
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-border rounded-xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                        <Phone size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                        Telefon Məsləhəti
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                        İş günlərində saat 09:00–18:00 arasında karyera
                        mütəxəssisləri ilə birbaşa danışın.
                    </p>
                    <Link
                        href={"/"}
                        className="border-2 border-primary bg-transparent text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4 rounded-lg"
                    >
                        Zəng et: 1655
                    </Link>
                </div>
                <div className="bg-white border border-border rounded-xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                        <MessageCircle size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                        Online Müraciət
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                        Aşağıdakı formu doldurun. Mütəxəssis 24 saat ərzində
                        sizinlə əlaqə saxlayacaq.
                    </p>
                    <Link
                        href={"/"}
                        className="border-2 border-primary bg-transparent text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4 rounded-lg"
                    >
                        Forma keç
                    </Link>
                </div>
                <div className="bg-white border border-border rounded-xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                        <GraduationCap size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                        Qrup Seminarlar
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                        Həftəlik karyera hazırlıq seminarlarına qeydiyyat edin.
                        Pulsuz, onlayn.
                    </p>
                    <Link
                        href={"/"}
                        className="border-2 border-primary bg-transparent text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4 rounded-lg"
                    >
                      Qeydiyyat
                    </Link>
                </div>
                <div className="bg-white border border-border rounded-xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                        <File size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">CV Yoxlaması</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                        CV-nizi göndərin, 3 iş günü ərzində ətraflı rəy əldə
                        edin.
                    </p>
                    <Link
                        href={"/"}
                        className="border-2 border-primary bg-transparent text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4 rounded-lg"
                    >
                        CV göndər
                    </Link>
                </div>
            </div>
        </Container>
    );
}
