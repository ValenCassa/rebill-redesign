import type { Metadata } from "next";
import "./globals.css";
import ogImage from "@/public/og-image.jpeg";

export const metadata: Metadata = {
  title: "Rebill Checkout",
  description: "Checkout de pago en línea",
  openGraph: {
    title: "Rebill Checkout",
    description: "Checkout de pago en línea",
    images: [ogImage.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebill Checkout",
    description: "Checkout de pago en línea",
    images: [ogImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
