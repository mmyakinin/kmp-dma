import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Karyera Mərkəzləri üzrə Vahid İnformasiya Platforması",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
