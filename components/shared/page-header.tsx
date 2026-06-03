import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    hasIcon?: boolean;
    hasBadge?: boolean;
    hasDesc?: boolean;
    icon: React.ReactNode;
    title?: string;
    badge?: string;
    desc?: string;
    textCenter?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    hasIcon = true,
    hasBadge = true,
    hasDesc = true,
    title,
    badge,
    icon,
    desc,
    textCenter = false,
}) => {
    return (
        <div className={cn("mb-8", textCenter ? "text-center" : "")}>
            <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 rounded-xl">
                {icon}
            </div>

            <p className="text-secondary text-sm tracking-wider uppercase font-semibold mb-2">
                {badge}
            </p>

            <h1 className="text-primary text-3xl font-semibold mb-2">
                {title}
            </h1>

            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                {desc}
            </p>
        </div>
    );
};
