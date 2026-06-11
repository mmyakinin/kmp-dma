import React from "react";

import { Container } from "../";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                    <Button
                        href={"./alo-karyera-muraciet"}
                        className="py-3.5 px-8 text-base"
                    >
                        Alo Karyeraya müraciət et
                    </Button>
                    <Button
                        href={"./kadr-indeksi"}
                        variant="outline"
                        className="py-3.5 px-8 text-base"
                    >
                        Kadr İndeksini öyrən
                    </Button>
                </div>
            </Container>
        </section>
    );
};
