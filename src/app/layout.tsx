import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`w-full h-full antialiased ${inter.variable}`}>
      <body className=" flex flex-col overflow-x-hidden overflow-y-auto bg-background text-foreground font-inter antialiased">
        {children}
      </body>
    </html>
  );
}