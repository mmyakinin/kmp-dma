import React from "react";

interface Props {
    label: string;
    value: number;
}

export const SkillProgressBar: React.FC<Props> = ({ label, value }) => {
    return (
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">{label}</span>
                <span className="font-semibold text-primary">{value}/100</span>
            </div>
            <div className="h-2 rounded-lg overflow-hidden bg-gray-300">
                <div
                    className="h-full bg-primary"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
};
