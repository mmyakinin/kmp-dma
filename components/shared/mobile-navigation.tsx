"use client";

import { navLinks } from "@/data/navigations";
import { cn } from "@/lib/utils";
import { User, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    pathname: string;
}

export const MobileNavigation: React.FC<Props> = ({
    isOpen,
    onClose,
    pathname,
}) => {
    return (
        <div
            className={cn(
                "fixed top-0 right-0 h-screen w-80 bg-white z-50 shadow-xl transition-transform duration-300",
                isOpen ? "translate-x-0" : "translate-x-full",
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-primary">Menyu</h2>

                <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="p-4">
                <ul className="space-y-2">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className={cn(
                                        "block rounded-lg px-4 py-3 transition-colors",
                                        isActive
                                            ? "bg-blue-100 text-primary"
                                            : "text-muted hover:bg-gray-100",
                                    )}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
