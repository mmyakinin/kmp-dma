import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui";

export interface ResourceCardProps {
    icon: LucideIcon;
    title: string;
    badge: string;
    date?: string;
    description: string;
    href?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
    icon,
    title,
    badge,
    date,
    description,
    href,
}) => {
    const Icon = icon;

    return (
        <div className="card-hover flex gap-4 rounded-xl border border-border bg-white p-6">
            <div>
                <Icon size={40} className="text-primary" />
            </div>

            <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-sm font-medium">{title}</h3>

                <div className="flex items-center">
                    <Badge text={badge} />

                    {date && (
                        <span className="ml-2 text-xs font-medium text-muted">
                            {date}
                        </span>
                    )}
                </div>

                <p className="text-xs font-medium leading-relaxed text-muted">
                    {description}
                </p>

                {href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary"
                    >
                        Sayta keç <ArrowRight size={18} className="inline" />
                    </a>
                )}
            </div>
        </div>
    );
};
