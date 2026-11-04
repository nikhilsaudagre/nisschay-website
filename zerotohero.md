# Nisschay Website - Zero to Hero Guide

This document is a comprehensive, step-by-step, and point-by-point reference guide containing all details about how the Nisschay website is built. It outlines our color palettes, typography system, component structures, custom animations, styling systems, and guidance for future modifications.

---

## 🎨 1. The Design System

### A. Color Palette
Our design uses a custom **Light Blue / High-Tech Theme** defined inside [app/globals.css](file:///d:/nisschay_website/app/globals.css).

* **Primary Blues (Brand Identity)**:
  * `--primary-50`: `#e6f3ff` (Lightest tint, used for badges/pill backgrounds)
  * `--primary-100`: `#cce7ff`
  * `--primary-200`: `#99cfff`
  * `--primary-300`: `#66b7ff`
  * `--primary-400`: `#339fff`
  * `--primary-500`: `#0087ff` (Primary Brand Blue, used for primary accents)
  * `--primary-600`: `#006ecc` (Core button color / primary hover state)
  * `--primary-700`: `#005299` (Deep blue for secondary highlights)
  * `--primary-800`: `#003766`
  * `--primary-900`: `#001b33` (Darkest brand navy)

* **Neutral Colors (Backgrounds, Borders & Text)**:
  * Background: `#ffffff`
  * Body Text Color: `#0f172a` (Slate-900)
  * Borders & Dividers: `#e2e8f0` (Slate-200) or `#cbd5e1` (Slate-300)
  * Grayscale backgrounds: `#f8fafc` (Slate-50) and `#f1f5f9` (Slate-100)

* **Vibrant Accent Colors**:
  * Cyan Accent (`--accent-cyan`): `#06b6d4`
  * Indigo Accent (`--accent-indigo`): `#6366f1`
  * Purple Accent (`--accent-purple`): `#a855f7`

* **Glassmorphism Variables**:
  * Glass Background (`--glass-bg`): `rgba(255, 255, 255, 0.7)`
  * Glass Border (`--glass-border`): `rgba(0, 135, 255, 0.15)`

---

### B. Typography System
We configure our fonts dynamically inside the root [app/layout.tsx](file:///d:/nisschay_website/app/layout.tsx) using `next/font/google` and bind them to custom Tailwind CSS tokens:

1. **Display Headings (`--font-display` / Outfit)**:
   * **Font Face**: Google **Outfit** (Sans-serif)
   * **CSS Variable**: `var(--font-display)` (mapped in `globals.css` to `var(--font-outfit)`)
   * **Usage**: Main H1 hero headings, section headings, and key display titles.
   * **Vibe**: Clean, modern, technical, and professional.

2. **Section Headings (`--font-heading` / Outfit)**:
   * **Font Face**: Google **Outfit** (Sans-serif)
   * **CSS Variable**: `var(--font-heading)`
   * **Usage**: H2, H3, H4 section headers.

3. **Body & UI Text (`--font-body` & `--font-ui` / Inter)**:
   * **Font Face**: Google **Inter** (Sans-serif)
   * **CSS Variables**: `var(--font-body)`, `var(--font-ui)` (mapped in `globals.css` to `var(--font-inter)`)
   * **Usage**: Paragraphs, menu items, tags, descriptions, form fields, and button text.
   * **Vibe**: High readability, geometric, and balanced.

---

### C. Signature Styles & Utility Classes
We have created several custom CSS utility classes in [app/globals.css](file:///d:/nisschay_website/app/globals.css) that are reused across components:

* **`.bg-clip-text`**: Custom clip utility that prevents text clipping across different browsers. It automatically makes gradient text transparent:
  ```css
  .bg-clip-text {
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    padding: 0 0.1em !important;
    display: inline-block !important;
  }
  ```
* **`.glass`**: Applies our signature modern frosted-glass blur and blue border:
  ```css
  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
  }
  ```
* **`.bg-grid-primary`**: Generates a high-tech developer grid background:
  ```css
  .bg-grid-primary {
    background-image: linear-gradient(to right, rgba(0, 135, 255, 0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 135, 255, 0.15) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  ```
* **`.liquid-blob`**: A morphing glass background decoration shape used on hover reveals.
* **`.btn-flight`**: Custom CSS group class that animate-slides out the button text and shifts/flies the paper plane icon upon hover.

---

## 🛠️ 2. Step-by-Step Component Building & Structure

Below is the step-by-step layout of each core section of the website.

### Step 1: Root Layout (`app/layout.tsx`)
* Sets up the HTML base, applies `antialiased` styling.
* Injects Google Font classes: `${playfairDisplay.variable} ${outfit.variable} ${inter.variable}`.
* Houses the global header `<Navbar />` and footer `<Footer />` around `{children}`.

### Step 2: Global Navigation (`components/Navbar.tsx`)
* Implements a **sticky backdrop glass filter** (`backdrop-blur-md bg-white/70`).
* Has a **scroll spy system**: Tracks screen scroll coordinates to dynamically underline active routes (`#home`, `#about`, `#services`, `#portfolio`, `#contact`).
* Uses context-aware buttons: dynamically switches action paths depending on route depths.

### Step 3: Hero Section (`components/HeroSection.tsx`)
* **Wording (Option 15)**: 
  * Headline: *"We Architect the Systems and Design the Experiences That Scale Your Brand."*
  * Subheadline: *"We combine modern visual design with elite software engineering, delivering cloud-native SaaS systems and custom-trained AI solutions for forward-thinking enterprises."*
* **Typography**: Styled in Outfit (`var(--font-display)`) with bold weights and a large size clamp.
* **Stats Ticker**: Houses a continuous horizontal scroll marquee. Loop duplicates stats inside Framer Motion's `animate={{ x: ["0%", "-50%"] }}` at a linear infinite duration. Experience card updated to `"15+ Cumulative Team Experience"`.

### Step 4: Split About Section (`components/AboutSection.tsx`)
* **Left Column**: Integrates the team collaboration backdrop image under custom linear gradients (`from-gray-900/90 via-gray-900/60 to-gray-900/30`) for high text readability.
* **Right Column**: Displays company history, an interactive statistical grid with `AnimatedCounter` trigger functions, and core company values in clean grid cards.

### Step 5: Interactive Services List (`components/ServicesSection.tsx`)
* Implements a **3D Floating Lens Portal** effect.
* As users hover over list items, a floating rounded card (`w-[400px] h-[400px]`) reveals the respective service's icon, description, and color gradients.
* Cursor trails are enabled by mapping window mouse coordinate values (`mouseX`, `mouseY`) into smooth Framer Motion spring configs (`springX`, `springY`).

### Step 6: Specialized Bento Grid (`components/ServicesBentoGrid.tsx`)
* Details the full service list in a visual grid matching multi-column spreads (`md:col-span-2` and `md:col-span-1`).
* Uses **Spotlight Gradients**: applies radial mouse pointer backgrounds on hover for interactive glows.

### Step 7: Curriculum Process Tracker (`components/ProcessSection.tsx`)
* Exhibits a split screen format:
  * Left: Sticky journey title detailing path progression milestones.
  * Right: A checklist grid exhibiting cards positioned along development stages (Decision, Strategy, Implementation, Refinement, Deployment, Scaling).

### Step 8: Work Showcase & Portals (`components/WorkSection.tsx` & `WorkTeaserSection.tsx`)
* `WorkSection`: 2x2 layout showcasing portfolio images inside Zoom boxes on hover. Includes floating descriptions backed by frosted glass layouts.
* `WorkTeaserSection`: Exhibits a large text button (`See Our Work`) that opens a slideshow circular magnifying lens showing rapid project screen transitions on hover.

### Step 9: Tech Logo Marquee (`components/TechStackSection.tsx`)
* Sets up rows of grayscale tech pills (HTML, Tailwind, React, Node, Azure, Docker, etc.) that shift colors to their original branding profiles on hover.
* Rows drift in opposite directions (`x: ["0%", "-50%"]` vs `x: ["-50%", "0%"]`) for visual depth.

### Step 10: Lead Capture Form (`components/ContactSection.tsx`)
* Styled with a light gradient background (`from-gray-50 to-white`).
* Integrates a clean form structure (Name, Email, Service Type, Budget, Project details) with a custom overlay showing a green success checkmark upon submission.

---

## ⚡ 3. Custom Animation Reference

Framer Motion is configured extensively for interactive visual polish. Key animation patterns include:

### A. Infinite Scroll Ticker Loop
Used for stats and tech logs. Ensure the wrapper container has `overflow-hidden` and the inner row has `whitespace-nowrap`:
```tsx
<motion.div
    className="flex gap-8 whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 25 // Controls speed
    }}
>
    {/* MUST render elements list TWICE inside loop to make transitions seamless */}
    {[...items, ...items].map((item, idx) => ( ... ))}
</motion.div>
```

### B. Cursor Hover Trail Portal (Lens Effect)
Used to show a preview lens that follows the cursor:
1. Capture coordinate hooks:
   ```typescript
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);
   const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
   const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });
   ```
2. Feed page coords on mouse move:
   ```typescript
   const handleMouseMove = (e: MouseEvent) => {
       const rect = containerRef.current.getBoundingClientRect();
       mouseX.set(e.clientX - rect.left);
       mouseY.set(e.clientY - rect.top);
   };
   ```
3. Apply variables to the floating container:
   ```tsx
   <motion.div
       style={{ left: springX, top: springY, translateX: "-50%", translateY: "-50%" }}
       className="absolute pointer-events-none"
   />
   ```

---

## 🚀 4. Developer Tips & Best Practices

1. **Changing Fonts System-wide**:
   To change the typeface of all headers globally, simply update `--font-display` in [globals.css](file:///d:/nisschay_website/app/globals.css) to another font defined in layout.tsx.
2. **Adding a New Component**:
   * Create the file under `components/Name.tsx`.
   * Ensure it exports a default functional React component.
   * Add section headings using `style={{ fontFamily: "var(--font-display)" }}`.
   * Import and render it in `app/page.tsx` or matching sub-folders.
3. **Verifying Code Integrity**:
   Always run a production check before pushing to Github:
   ```bash
   npm run build
   ```
   This ensures that all TypeScript structures are sound and no Next.js static generation errors occur.
