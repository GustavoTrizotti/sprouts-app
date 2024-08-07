import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/src/components/ui/sonner";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sprouts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex antialiased h-screen text-black dark:text-white bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950">
              {children}
            </div>
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
