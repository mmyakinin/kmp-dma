import {
    Container,
    PageHeader,
    ContactCard,
    ContactForm,
} from "@/components/shared";
import { ContactCardProps } from "@/components/shared/cards/contact-card";
import { File, GraduationCap, MessageCircle, Phone } from "lucide-react";

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
                <ContactForm />
            </div>
        </Container>
    );
}
