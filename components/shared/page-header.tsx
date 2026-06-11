import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    icon?: React.ReactNode;
    title: string;
    badge?: string;
    desc?: string;
    textCenter?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    badge,
    icon,
    desc,
    textCenter = false,
}) => {
    return (
        <div className={cn("mb-8", textCenter ? "text-center" : "")}>
            {icon && (
                <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 rounded-xl">
                    {icon}
                </div>
            )}

            {badge && (
                <p className="text-secondary text-sm tracking-wider uppercase font-semibold mb-2">
                    {badge}
                </p>
            )}

            <h1 className="text-primary text-3xl font-semibold mb-2">
                {title}
            </h1>

            {desc && (
                <p
                    className={cn(
                        "text-muted leading-relaxed",
                        textCenter ? " max-w-xl mx-auto" : "",
                    )}
                >
                    {desc}
                </p>
            )}
        </div>
    );
};
