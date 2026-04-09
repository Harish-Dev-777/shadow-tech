import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/web/nav";
import { ThemeProvider } from "@/components/web/theme-provider";
import Footer from "@/components/web/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadow Tech | Premium Design Agency",
  description:
    "Designing digital experiences that redefine the future. We combine creativity with cutting-edge technology to transform ideas into powerful products.",
  keywords: [
    "Design Agency",
    "Web Development",
    "Next.js",
    "UI/UX Design",
    "Branding",
    "AI Solutions",
  ],
  authors: [{ name: "Shadow Tech" }],
  openGraph: {
    title: "Shadow Tech | Premium Design Agency",
    description:
      "Combining creativity with cutting-edge technology to build powerful Next.js applications.",
    url: "https://shadow-tech.vercel.app",
    siteName: "Shadow Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Tech | Premium Design Agency",
    description: "Designing digital experiences that redefine the future.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
