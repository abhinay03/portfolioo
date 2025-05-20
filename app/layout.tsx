import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/ui/cursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinay Sambherao | Full-Stack Developer & Data Scientist",
  description:
    "Professional portfolio of Abhinay Sambherao, a Full-Stack Developer, Data Scientist and Cloud Engineer specializing in data science and cloud technologies.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
