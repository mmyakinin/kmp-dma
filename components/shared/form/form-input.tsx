"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
    className?: string;
}

const onClickClear = () => {};

export const FormInput: React.FC<Props> = ({
    label,
    required,
    className,
    ...props
}) => {
    return (
        <div className={cn("w-full", className)}>
            <label htmlFor={props.id} className="block text-sm text-muted mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props}
                className="w-full border-2 border-border rounded-xl py-2 pl-3 pr-10 focus-visible:outline-none focus-visible:border-primary transition-all duration-300"
            />
        </div>
    );
};
