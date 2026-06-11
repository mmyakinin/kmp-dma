import { Container } from "@/components/shared";
import { Badge } from "@/components/ui/";
import { news } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const item = news.find((item) => item.slug === slug);

    if (!item) {
        return notFound();
    }
    console.log(item);

    return (
        <Container className="max-w-4xl py-10">
            <Image
                src={item.imgSrc}
                alt={item.title}
                width={600}
                height={300}
                className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <Badge text={item.badge} />
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <span className="inline-flex items-center gap-1 text-muted mb-3">
                <Calendar size={20} /> {item.date}
            </span>
            <p className=" text-muted leading-relaxed mb-3">{item.desc}</p>
        </Container>
    );
}
