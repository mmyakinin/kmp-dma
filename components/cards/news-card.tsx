import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

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
            className="block bg-white rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
                        <span className="flex items-center gap-1  text-sm font-medium text-primary ">
                            Oxu <ArrowRight size={18} />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};
