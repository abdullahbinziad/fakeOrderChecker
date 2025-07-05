// SEO Component Usage Examples
// This file shows different ways to use the SEO component

import { SEO } from "./SEO";

// Example 1: Basic usage with default values
export function BasicSEOExample() {
  return (
    <>
      <SEO />
      {/* Your page content */}
    </>
  );
}

// Example 2: Custom title and description
export function CustomSEOExample() {
  return (
    <>
      <SEO
        title="About Fake Order Checker"
        description="Learn more about our free fraud detection tool for Bangladeshi eCommerce businesses."
        url="https://flexsoftr.com/about"
      />
      {/* Your page content */}
    </>
  );
}

// Example 3: Article/Blog post SEO
export function ArticleSEOExample() {
  return (
    <>
      <SEO
        title="How to Detect Fake Orders in eCommerce"
        description="Complete guide on detecting and preventing fake orders in your Bangladeshi eCommerce business."
        type="article"
        publishedTime="2025-01-15T10:00:00+06:00"
        modifiedTime="2025-01-15T10:00:00+06:00"
        author="FLEX SOFTR Team"
        section="eCommerce Guides"
        tags={["ecommerce", "fraud detection", "business tips", "bangladesh"]}
        image="https://www.flexsoftr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30868259.png&w=384&q=75"
        url="https://flexsoftr.com/blog/"
      />
      {/* Your article content */}
    </>
  );
}

// Example 5: Contact page SEO
export function ContactSEOExample() {
  return (
    <>
      <SEO
        title="Contact Us - Fake Order Checker Support"
        description="Get in touch with our support team for help with fraud detection and eCommerce security."
        url="https://www.flexsoftr.com/contact-us"
        image="https://www.flexsoftr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30868259.png&w=384&q=75"
      />
      {/* Your contact page content */}
    </>
  );
}

// Example 6: Privacy Policy page SEO
export function PrivacyPolicySEOExample() {
  return (
    <>
      <SEO
        title="Privacy Policy - Fake Order Checker"
        description="Our privacy policy explains how we protect your data when using our fraud detection tool."
        type="website"
        url="https://www.flexsoftr.com/privacy-policy"
        publishedTime="2025-01-01T00:00:00+06:00"
        modifiedTime="2025-01-01T00:00:00+06:00"
      />
      {/* Your privacy policy content */}
    </>
  );
}

// Example 7: FAQ page SEO
export function FAQSEOExample() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions - Fake Order Checker"
        description="Find answers to common questions about our fraud detection tool and how to use it effectively."
        url="https://flexsoftr.com/contact-us"
        keywords="faq, frequently asked questions, fraud detection help, ecommerce support, bangladesh business tools"
      />
      {/* Your FAQ content */}
    </>
  );
}

// Example 8: Landing page with specific targeting
export function LandingPageSEOExample() {
  return (
    <>
      <SEO
        title="Free Fraud Detection Tool for Bangladeshi eCommerce | Fake Order Checker"
        description="Protect your online business from fake orders. Free tool for Bangladeshi eCommerce owners. Check customer reliability instantly."
        keywords="bangladeshi ecommerce, free fraud tool, online business protection, fake order detection, customer verification, delivery success rate"
        image="https://www.flexsoftr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30868259.png&w=384&q=75"
        url="https://flexsoftr.com"
        publishedTime="2025-01-01T00:00:00+06:00"
        modifiedTime="2025-01-01T00:00:00+06:00"
      />
      {/* Your landing page content */}
    </>
  );
}

// Example 10: Tutorial/How-to page SEO
export function TutorialSEOExample() {
  return (
    <>
      <SEO
        title="How to Use Fake Order Checker - Step by Step Guide"
        description="Learn how to use our free fraud detection tool effectively. Step-by-step guide for Bangladeshi eCommerce businesses."
        type="article"
        url="https://flexsoftr.com/tutorials"
        image="https://www.flexsoftr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30868259.png&w=384&q=75"
        publishedTime="2025-01-10T09:00:00+06:00"
        modifiedTime="2025-01-10T09:00:00+06:00"
        section="Tutorials"
        tags={["tutorial", "how to", "fraud detection", "guide", "bangladesh"]}
      />
      {/* Your tutorial content */}
    </>
  );
}
