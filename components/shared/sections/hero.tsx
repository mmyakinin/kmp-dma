import React from "react";
import { Container } from "../";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
    return (
        <section
            className={cn(
                "hero-bg text-white py-20 overflow-hidden",
                className,
            )}
        >
            <Container className="text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                    Karyera mərkəzləri nədir <br /> və sənə nə qazandırır?
                </h1>
                <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                    Azərbaycanın bütün universitetlərinin karyera mərkəzlərini
                    bir platformada kəşf et. Staj tap, karyeranı planlaşdır,
                    gələcəyini qur.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <Button
                        href={"./universitetler"}
                        className="py-3.5 px-8 text-base shadow-2xl"
                    >
                        Universitetini seç <ArrowRight className="ml-2" />
                    </Button>
                    <Button
                        href={"./aletler"}
                        variant="secondary"
                        className="py-3.5 px-8 text-base"
                    >
                        Alətləri kəşf et
                    </Button>
                </div>
            </Container>
        </section>
    );
};
