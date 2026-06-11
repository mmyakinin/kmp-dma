import { Container, PageHeader, ContactCard } from "@/components/shared";
import { ContactCardProps } from "@/components/shared/cards/contact-card";
import { Button } from "@/components/ui";
import { ArrowRight, File, GraduationCap, MessageCircle, Phone } from "lucide-react";

export const contactData: ContactCardProps[] = [
    {
        icon: Phone,
        title: "Telefon Məsləhəti",
        desc: "İş günlərində saat 09:00–18:00 arasında karyera mütəxəssisləri ilə birbaşa danışın.",
        buttonText: "Zəng et: 1655",
        href: "/",
    },
    {
        icon: MessageCircle,
        title: "Online Müraciət",
        desc: "Aşağıdakı formu doldurun. Mütəxəssis 24 saat ərzində sizinlə əlaqə saxlayacaq.",
        buttonText: "Forma keç",
        href: "/",
    },
    {
        icon: GraduationCap,
        title: "Qrup Seminarlar",
        desc: "Həftəlik karyera hazırlıq seminarlarına qeydiyyat edin. Pulsuz, onlayn.",
        buttonText: "Qeydiyyat",
        href: "/",
    },
    {
        icon: File,
        title: "CV Yoxlaması",
        desc: "CV-nizi göndərin, 3 iş günü ərzində ətraflı rəy əldə edin.",
        buttonText: "CV göndər",
        href: "/",
    },
];

export default function ContactPage() {
    return (
        <Container className="max-w-5xl py-10">
            <PageHeader
                icon={<Phone size={32} className="text-white" />}
                title={"Alo Karyera"}
                desc="Azərbaycanlı tələbə və məzunlara peşəkar karyera məsləhəti verən milli konsultasiya xidməti"
                textCenter={true}
            />
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {contactData.map((item, index) => (
                    <ContactCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                        buttonText={item.buttonText}
                        href={item.href}
                    />
                ))}
            </div>
            {/* Contact Form */}
            <div className="bg-white border border-border rounded-xl p-8">
                <h2 className="font-semibold text-2xl mb-4">
                    Onlayn Müraciət Forması
                </h2>
                <form action="">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor=""
                                className="block text-sm text-muted mb-1"
                            >
                                Ad Soyad *
                            </label>
                            <input
                                type="text"
                                placeholder="Adınız"
                                className="w-full border-2 border-border rounded-xl py-2 pl-3 pr-10"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor=""
                                className="block text-sm text-muted mb-1"
                            >
                                Telefon *
                            </label>
                            <input
                                type="text"
                                placeholder="+994"
                                className="w-full border-2 border-border rounded-xl py-2 pl-3 pr-10"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor=""
                                className="block text-sm text-muted mb-1"
                            >
                                E-poçt *
                            </label>
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                className="w-full border-2 border-border rounded-xl py-2 pl-3 pr-10"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor=""
                                className="block text-sm text-muted mb-1"
                            >
                                Mövzu *
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-border rounded-xl py-2 pl-3 pr-10"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor=""
                                className="block text-sm text-muted mb-1"
                            >
                                Müraciətin mətni
                            </label>
                            <textarea
                                className="w-full h-20 border-2 border-border rounded-xl py-2 pl-3 pr-10 resize-none"
                                placeholder="Müraciətinizi yazın ..."
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Button className="py-3.5 px-8 text-base max-[576px]:w-full">Göndər <ArrowRight className="ml-2"/></Button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}
