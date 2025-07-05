"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import flexSoftrLogo from "../../../public/img/flexsoftrlogo.webp";

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: Array<{
    label: string;
    href: string;
  }>;
}

export function Header({ logo, navigation = [] }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 bg-white/95 shadow-sm backdrop-blur-sm border-b border-gray-200 transition-all duration-200">
      <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo as string} alt="logo" width={150} height={150} />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          {/* Logo */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}

        <div className="flex items-center space-x-2">
          <Link href="https:flexsoftr.com">
            <p className="text-sm text-gray-500 py-2">Powered By:</p>
            <Image src={flexSoftrLogo} alt="logo" width={150} height={150} />
          </Link>
        </div>
      </div>
    </header>
  );
}
