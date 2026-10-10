import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/components/ContactModalContext";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import SiteNav from "@/components/SiteNav";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "@/components/brand-effects.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alias AI — Content That Replicates You",
  description: "Alias AI is a content intelligence and personal branding agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <CustomCursor />
        <SmoothScroll>
          <ContactModalProvider>
            <SiteNav />
            <main className="flex-1">{children}</main>
            <Footer />
            <ContactModal />
          </ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
