import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "../providers/RecaptchaProvider.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HuskyHack 2026",
    description: "Join HuskyHack 2026",
    keywords: ["hackathon", "HuskyHack", "coding competition", "tech event"],
    authors: [{ name: "HuskyHack Team" }],
    openGraph: {
        title: "HuskyHack 2026",
        description: "Join HuskyHack 2026",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RecaptchaProvider>
                    {children}
                </RecaptchaProvider>
            </body>
        </html>
    );
}
