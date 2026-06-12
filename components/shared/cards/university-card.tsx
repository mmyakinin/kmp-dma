import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { UniversityProps } from "@/@types/university.types.";
import Link from "next/link";

interface Props extends UniversityProps {
    className?: string;
}

export const UniversityCard: React.FC<Props> = ({
    id,
    slug,
    name,
    description,
    city,
    type,
    careerCenter,
    imageUrl,
    className,
}) => {
    return (
        <Link
            href={`/universitetler/${slug}`}
            className={cn(
                "card-hover bg-white border border-border rounded-xl overflow-hidden cursor-pointer",
                className,
            )}
        >
            <div className="h-2 bg-primary"></div>
            <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-blue-100">
                        <Image
                            src={imageUrl}
                            alt="BDU"
                            width={35}
                            height={35}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">{name}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                            <Badge text={city} />
                            <Badge text={type} />
                        </div>
                    </div>
                </div>
                <p className="text-xs text-muted font-normal leading-relaxed mb-4">
                    {description}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">
                        {careerCenter}
                    </span>
                    <span className="text-sm font-medium text-primary ">
                        Ətraflı <ArrowRight size={18} className="inline" />
                    </span>
                </div>
            </div>
        </Link>
    );
};
