import React from "react";
import { Container } from "../";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
    return (
        <section
            className={cn(
                "hero-bg text-white py-20 px-4 overflow-hidden",
                className,
            )}
        >
            <Container className="text-center">
                <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                    Karyera mərkəzləri nədir <br /> və sənə nə qazandırır?
                </h1>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Azərbaycanın bütün universitetlərinin karyera mərkəzlərini
                    bir platformada kəşf et. Staj tap, karyeranı planlaşdır,
                    gələcəyini qur.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <button></button>
                </div>
            </Container>
        </section>
    );
};
