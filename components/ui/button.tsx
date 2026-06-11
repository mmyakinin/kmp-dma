import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline" | "secondary";
    className?: string;
}

export const Button = ({
    children,
    href,
    variant = "primary",
    className,
}: ButtonProps) => {
    const styles = {
        primary: "bg-primary text-white hover:bg-primary-hover",
        outline:
            "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
        secondary:
            "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary",
    };

    const commonClasses = cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
        styles[variant],
        className,
    );

    if (href) {
        return (
            <Link href={href} className={commonClasses}>
                {children}
            </Link>
        );
    }

    return <button className={commonClasses}>{children}</button>;
};
