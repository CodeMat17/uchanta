import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukwu Uchanta | Content Creator",
  description:
    "I am a passionate educator, content creator, and programme coordinator dedicated to making a positive impact in the lives of others.",

  twitter: {
    card: "summary",
    title: "Chukwu Uchanta | Content Creator",
    description:
      "I am a passionate educator, content creator, and programme coordinator dedicated to making a positive impact in the lives of others.",
  },
  openGraph: {
    title: "Chukwu Uchanta | Content Creator",
    description:
      "I am a passionate educator, content creator, and programme coordinator dedicated to making a positive impact in the lives of others.",
    url: "https://uchanta.com.ng",
    // siteName: "Portfolio website",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1718144392/chanty/chanty.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1718144392/chanty/chanty.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    // authors: ["Matthew Chukwu"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
