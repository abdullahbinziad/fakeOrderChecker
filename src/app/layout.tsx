import type { Metadata } from "next";
import "./globals.css";
import { hindShiliguri, solaimanLipi, poppins } from "../../public/fonts";

export const metadata: Metadata = {
  title: "Fraud Checker App",
  description: "A comprehensive fraud detection application",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#2563eb",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Fraud Checker App",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fraud Checker App" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${hindShiliguri.variable} ${solaimanLipi.variable} ${poppins.variable} font-hind antialiased bg-white text-gray-900 transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
