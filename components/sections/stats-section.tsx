"use client";

import React from "react";
import { Container } from "../";
import CountUp from "react-countup";

const statsData = [
    { id: 1, value: 35, label: "Universitet", suffix: "+" },
    { id: 2, value: 12000, label: "Aktiv tələbə", suffix: "+" },
    { id: 3, value: 500, label: "Tərəfdaş şirkət", suffix: "+" },
    { id: 4, value: 78, label: "Məzun məşğulluq faizi", suffix: "%" },
];

// ToDo: Добавить библиотку react-intersection-observer чтобы работал enableScrollSpy

export const StatsSection: React.FC = () => {
    return (
        <section className="bg-white border-b border-gray-100">
            <Container className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                {statsData.map((item) => (
                    <div key={item.id}>
                        <div className="text-3xl text-primary font-bold">
                            <CountUp
                                start={0}
                                end={item.value}
                                duration={3}
                                suffix={item.suffix}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                            />
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                            {item.label}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
};
