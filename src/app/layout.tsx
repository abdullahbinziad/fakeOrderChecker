import type { Metadata } from "next";
import "./globals.css";
import { hindShiliguri, solaimanLipi, poppins } from "../../public/fonts";

export const metadata: Metadata = {
  title: "Fraud Checker App",
  description: "A comprehensive fraud detection application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${hindShiliguri.variable} ${solaimanLipi.variable} ${poppins.variable} font-hind antialiased bg-white text-gray-900 transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
