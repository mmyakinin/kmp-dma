import React from "react";
import { LucideIcon } from "lucide-react";

export interface ToolCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    buttonText: string;
    href: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
    icon,
    title,
    description,
    buttonText,
    href,
}) => {
    const Icon = icon;

    return (
        <div className="bg-white border border-border rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                <Icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
                {description}
            </p>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground text-center rounded-xl py-2.5 mt-auto"
            >
                {buttonText}
            </a>
        </div>
    );
};
