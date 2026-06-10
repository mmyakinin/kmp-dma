import React from "react";

import { Container } from "../";
import Link from "next/link";

export const CareerPlanningSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <Container className="text-center">
                <h2 className="text-3xl text-primary font-semibold mb-4">
                    Karyeranı bu gün planlaşdır
                </h2>
                <p className="text-muted mb-8">
                    Alo Karyera xidməti vasitəsilə peşəkar karyera məsləhəti al,
                    CV-ni hazırla və staj tap.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <Link
                        href={"./alo-karyera-muraciet"}
                        className="bg-primary text-primary-foreground font-medium py-3 px-6 rounded-lg"
                    >
                        Alo Karyeraya müraciət et
                    </Link>
                    <Link
                        href={"./kadr-indeksi"}
                        className="bg-transparent text-primary font-medium border-2 border-primary py-3 px-6 rounded-lg transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
                    >
                        Kadr İndeksini öyrən
                    </Link>
                </div>
            </Container>
        </section>
    );
};
