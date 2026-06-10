import { Container, NewsCard, PageHeader } from "@/components/shared";
import { news } from "@/data/news";

export default function NewsPage() {
    return (
        <Container className="py-10">
            <PageHeader title={"Xəbərlər"} badge="Aktual" />
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
