# Modern Website Development Requirements

## Project Overview

This project starts with default Lovable presets. Redo/Refresh/Revamp it from scratch.
Make it a **modern Nordic design for a construction company** and professional website with custom styling and responsive design.
The site should have a contemporary feel without looking like an AI-generated template, focusing on clean typography, strategic use of color, and engaging user interactions.

**Website Type & Purpose:**

* **Type**: Construction Company
* **Structure**: **Single Page Application (SPA)** only (**strict requirement**)
* **Purpose**: Showcase company information, services, projects, and contact details, while reflecting modern Nordic aesthetics.
* **Strict Rule**: Do **not** change the purpose, or restructure the site into MPA/e-commerce/blog.

---

## 🏗️ Brand & Target Design Context

* **Industry Focus:**
  Design must visually represent a **construction and building services company**, emphasizing craftsmanship, structural precision, and reliability.

* **Visual Identity:**

  * Use **strong geometric layouts**, grid alignment, and confident color contrasts to communicate strength and stability.
  * Incorporate **subtle architectural elements** (clean lines, structural dividers, or grid overlays).
  * Avoid flashy gradients or overly rounded shapes; maintain a **professional, grounded tone**.
  * Tone: **Dependable, skilled, and modern** — should feel like a real construction firm, not a tech brand.

* **Layout Style:**

  * Use **modular section blocks** with clear visual hierarchy (services, projects, about, contact).
  * Highlight real or placeholder project images using consistent card or grid systems.
  * Emphasize **clarity and readability** — bold headings, clear spacing, and solid backgrounds.
  * Prioritize **visual trust-building** within existing sections (e.g., showcase completed works, certifications, clean contact details, and consistent CTA styling).
  * Do **not** add new sections or modify the structure — just improve layout and visual communication.

* **Audience:**

  * Primary: Property owners, developers, and clients seeking reliable construction partners.
  * Secondary: Businesses or organizations in need of renovation or infrastructure services.

* **Design Goal:**

  * Convey professionalism, experience, and solid reputation.
  * The website should look credible, high-quality, and structured — instilling trust at first glance.

---

## Design System

### Color Palette

**Primary Accent Color:** Use ONE accent color throughout the entire site

* Apply consistently to buttons, links, highlights, and interactive elements
* Maintain proper contrast ratios for accessibility
* Use different opacity levels (10%, 20%, 50%, etc.) for backgrounds and subtle elements
* All buttons must have sufficient contrast (no white text on white buttons).
* Fix button hover states to be visually clear and accessible (no broken or unreadable states).

### Typography System

* **Primary Font:** Modern sans-serif for headings and body text
* **Font Weights:** Light (300), Regular (400), Medium (500), Semi-Bold (600), Bold (700)
* **Font Sizes:** Implement a consistent typographic scale

  * H1: 3.5rem (mobile: 2.5rem)
  * H2: 2.5rem (mobile: 2rem)
  * H3: 2rem (mobile: 1.75rem)
  * H4: 1.5rem (mobile: 1.25rem)
  * Body: 1rem
  * Small: 0.875rem
* **Line Heights:** 1.6 for body text, 1.2–1.4 for headings
* **Letter Spacing:** Subtle spacing for headings (–0.02em to 0.02em)

### Custom Scrollbar

Implement a custom scrollbar design:

* Width: 8px
* Track: Light gray background
* Thumb: Accent color with rounded edges
* Hover state: Slightly darker accent color
* Smooth scrolling behavior

---

## Header & Navigation

### Topbar Integration

**Transparent Integration:** Topbar and navigation bar should be transparent when at the top of the page.

* When header/topbar is transparent, hero and banner sections must align correctly (no gaps or overlaps).
* Fix transition bug: When scrolling up and header/topbar transitions to transparent, do not show unwanted borders.
  **Background Transition:** Smooth transition to solid background when scrolling down.
  **Logo:** Use `logo.png` for both header and footer. If unavailable, display `placeholder.svg`.
  **Contact Info:** Display phone number and email in topbar.

### Navigation Behavior

* **Centering:** Center navigation items, ignore company text/logo positioning
* **Mobile Topbar:** Show only phone number and email on mobile devices
* **Transparency:** Maintain transparency over hero sections and page banners. Ensure alignment with transparent header/topbar

### Mobile Navigation

* **Hamburger Menu:** Fix dropdown functionality on transparent background
* **Smooth Transitions:** Implement slide-in/fade-in for mobile menu
* **Overlay:** Semi-transparent overlay when menu is open

---

## Hero Section

### Image Management

**Hero Images:** `public/hero1.jpg`, `public/hero2.jpg`, `public/hero3.jpg`

* If not available, use `placeholder.svg`.
* Automatic transition every 4–5 seconds
* Smooth fade or slide transitions
  **Dark Filter:** All hero background images must have a dark overlay for readability.

### Layout Adjustments

* **Positioning:** Adjust hero content positioning to account for transparent header
* **Content Overlay:** Ensure text is always readable
* **Remove Elements:** Remove mouse scroll icon

### Responsive Design

* **Mobile Optimization:** Ensure hero looks great on all screen sizes
* **Image Optimization:** Maintain proper aspect ratios

---

## Page Structure

### Homepage

* **Hero Section:** Full-screen with transitioning images
* **Transparent Header:** Integrated with hero section
* **Content Sections:** Maintain existing layout

### Other Pages (Non-Homepage)

* **Banner Image:** 50% screen height banner for each page
* If no banner image is provided, display `placeholder.svg`.
* **Transparent Header:** Same transparency behavior as homepage
* **Page-Specific Content:** Maintain current structure

---

## Animations & Interactions

### Animation Types

Implement these animation types throughout all pages:

#### Text Reveal Animations

* **Fade Up:** Text slides up from bottom with fade-in
* **Stagger Animation:** Multiple text elements animate with slight delays

#### Card Reveal Animations

* **Fade In:** Cards fade in with slight upward movement
* **Scale In:** Cards scale from 0.9 to 1.0 while fading in
* **Slide In:** Cards slide in from left/right alternately

### Scroll-Based Triggers

* **Intersection Observer:** Use for performance-optimized scroll triggers
* **Threshold:** Trigger animations when 20% of element is visible
* **Once:** Animations should play once unless user scrolls back up significantly
* **Stagger:** Related elements should animate with 100–200ms delays

### Gallery Interactions

* **Navigation Buttons:** Previous/next buttons with smooth animations
* **Thumbnail Animation:** Implement smooth transitions for thumbnail changes
* **Image Transitions:** Fade or slide transitions between gallery images
* **Loading States:** Smooth loading animations for images

### Shadows & Glow

* Remove glow effects from all sections. Minimalist, clean shadows are allowed for cards and sections, but must be subtle and not visually distracting.

---

## Specific Sections

### About Section (Om Oss)

* **Image:** Use `about-us.jpg`. If unavailable, use `placeholder.svg`.
* **Layout:** Keep existing layout
* **Content:** Keep existing content with improved typography

### Projects / Gallery Section

* **Images:** Use provided project images.
* If not provided, display `placeholder.svg` for all missing gallery items.
* Use a grid layout with hover effects to display project previews cleanly.

### Services Section

* Use 3 or 4 service cards showing core areas (Construction, Renovation, Design, Consultation).
* Each card should have an icon or image (`placeholder.svg` if missing) and a short description.

### Contact Section

* **Map Position:** Map should only be on the contact page, above the footer.
* **Map Width:** Full width.

### Footer

* **Logo:** Use `logo.png` in footer. If unavailable, use `placeholder.svg`.
* **Social Links:** Smooth hover animations.
* **Icons:** If no icons are provided, use `placeholder.svg`.

---

## Technical Requirements

### Application Type

* **SPA only** (do not convert to MPA).

### Performance & Accessibility

* **Lazy Loading:** Implement for images
* **Accessibility:**

  * ARIA labels where necessary
  * Clear focus states for keyboard navigation
  * Color contrast must meet WCAG AA

---

## Browser Support

* **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
* **Mobile Browsers:** iOS Safari, Chrome Mobile
* **Progressive Enhancement:** Graceful degradation for older browsers

---

## Code Quality

* **CSS Architecture:** Organized and maintainable
* **JavaScript:** Clean, documented, error-handled
* **Responsive Design:** Mobile-first approach
* **Code Comments:** Document complex areas

---

## Testing Requirements

* **Cross-Browser Testing:** Ensure consistent experience across browsers
* **Mobile Testing:** Test on various device sizes and orientations

---

## Deliverables

1. **Responsive Website:** Fully functional across all devices
2. **Animation Library:** Reusable animation components
3. **Style Guide:** Documentation of design system implementation
4. **Browser Compatibility Report:** Testing results across target browsers

---

## Success Criteria

* **Visual Appeal:** Modern, professional Nordic design adapted for a construction company
* **User Experience:** Intuitive navigation and clear information hierarchy
* **Mobile Experience:** Excellent usability across devices
* **Accessibility:** WCAG AA compliance
* **Cross-Browser Consistency:** Uniform experience across browsers

---
