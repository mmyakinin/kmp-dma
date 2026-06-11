"use client";

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    required?: boolean;
    className?: string;
}

const onClickClear = () => {};

export const FormTextarea: React.FC<Props> = ({
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
            <textarea
                {...props}
                className="w-full h-20 border-2 border-border rounded-xl py-2 px-3 resize-none focus-visible:outline-none focus-visible:border-primary transition-all duration-300"
            />
        </div>
    );
};
