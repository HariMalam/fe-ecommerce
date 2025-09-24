import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Shopmate — Smart online shopping",
    template: "%s | Shopmate",
  },
  description:
    "Shopmate is your go-to online store for quality products at great prices. Shop electronics, fashion, home & more with fast shipping and secure checkout.",
  keywords: [
    "Shopmate",
    "online store",
    "ecommerce",
    "shopping",
    "deals",
    "discounts",
    "fashion",
    "electronics",
    "home essentials",
    "secure checkout",
    "fast shipping",
  ],
  applicationName: "Shopmate",
  authors: [{ name: "Shopmate Team" }],
  creator: "Shopmate",
  publisher: "Shopmate",
  category: "shopping",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    url: "/",
    title: "Shopmate — Smart online shopping",
    description:
      "Shop smarter with Shopmate. Discover top products, great prices, and secure checkout.",
    siteName: "Shopmate",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "@shopmate",
    creator: "@shopmate",
    title: "Shopmate — Smart online shopping",
    description:
      "Discover top products and great prices at Shopmate with fast shipping and secure checkout.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white text-gray-900">
          <AppProvider>
            <Header />

            {children}

            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="colored"
            />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
