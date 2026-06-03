import { Container } from "@/components";
import { NewsCard } from "@/components/cards/news-card";
import { news } from "@/data/news";

export default function NewsPage() {
    return (
        <Container className="py-10">
            <div className="mb-8">
                <p className="text-secondary text-sm tracking-wider uppercase font-semibold mb-2">
                    Aktual
                </p>

                <h1 className="text-primary text-3xl font-semibold mb-2">
                    Xəbərlər
                </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    );
}
