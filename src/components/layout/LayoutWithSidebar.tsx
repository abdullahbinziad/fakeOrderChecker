"use client";
import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

interface LayoutWithSidebarProps {
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
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

export function LayoutWithSidebar({
  children,
  sidebarContent,
  headerProps = { logo: "/img/logo.png" },
  footerProps = {},
  className = "",
}: LayoutWithSidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 transition-all duration-300 ${className}`}
    >
      <Header {...headerProps} />

      <div className="flex-1 flex">
        {sidebarContent && (
          <Sidebar
            isOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {sidebarContent}
          </Sidebar>
        )}

        <main className="flex-1 flex flex-col">{children}</main>
      </div>

      <Footer {...footerProps} />
    </div>
  );
}
