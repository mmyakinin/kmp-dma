import { Container } from "@/components/shared";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UniversityPage() {
    return (
        <Container className="py-10">
            <Link
                href={"/universitetler"}
                className="inline-block text-sm font-medium text-primary mb-4"
            >
                <ArrowLeft className="inline" />{" "}
                Universitetlərə qayıt
            </Link>
            <div className="rounded-2xl hero-bg p-8"></div>
        </Container>
    );
}
