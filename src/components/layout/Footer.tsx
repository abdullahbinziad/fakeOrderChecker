import Link from "next/link";

interface FooterProps {
  links?: Array<{
    label: string;
    href: string;
  }>;
  showPoweredBy?: boolean;
}

export function Footer({
  links = [
    {
      label: "গোপনীয়তা নীতি",
      href: "https://www.flexsoftr.com/privacy-policy",
    },
    { label: "ফেরত নীতি", href: "https://www.flexsoftr.com/refund-policy" },
    { label: "শর্তাবলী", href: "https://www.flexsoftr.com/terms-condition" },
    { label: "ব্লগ", href: "https://www.flexsoftr.com/blog" },
    { label: "যোগাযোগ", href: "https://www.flexsoftr.com/contact-us" },
  ],
  showPoweredBy = true,
}: FooterProps) {
  return (
    <footer className="w-full py-6 sm:py-8 bg-white/95 border-t border-gray-200 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Copyright */}
          <div className="text-gray-700 font-medium text-sm sm:text-base text-center lg:text-left">
            © ২০২৫ Fake Order Checker
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 text-xs sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Powered By */}
          {showPoweredBy && (
            <div className="text-gray-600 text-xs sm:text-sm font-medium text-center lg:text-right">
              <Link href="https://www.flexsoftr.com" target="_blank">
                Powered by{" "}
                <span className="text-blue-600 font-semibold">FLEX SOFTR</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
