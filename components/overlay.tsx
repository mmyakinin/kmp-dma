import { cn } from "@/lib/utils";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const Overlay = ({ isOpen, onClose }: Props) => {
    return (
        <div
            onClick={onClose}
            className={cn(
                "fixed inset-0 bg-black/50 z-40 transition-opacity",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
            )}
        />
    );
};
