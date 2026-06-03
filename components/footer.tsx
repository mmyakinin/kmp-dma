import React from "react";

import { Container } from "./";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

interface Props {
    className?: string;
}

const currentYear = new Date().getFullYear();

const links = [
    {
        title: "Keçidlər",
        items: [
            { name: "Ana səhifə", href: "/" },
            { name: "Universitetlər", href: "/universitetler" },
            { name: "Xəbərlər", href: "/xeberler" },
            { name: "Alətlər", href: "/aletler" },
        ],
    },
    {
        title: "Xidmətlər",
        items: [
            { name: "CV Builder", href: "/" },
            { name: "Karyera Portalı", href: "/" },
            { name: "Kadr İndeksi", href: "/" },
            { name: "BACAR Platforması", href: "/" },
        ],
    },
];

const contactLinks = [
    {
        name: "Bakı şəhəri, Azərbaycan",
        href: "/",
        icon: MapPin,
    },
    {
        name: "+994 12 XXX XX XX",
        href: "tel:+994501234567",
        icon: Phone,
    },
    {
        name: " kariyer@dma.gov.az",
        href: "mailto:kariyer@dma.gov.az",
        icon: Mail,
    },
    {
        name: "dma.gov.az",
        href: "https://dma.gov.az",
        icon: Globe,
    },
];

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer
            className={cn("bg-gray-900 text-gray-300 pt-12 pb-6 mt-10", className)}
        >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link
                            href={"/"}
                            className="flex items-center gap-3 mb-3"
                        >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold bg-primary">
                                KM
                            </div>

                            <div className="font-medium">
                                <h2 className="text-sm">
                                    Karyera Mərkəzləri Platforması
                                </h2>
                            </div>
                        </Link>

                        <p className="text-sm">
                            Azərbaycan Respublikası Əmək və Əhalinin Sosial
                            Müdafiəsi Nazirliyinin rəsmi platforması
                        </p>
                    </div>

                    {links.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-semibold mb-3">
                                {section.title}
                            </h4>

                            <ul className="space-y-1">
                                {section.items.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm transition-all hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h4 className="text-white font-semibold mb-3">Əlaqə</h4>

                        <ul className="space-y-1">
                            {contactLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                                        >
                                            <Icon size={16} />
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 text-sm text-center leading-normal">
                    © {currentYear} Karyera Mərkəzləri üzrə Vahid İnformasiya
                    Platforması. Bütün hüquqlar qorunur.
                </div>
            </Container>
        </footer>
    );
};
