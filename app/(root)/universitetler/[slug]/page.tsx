import { Container } from "@/components/shared";
import { Badge } from "@/components/ui";
import { ArrowLeft, Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UniversityPage() {
    return (
        <Container className="py-10">
            <Link
                href={"/universitetler"}
                className="inline-block text-sm font-medium text-primary mb-4"
            >
                <ArrowLeft className="inline" /> Universitetlərə qayıt
            </Link>
            <div className="relative rounded-2xl hero-bg p-8 text-white">
                <Image
                    src={"/bdu-logo.png"}
                    alt="Bakı Dövlət Universiteti"
                    width={90}
                    height={90}
                />
                <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
                    Bakı Dövlət Universiteti
                </h1>
                <div className="flex flex-wrap gap-2">
                    <Badge text={"Bakı"} />
                    <Badge text={"Dövlət"} />
                    <Badge text={"Ali Məktəb"} />
                </div>
                <p className="text-sm opacity-80 max-w-2xl leading-relaxed">
                    Azərbaycanın ən köhnə və nüfuzlu ali təhsil müəssisəsi.
                    1919-cu ildə təsis edilmiş, 15.000-dən çox tələbəyə ev
                    sahibliyi edir.
                </p>
                <div className="flex flex-wrap gap-4 text-sm opacity-80 mt-4">
                    <span className="inline-flex items-center gap-2">
                        <Phone size={20} />
                        +994 12 439 08 01
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Mail size={20} />
                        info@bsu.edu.az
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Globe size={20} />
                        bsu.edu.az
                    </span>
                </div>
            </div>
        </Container>
    );
}
