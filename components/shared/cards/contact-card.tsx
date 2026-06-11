import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React from "react";

export interface ContactCardProps {
    icon: LucideIcon;
    title: string;
    desc: string;
    buttonText: string;
    href: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
    icon,
    title,
    desc,
    buttonText,
    href,
}) => {
    const Icon = icon;

    return (
        <div
            className={
                "bg-white border border-border rounded-xl overflow-hidden p-6 card-hover"
            }
        >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary mb-4">
                <Icon size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
                {desc}
            </p>
            <Button variant={"outline"} href={href}>
                {buttonText}
            </Button>
        </div>
    );
};
