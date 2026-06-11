"use client";

import React from "react";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { FormInput, FormTextarea } from ".";

export const ContactForm: React.FC = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log("submit");
            }}
        >
            <div className="grid md:grid-cols-2 gap-4">
                <FormInput
                    id="fullName"
                    label={"Ad və Soyad"}
                    placeholder="Adınız"
                    required
                />
                <FormInput
                    id="phone"
                    label={"Telefon"}
                    required
                    placeholder="+994 ..."
                />
                <FormInput
                    id="email"
                    label={"E-poçt"}
                    type="email"
                    placeholder="example@gmail.com"
                    required
                />
                <FormInput id="topic" label={"Mövzu"} required />
                <FormTextarea
                    id="message"
                    label="Müraciətin mətni"
                    placeholder="Müraciətinizi yazın ..."
                    required
                    className="md:col-span-2"
                />
                <div className="md:col-span-2">
                    <Button className="py-3.5 px-8 text-base max-[576px]:w-full">
                        Göndər <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </form>
    );
};
