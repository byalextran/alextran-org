# Every Layout Rudiments

Foundational concepts and principles for building layouts following the CUBE CSS methodology.

## Boxes

Everything in web design is a box. Layout fundamentally involves arranging rectangular containers.

### The Box Model
CSS layout depends on four components: **content**, **padding**, **border**, and **margin**.

### Display Property
- **Block elements**: Occupy full available horizontal space; vertical stacking is default
- **Inline elements**: Flow within text context, sizing based on content only
- **Inline-block**: Combines properties but can disrupt line heights
- **Display: none**: Removes elements entirely from layout and accessibility trees

### Logical Properties
Use logical properties like `margin-inline-end` instead of `margin-right` to ensure layouts work in all writing directions (LTR, RTL, vertical).

### Formatting Contexts
Properties like `display: flex` and `display: grid` transform child element behavior, switching default flow direction.

### Box-Sizing Strategy
Always use `border-box` to include padding and border within specified dimensions:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

### Algorithmic Design Principle
Rather than prescribing fixed dimensions, suggest layouts through `min-height`, `flex-basis`, and `auto` values. Let browsers calculate optimal solutions for varying content and devices.

---

## Composition

Apply the software engineering principle of "composition over inheritance" to front-end architecture.

### The Problem with Traditional Approaches
Isolated component styling (`.dialog`, `.dialog__header`, `.dialog__body`) leads to CSS bloat through duplication.

### Layout Primitives
Primitives are foundational, context-independent building blocks:
- Space elements vertically (Stack)
- Pad elements evenly (Box)
- Separate elements horizontally (Cluster)
- Center content (Center)
- Create sidebars (Sidebar)
- Switch between layouts (Switcher)
- Cover viewports (Cover)
- Create grids (Grid)
- Maintain aspect ratios (Frame)
- Horizontal scrolling (Reel)
- Overlay elements (Imposter)
- Pair icons with text (Icon)

### Intrinsic Responsiveness
Each primitive responds automatically to content and context without requiring media queries.

### Developer Benefit
Create numerous layouts with just a little reusable code—similar to how the English alphabet is only 26 bytes yet produces countless meaningful works.

---

## Units

### Why Not Pixels
Pixels create a false sense of "pixel perfection" that's neither attainable nor desirable. Modern displays employ sub-pixel rendering and variable pixel geometries, making `px` fundamentally unreliable.

### Relative Units (The Foundation)
**rem, em, ch, and ex** are units relative to the user's default font size—the preferred approach.

- **rem**: Scales relative to root font size; ideal for block-level elements
- **em**: Context-dependent, scales relative to parent; perfect for inline elements and SVG icons
- **ch**: Based on width of "0" character; designed for restricting line measure (characters per line)
- **ex**: Equals the x-height of the font; less commonly used

### Viewport Units
Combine viewport units with `rem` for fluid scaling:

```css
:root {
  font-size: calc(1rem + 0.5vw);
}
```

This ensures sizes never drop below the user's default while smoothly scaling with viewport.

### Proportional Maintenance
Scale an entire interface by changing only the root size:

```css
@media (min-width: 960px) {
  :root {
    font-size: 125%;
  }
}
```

### Accessibility Compliance
Respecting user font-size preferences is essential usability. Using `px` effectively overrides user preferences.

### Summary Principle
Design systems should extrapolate layouts from text's intrinsic dimensions rather than fixed pixel measurements.

---

## Global and Local Styling

### Global Styling Methods

1. **Inherited styles** on `:root` or `<body>` that cascade throughout the document
2. **Universal selectors** (`*`) that directly target all elements
3. **Element selectors** that target specific HTML elements regardless of location

Liberal use of element selectors is the hallmark of a comprehensive design system.

### Local Styling Approaches
- **ID selectors**: High specificity but limited to single instances
- **Inline styles**: Direct but create maintenance nightmares
- **Shadow DOM**: Isolates styles but prevents leveraging global styling benefits

### Utility Classes
Use descriptive naming mirroring CSS syntax (e.g., `.font-size\:big`) with CSS custom properties. Include `!important` to ensure they override competing styles.

Avoid "utility-first" frameworks that eliminate element and inherited styles entirely.

### Layout Components
Custom elements serve as reusable layout primitives with configurable properties. The system generates styles per *configuration*—multiple instances sharing the same property values reuse a single stylesheet.

### Recommended Hierarchy
1. Universal/inherited styles (highest reach)
2. Layout primitives
3. Utility classes (most specific)

---

## Modular Scale

Apply mathematical harmony principles from music to visual design.

### Mathematical Foundation
Use a simple multiplier—typically **1.5** or the **golden ratio (1.618)**—to generate proportional values:

```
1 * 1.5 = 1.5
1.5 * 1.5 = 2.25
2.25 * 1.5 = 3.375
```

### CSS Implementation

```css
:root {
  --ratio: 1.5;
  --s-2: calc(var(--s-1) / var(--ratio));
  --s-1: calc(var(--s0) / var(--ratio));
  --s0: 1rem;
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
  --s3: calc(var(--s2) * var(--ratio));
  --s4: calc(var(--s3) * var(--ratio));
  --s5: calc(var(--s4) * var(--ratio));
}
```

### Practical Application
- Derive spacing from typography (line-height × font-size)
- Custom properties work across JavaScript and Shadow DOM
- Enforce scale adherence by accepting only predefined ratio points

### Key Advantage
Adherence to *any chosen ratio*—not the specific value—creates visual harmony throughout designs.

---

## Axioms

Every design should be founded on axioms—foundational rules that ensure output is consistent and well-formed.

### Measure as Primary Example
Typographic measure (optimal line length) should be **between 45 and 75 characters**.

### The Challenge
Web content must adapt to:
- Variable viewport sizes
- User zoom levels
- Font size adjustments
- Different writing modes

### The Solution: Using `ch` Units

```css
:root {
  --measure: 60ch;
}

* {
  max-inline-size: var(--measure);
}

html, body, div, header, nav, main, footer {
  max-inline-size: none;
}
```

This automatically scales with font size changes, maintaining consistent readability.

### Key Principles

1. **Algorithmic Design**: Let browsers calculate optimal layouts through responsive units
2. **Relinquish Control**: Act as "the browser's mentor" rather than controlling every aspect
3. **Design Without Seeing**: Account for unpredictable variable combinations
4. **Pervasive Application**: Embed axioms in universal styles, layout primitives, and utility classes

Web design functions as writing programs that generate visual artifacts rather than creating static designs.
