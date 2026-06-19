"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, MobileNavigation, Overlay } from "@/components/shared";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigations";

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
                <div className="flex items-center justify-between gap-4 h-16">
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
                    <ul className="hidden lg:flex items-center justify-between gap-4 text-sm">
                        {navLinks.map((item, index) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block rounded-lg p-2 text-center transition-colors hover:text-primary",
                                            isActive &&
                                                "bg-blue-100 text-primary"
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex lg:hidden items-center gap-3">
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
