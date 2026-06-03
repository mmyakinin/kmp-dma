import { Container } from "@/components";
import { news } from "@/data/news";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

// export default async function NewsDetailPage({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }) {
//     const { slug } = await params;

//     const item = news.find((item) => item.slug === slug);

//     if (!item) {
//         return notFound();
//     }
//     console.log(item);

//     return (
//         <Container className="max-w-4xl py-10">
//             <Image
//                 src={item.imgSrc}
//                 alt={item.title}
//                 width={600}
//                 height={300}
//                 className="w-full h-64 object-cover rounded-xl mb-4"
//             />
//             <span className="inline-block mb-3 text-primary bg-blue-100 py-1 px-4 rounded-2xl text-xs font-medium">
//                 {item.badge}
//             </span>
//             <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
//             <span className="inline-flex items-center gap-1 text-gray-500 mb-3">
//                 <Calendar size={20} /> {item.date}
//             </span>
//             <p className=" text-gray-500 leading-relaxed mb-3">{item.desc}</p>
//         </Container>
//     );
// }

export default function NewsDetailPage() {
    return "123";
}
