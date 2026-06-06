"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface Props {
    className?: string;
}

export const navLinks = [
    {
        title: "Ana səhifə",
        href: "/",
    },
    {
        title: "Universitetlər",
        href: "/universitetler",
    },
    {
        title: "Kadr İndeksi",
        href: "/kadr-indeksi",
    },
    {
        title: "Faydalı resurslar",
        href: "/faydali-resurslar",
    },
    {
        title: "Xəbərlər",
        href: "/xeberler",
    },
    {
        title: "Alətlər",
        href: "/aletler",
    },
    {
        title: "Alo Karyera müraciət",
        href: "/alo-karyera-muraciet",
    },
];

export const Header: React.FC<Props> = ({ className }) => {
    const pathname = usePathname();

    return (
        <header
            className={cn("bg-white shadow-md sticky top-0 z-50", className)}
        >
            <Container>
                <div className="flex items-center justify-between gap-3 h-16">
                    {/* Left Side - Logo */}
                    <Link href={"/"} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold bg-primary">
                            KM
                        </div>
                        <div className="hiddden sm:block font-medium">
                            <h2 className="text-base text-primary">
                                Karyera Mərkəzləri
                            </h2>
                            <p className="text-xs text-muted">
                                Vahid İnformasiya Platforması
                            </p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <ul className="flex items-center gap-1">
                        {navLinks.map((item, index) => {
                            const isActive = item.href === pathname;

                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-sm text-center px-3 py-2 rounded-lg transition-all duration-500 hover:bg-blue-100 hover:text-primary",
                                            isActive
                                                ? "text-primary"
                                                : "text-muted",
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-1 rounded-lg text-sm text-primary font-normal bg-blue-100 px-3 py-2">
                            <User size={18} /> <span>Giriş</span>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
