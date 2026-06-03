import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
}) => {
    return (
        <div className={cn("max-w-7xl mx-auto px-4", className)}>
            {children}
        </div>
    );
};
