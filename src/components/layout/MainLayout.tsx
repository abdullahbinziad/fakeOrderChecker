import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "@/components/SEO";

interface MainLayoutProps {
  children: React.ReactNode;
  headerProps?: {
    logo?: React.ReactNode;
    navigation?: Array<{
      label: string;
      href: string;
    }>;
  };
  footerProps?: {
    links?: Array<{
      label: string;
      href: string;
    }>;
    showPoweredBy?: boolean;
  };
  className?: string;
}

export function MainLayout({
  children,
  headerProps = { logo: "/img/logo.png" },
  footerProps = {},
  className = "",
}: MainLayoutProps) {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 transition-all duration-300 ${className}`}
    >
      <SEO
        title="Custom Page Title"
        description="Custom description"
        url="https://flexsoftr.com/custom-page"
        image="https://flexsoftr.com/custom-image.jpg"
      />
      <Header {...headerProps} />

      <main className="flex-1 flex flex-col">{children}</main>

      <Footer {...footerProps} />
    </div>
  );
}
