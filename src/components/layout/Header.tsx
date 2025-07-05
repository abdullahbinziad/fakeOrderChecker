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
    <header className="w-full py-4 sm:py-6 bg-white/95 shadow-sm backdrop-blur-sm border-b border-gray-200 transition-all duration-200">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo as string}
                alt="logo"
                width={120}
                height={120}
                className="w-24 h-12 sm:w-32 sm:h-16 object-contain"
              />
            </Link>
          </div>

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
          <div className="md:hidden flex items-center">
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

          {/* Powered By Section */}
          <div className="hidden sm:flex items-center space-x-2">
            <Link
              href="https:flexsoftr.com"
              className="flex items-center space-x-2"
            >
              <p className="text-sm text-gray-500">Powered By:</p>
              <Image
                src={flexSoftrLogo}
                alt="FlexSoftr logo"
                width={120}
                height={120}
                className="w-20 h-10 sm:w-24 sm:h-12 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
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
            {/* Mobile Powered By */}
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-200">
              <Link
                href="https:flexsoftr.com"
                className="flex items-center space-x-2"
              >
                <p className="text-sm text-gray-500">Powered By:</p>
                <Image
                  src={flexSoftrLogo}
                  alt="FlexSoftr logo"
                  width={200}
                  height={200}
                  className="w-44 h-44 object-contain"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
