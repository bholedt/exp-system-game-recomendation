import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import logo from "@/assets/exp-system-logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expert System: Game Recomendation",
  description: "App for search the game recomendation base on facts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" relative size-50 mx-auto mt-10">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              priority
              className="object-cover"
            />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
