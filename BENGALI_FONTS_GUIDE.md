# Bengali Fonts Guide

This project now uses multiple Bengali fonts for better typography and user experience. Here's how to use them effectively:

## Available Fonts

### 1. Hind Siliguri (Primary Bengali Font)

A modern, clean Bengali font with multiple weights.

**Available Weights:**

- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

**CSS Classes:**

```css
.font-hind              /* Default weight (400) */
/* Default weight (400) */
.font-hind-light        /* Weight 300 */
.font-hind-regular      /* Weight 400 */
.font-hind-medium       /* Weight 500 */
.font-hind-semibold     /* Weight 600 */
.font-hind-bold; /* Weight 700 */
```

**Usage Examples:**

```jsx
// Headings
<h1 className="font-hind-bold text-2xl">মূল শিরোনাম</h1>
<h2 className="font-hind-semibold text-xl">উপ-শিরোনাম</h2>

// Body text
<p className="font-hind-regular">সাধারণ পাঠ্য</p>
<p className="font-hind-medium">মাঝারি গুরুত্বের পাঠ্য</p>

// Light text
<span className="font-hind-light">হালকা পাঠ্য</span>
```

### 2. SolaimanLipi (Traditional Bengali Font)

A classic Bengali font with traditional styling.

**CSS Class:**

```css
.font-solaiman
```

**Usage Examples:**

```jsx
// Brand name or logo
<div className="font-solaiman text-3xl font-bold">FraudGuard</div>

// Important messages
<div className="font-solaiman text-lg">গুরুত্বপূর্ণ বার্তা</div>

// Decorative text
<span className="font-solaiman">সাজানো পাঠ্য</span>
```

### 3. Poppins (Supporting Font)

A versatile font that works well with Bengali text for English content.

**CSS Class:**

```css
.font-poppins
```

**Usage Examples:**

```jsx
// English text in Bengali interface
<span className="font-poppins">Courier Name</span>

// Mixed content
<div className="font-poppins">Steadfast, Pathao, RedX</div>
```

## Font Usage Guidelines

### 1. Hierarchy

- **Main Headings**: Use `font-solaiman` for brand identity
- **Section Headings**: Use `font-hind-bold` or `font-hind-semibold`
- **Body Text**: Use `font-hind-regular` for readability
- **Captions/Labels**: Use `font-hind-light` for subtle text
- **Buttons**: Use `font-hind-medium` or `font-hind-semibold`

### 2. Current Implementation

The app now uses these fonts strategically:

```jsx
// Header/Brand
<div className="font-solaiman">FraudGuard</div>

// Main heading
<div className="font-hind-bold">ফেইক অর্ডার চেক করুন</div>

// Subtitle
<div className="font-hind-medium">মোবাইল নম্বর দিয়ে ফ্রড রিস্ক চেক করুন</div>

// Input placeholder
<input className="font-hind-regular" placeholder="যেমন: 01772065894" />

// Button text
<button className="font-hind-semibold">চেক করুন</button>

// Table headers
<th className="font-hind-semibold">কুরিয়ার</th>

// Table data
<td className="font-hind-regular">{data}</td>

// Courier names (English)
<span className="font-poppins">Steadfast</span>

// Success messages
<div className="font-solaiman">চমৎকার</div>

// Footer links
<a className="font-hind-light">গোপনীয়তা নীতি</a>
```

### 3. Component Updates

All UI components have been updated to use appropriate Bengali fonts:

- **Input**: `font-hind-medium` for labels, `font-hind-regular` for input text
- **Button**: `font-hind-medium` for button text
- **Card**: `font-hind-semibold` for titles, `font-hind-regular` for descriptions
- **Loading Spinner**: `font-hind-regular` for loading text

## CSS Variables

The fonts are available as CSS variables:

```css
:root {
  --font-hind-shiliguri: var(--font-hind-shiliguri);
  --font-solaiman-lipi: var(--font-solaiman-lipi);
  --font-poppins: var(--font-poppins);
}
```

## Best Practices

1. **Consistency**: Use the same font weight for similar elements
2. **Readability**: Prefer `font-hind-regular` for body text
3. **Hierarchy**: Use different weights to create visual hierarchy
4. **Brand Identity**: Use `font-solaiman` sparingly for brand elements
5. **Mixed Content**: Use `font-poppins` for English text in Bengali interface

## Font Files Location

All font files are stored in:

```
public/fonts/fontfiles/
├── HindSiliguri-Light.woff2
├── HindSiliguri-Regular.woff2
├── HindSiliguri-Medium.woff2
├── HindSiliguri-SemiBold.woff2
├── HindSiliguri-Bold.woff2
├── SolaimanLipi.woff2
├── Poppins-Regular.woff2
└── Poppins-Bold.woff2
```

## Performance

- All fonts are optimized with `woff2` format
- Fonts are loaded with `display: swap` for better performance
- Fallback fonts are provided for better user experience

## Adding New Fonts

To add new Bengali fonts:

1. Place font files in `public/fonts/fontfiles/`
2. Update `public/fonts/index.ts` with font configuration
3. Add CSS classes in `src/app/globals.css`
4. Update components to use new font classes

This setup provides a comprehensive Bengali typography system that enhances the user experience while maintaining performance and accessibility.
