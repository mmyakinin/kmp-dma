import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
    imgSrc: string;
    title: string;
    shortDesc: string;
    slug: string;
    badge: string;
    date: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
    imgSrc,
    title,
    shortDesc,
    slug,
    badge,
    date,
}) => {
    return (
        <Link
            href={`/xeberler/${slug}`}
            className="block bg-white rounded-xl border border-border overflow-hidden card-hover"
        >
            <article>
                <Image
                    src={imgSrc}
                    alt={title}
                    width={600}
                    height={300}
                    className="w-full h-44 object-cover"
                />
                <div className="p-6">
                    <Badge text={badge} />
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-xs text-muted mb-3">{shortDesc}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-muted">{date}</span>
                        <span className="text-sm font-medium text-primary ">
                            Oxu <ArrowRight size={18} className="inline" />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};
