"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { navLinks } from "@/data/navigations";
import { Overlay } from "./overlay";
import { MobileNavigation } from "./mobile-navigation";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <div className="hidden sm:block font-medium">
                            <h2 className="text-base text-primary">
                                Karyera Mərkəzləri
                            </h2>
                            <p className="text-xs text-muted">
                                Vahid İnformasiya Platforması
                            </p>
                        </div>
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-1 rounded-lg text-sm text-primary font-normal bg-blue-100 px-3 py-2">
                            <User size={18} /> <span>Giriş</span>
                        </button>
                        <button
                            className="block"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu size={32} className="text-primary" />
                        </button>
                    </div>
                </div>
            </Container>
            <Overlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <MobileNavigation
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                pathname={pathname}
            />
        </header>
    );
};
