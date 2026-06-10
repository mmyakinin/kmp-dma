import React from "react";
import { Container } from "../";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/news";
import { NewsCard } from "../cards/news-card";

export const LatestNewsSection: React.FC = () => {
    return (
        <section className="py-16 bg-muted/5">
            <Container>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold text-primary ">
                        Son xəbərlər
                    </h2>
                    <Link
                        href={"/xeberler"}
                        className="flex gap-2 border-2 border-primary bg-transparent text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4 rounded-lg"
                    >
                        Hamısına bax <ArrowRight size={20} />
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {news.map((item) => (
                        <NewsCard
                            key={item.slug}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            shortDesc={item.shortDesc}
                            slug={item.slug}
                            badge={item.badge}
                            date={item.date}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
