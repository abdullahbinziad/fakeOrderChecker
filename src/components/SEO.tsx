import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEO({
  title = "Fake Order Checker - ফেইক অর্ডার চেকার | Free Bangladeshi eCommerce Fraud Detection Tool",
  description = "Free tool for Bangladeshi eCommerce businesses to detect fake customers and analyze order success rates. Check delivery vs cancellation ratios, powered by FLEX SOFTR. 100% free fraud detection for online businesses.",
  keywords = "fake order checker, fraud detection, ecommerce fraud, bangladesh online business, fake customer detection, order success rate, delivery ratio, cancellation analysis, free fraud tool, bangladeshi ecommerce, online fraud prevention, customer verification, order validation, ecommerce security, business fraud protection",
  image = "https://flexsoftr.com/og-image.jpg",
  url = "https://flexsoftr.com",
  type = "website",
  author = "FLEX SOFTR",
  publishedTime,
  modifiedTime,
  section = "eCommerce Fraud Detection",
  tags = [
    "fraud detection",
    "ecommerce",
    "bangladesh",
    "fake order",
    "customer verification",
  ],
}: SEOProps) {
  const siteName = "Fake Order Checker";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="bn, en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Viewport and Mobile Optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
      />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Fake Order Checker - Free Bangladeshi eCommerce Fraud Detection Tool"
      />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="bn_BD" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="Fake Order Checker - Free Bangladeshi eCommerce Fraud Detection Tool"
      />
      <meta name="twitter:creator" content="@flexsoftr" />
      <meta name="twitter:site" content="@flexsoftr" />

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Fake Order Checker",
            alternateName: "ফেইক অর্ডার চেকার",
            description: description,
            url: url,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BDT",
            },
            author: {
              "@type": "Organization",
              name: "FLEX SOFTR",
              url: "https://flexsoftr.com",
            },
            publisher: {
              "@type": "Organization",
              name: "FLEX SOFTR",
              url: "https://flexsoftr.com",
              logo: {
                "@type": "ImageObject",
                url: "https://flexsoftr.com/logo.png",
              },
            },
            creator: {
              "@type": "Organization",
              name: "FLEX SOFTR",
            },
            inLanguage: ["bn", "en"],
            audience: {
              "@type": "Audience",
              audienceType: "eCommerce Business Owners",
            },
            keywords: keywords,
            featureList: [
              "Fake customer detection",
              "Order success rate analysis",
              "Delivery vs cancellation ratio",
              "Free fraud detection tool",
              "Bangladeshi eCommerce support",
            ],
            screenshot: image,
            softwareVersion: "1.0.0",
            datePublished: publishedTime || "2025-01-01",
            dateModified: modifiedTime || "2025-01-01",
          }),
        }}
      />

      {/* Additional Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Fake Order Checker",
            description:
              "Free fraud detection tool for Bangladeshi eCommerce businesses",
            url: url,
            softwareVersion: "1.0.0",
            operatingSystem: "Web Browser",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BDT",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "150",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Additional Meta Tags for Bangladeshi Market */}
      <meta name="geo.region" content="BD" />
      <meta name="geo.country" content="Bangladesh" />
      <meta name="geo.placename" content="Bangladesh" />
      <meta name="ICBM" content="23.6850, 90.3563" />

      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Additional SEO for eCommerce */}
      <meta name="product:price:amount" content="0" />
      <meta name="product:price:currency" content="BDT" />
      <meta name="product:availability" content="in stock" />
      <meta name="product:condition" content="new" />

      {/* Language and Region Specific */}
      <meta name="language" content="Bengali, English" />
      <meta name="region" content="Bangladesh" />
      <meta name="target-country" content="BD" />

      {/* Content Type and Category */}
      <meta name="content-type" content="text/html; charset=utf-8" />
      <meta name="content-language" content="bn, en" />
      <meta name="category" content="Business Tools" />
      <meta name="subcategory" content="Fraud Detection" />

      {/* Social Media Additional Tags */}
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={image} />
      <meta
        property="og:updated_time"
        content={modifiedTime || "2025-01-01T00:00:00+06:00"}
      />

      {/* Twitter Additional Tags */}
      <meta name="twitter:label1" content="Price" />
      <meta name="twitter:data1" content="Free" />
      <meta name="twitter:label2" content="Category" />
      <meta name="twitter:data2" content="Business Tools" />

      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="YOUR_GOOGLE_VERIFICATION_CODE"
      />

      {/* Yandex Webmaster */}
      <meta
        name="yandex-verification"
        content="YOUR_YANDEX_VERIFICATION_CODE"
      />

      {/* Additional Performance Tags */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* RSS Feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${siteName} RSS Feed`}
        href="/rss.xml"
      />

      {/* Sitemap */}
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/sitemap.xml"
      />
    </Head>
  );
}
