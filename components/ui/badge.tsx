import React from "react";

interface Props {
    text: string;
}

export const Badge: React.FC<Props> = ({ text }) => {
    return (
        <span className="inline-block mb-3 text-primary bg-blue-100 py-1 px-4 rounded-2xl text-xs font-medium">
            {text}
        </span>
    );
};
