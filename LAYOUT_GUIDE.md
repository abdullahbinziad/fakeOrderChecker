# Layout System Guide

This guide explains how to use the modern, minimal, and reusable layout components in the FraudGuard application.

## Components Overview

### 1. MainLayout

The main layout wrapper that provides a consistent structure with header, main content area, and footer.

```tsx
import { MainLayout } from "@/components/layout";

export default function MyPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <h1>My Page Content</h1>
      </div>
    </MainLayout>
  );
}
```

### 2. Header

A customizable header component with logo space, navigation menu, and mobile responsiveness.

```tsx
import { Header } from "@/components/layout";

// Basic usage
<Header />

// With custom logo and navigation
<Header
  logo={<img src="/logo.svg" alt="Logo" />}
  navigation={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]}
/>
```

### 3. Footer

A clean footer component with navigation links and "Powered by FLEX SOFTR" section.

```tsx
import { Footer } from "@/components/layout";

// Basic usage
<Footer />

// With custom links
<Footer
  links={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]}
  showPoweredBy={true}
/>
```

### 4. LayoutWithSidebar

A layout that includes an optional sidebar for more complex page structures.

```tsx
import { LayoutWithSidebar } from "@/components/layout";

export default function DashboardPage() {
  const sidebarContent = (
    <div>
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/reports">Reports</a>
        <a href="/settings">Settings</a>
      </nav>
    </div>
  );

  return (
    <LayoutWithSidebar sidebarContent={sidebarContent}>
      <div className="p-8">
        <h1>Dashboard Content</h1>
      </div>
    </LayoutWithSidebar>
  );
}
```

### 5. Sidebar

A standalone sidebar component for custom layouts.

```tsx
import { Sidebar } from "@/components/layout";

export default function CustomLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <nav>Sidebar content</nav>
      </Sidebar>
      <main>Main content</main>
    </div>
  );
}
```

## Design System Features

### Modern & Minimal Design

- Soft shadows and rounded corners
- Adequate padding and spacing
- Clean typography with proper hierarchy
- Smooth transitions and hover effects

### Responsive Design

- Mobile-first approach
- Collapsible mobile navigation
- Responsive sidebar (hidden on mobile, overlay on tablet)
- Flexible grid layouts

### Dark Mode Support

- Automatic dark mode detection
- Consistent color schemes
- Smooth theme transitions
- Accessible contrast ratios

### Accessibility

- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Usage Examples

### Simple Page

```tsx
import { MainLayout } from "@/components/layout";

export default function SimplePage() {
  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          <p className="text-gray-600">This is a simple page layout.</p>
        </div>
      </div>
    </MainLayout>
  );
}
```

### Page with Custom Header

```tsx
import { MainLayout } from "@/components/layout";

export default function CustomHeaderPage() {
  return (
    <MainLayout
      headerProps={{
        logo: <div className="text-2xl font-bold">Custom Logo</div>,
        navigation: [
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "About", href: "/about" },
        ],
      }}
    >
      <div className="p-8">
        <h1>Page with Custom Header</h1>
      </div>
    </MainLayout>
  );
}
```

### Dashboard with Sidebar

```tsx
import { LayoutWithSidebar } from "@/components/layout";

export default function Dashboard() {
  const sidebarContent = (
    <div className="space-y-4">
      <h3 className="font-semibold">Navigation</h3>
      <nav className="space-y-2">
        <a href="/dashboard" className="block p-2 rounded hover:bg-gray-100">
          Dashboard
        </a>
        <a href="/analytics" className="block p-2 rounded hover:bg-gray-100">
          Analytics
        </a>
        <a href="/settings" className="block p-2 rounded hover:bg-gray-100">
          Settings
        </a>
      </nav>
    </div>
  );

  return (
    <LayoutWithSidebar sidebarContent={sidebarContent}>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard cards */}
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
```

## Customization

### Styling

All components use Tailwind CSS classes and can be customized by:

- Passing `className` props
- Modifying the component source code
- Using CSS custom properties

### Theming

The layout system supports:

- Light and dark themes
- Custom color schemes
- Brand-specific styling
- Consistent spacing and typography

### Configuration

Components accept various props for customization:

- `headerProps`: Configure header appearance and navigation
- `footerProps`: Customize footer links and branding
- `sidebarContent`: Add custom sidebar content
- `className`: Apply additional CSS classes

## Best Practices

1. **Consistency**: Use the same layout components across your application
2. **Responsiveness**: Always test on mobile and desktop devices
3. **Accessibility**: Ensure proper ARIA labels and keyboard navigation
4. **Performance**: Avoid unnecessary re-renders by memoizing components
5. **Maintainability**: Keep layout logic separate from business logic

## File Structure

```
src/components/layout/
├── Header.tsx           # Header component
├── Footer.tsx           # Footer component
├── MainLayout.tsx       # Main layout wrapper
├── Sidebar.tsx          # Sidebar component
├── LayoutWithSidebar.tsx # Layout with sidebar
└── index.ts            # Export all components
```

## Migration Guide

To migrate from the old layout system:

1. Replace inline header/footer with `<MainLayout>`
2. Move navigation logic to `headerProps`
3. Update styling to use the new design system
4. Test responsiveness and accessibility
5. Update any custom layout logic

For more examples, see `/example` page in the application.
