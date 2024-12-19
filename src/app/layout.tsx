import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Header } from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-inter",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "Voice Textify",
  description: "Voice Textify app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`antialiased ${inter.variable} ${lobster.variable}`}
      >
        <body className="overflow-x-hidden overflow-y-auto bg-background text-foreground font-inter antialiased">
          <div className="grid grid-rows-[auto_1fr] h-screen">
            <Header />

            <div className="w-min h-min absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
              <SignedOut>
                <SignIn routing="hash" />
              </SignedOut>
            </div>

            <SignedIn>{children}</SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
