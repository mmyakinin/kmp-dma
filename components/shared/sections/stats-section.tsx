"use client";

import React from "react";
import { Container } from "../";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
    { id: 1, value: 35, label: "Universitet", suffix: "+" },
    { id: 2, value: 12000, label: "Aktiv tələbə", suffix: "+" },
    { id: 3, value: 500, label: "Tərəfdaş şirkət", suffix: "+" },
    { id: 4, value: 78, label: "Məzun məşğulluq faizi", suffix: "%" },
];

export const StatsSection: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <section className="bg-white border-b border-border">
            <Container className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                {statsData.map((item) => (
                    <div key={item.id} ref={ref}>
                        <div className="text-3xl text-primary font-bold">
                            {inView && (
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={3}
                                    suffix={item.suffix}
                                />
                            )}
                        </div>
                        <div className="text-sm text-muted mt-1">
                            {item.label}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
};
