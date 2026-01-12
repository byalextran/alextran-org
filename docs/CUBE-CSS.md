# CUBE CSS Reference Guide

CUBE CSS stands for **Composition, Utility, Block, Exception** and is a CSS methodology that works *with* the cascade rather than against it.

It's principles are used by [Every Layout](EVERY-LAYOUT.md).

## Core Philosophy

- Embrace the cascade and inheritance to style as much as possible at a high level
- Simple is almost always more effective than complex
- Hint the browser with flexible rules rather than micro-managing it
- Progressive enhancement: pages should render well even with minimal CSS
- Write as little CSS as possible while maintaining quality

## The Four Layers

### 1. Composition

The **macro layout layer** - creates flexible, component-agnostic layout systems.

**Should do:**
- Provide high-level, flexible layouts
- Determine how elements interact with each other
- Create consistent flow and rhythm

**Should NOT do:**
- Apply visual treatment (colors, fonts)
- Add decorative styles (shadows, patterns)
- Force pixel-perfect layouts

**Example - Flow pattern:**
```css
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}
```

Use composition to create skeletons that structure spatial relationships without dictating appearance.

---

### 2. Utility

Single-purpose classes that do **one job well**.

**Should do:**
- Apply single or cohesive property groups
- Extend design tokens to preserve consistency
- Consolidate repetitive CSS properties into reusable utility classes applied in HTML

**Should NOT do:**
- Group unrelated properties (those belong in Blocks)
- Use `!important` as a specificity workaround

**Example - Wrapper utility:**
```css
.wrapper {
  max-width: 65ch;
  margin-inline: auto;
  padding-inline: 1rem;
}
```

**Token-based approach:**
Generate utilities from design tokens (e.g., `.bg-primary`, `.color-secondary`) to maintain a single source of truth.

---

### 3. Block

A **skeletal component** for context-specific styling. Most styling should already be handled by global, composition, and utility layers.

**Should do:**
- Extend work from global, composition, and utility layers
- Apply design tokens within a focused scope
- Create namespace/specificity control for specific contexts

**Should NOT do:**
- Grow beyond 80-100 lines of CSS
- Solve multiple contextual problems in a single file

**Flexible selectors allowed:**
```css
/* All valid approaches */
.card .title { }
.card h2 { }
.card > *:first-child { }
```

Choose a consistent approach for your team - CUBE doesn't enforce BEM-style naming.

---

### 4. Exception

Handles **state deviations** from block rules using data attributes.

**Should do:**
- Deliver concise variations to a block
- Use data attributes exclusively

**Should NOT do:**
- Transform blocks so dramatically they become unrecognizable (create new blocks instead)
- Use CSS classes for state management

**Example:**
```html
<article class="card" data-state="reversed"></article>
```

```css
.card[data-state='reversed'] {
  display: flex;
  flex-direction: column-reverse;
}
```

Data attributes provide a single hook for both CSS and JavaScript, aligning with finite state machine concepts.

---

## Practical Application Order

1. **Global/Base styles** - Reset, typography, sensible defaults
2. **Composition** - Layout primitives (stack, cluster, sidebar, grid, etc.)
3. **Utilities** - Token-based single-purpose classes
4. **Blocks** - Component-specific styling (kept minimal)
5. **Exceptions** - State variations via data attributes

## Key Patterns

### Flow (vertical rhythm)
```css
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}

/* Override locally */
.flow[data-space="large"] {
  --flow-space: 2em;
}
```

### Cluster (horizontal grouping)
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-space, 1rem);
  align-items: center;
}
```

### Stack (vertical layout)
```css
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--stack-space, 1rem);
}
```

### Sidebar (content with fixed sidebar)
```css
.sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sidebar-gap, 1rem);
}

.sidebar > :first-child {
  flex-basis: var(--sidebar-width, 20rem);
  flex-grow: 1;
}

.sidebar > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
}
```

## HTML Structure Example

```html
<article class="card flow" data-state="featured">
  <img class="card-image" src="..." alt="...">
  <div class="flow">
    <h2 class="text-lg font-bold">Title</h2>
    <p class="color-muted">Description text</p>
    <a href="#" class="button" data-variant="primary">Read more</a>
  </div>
</article>
```

Note how:
- `.card` is a Block
- `.flow` is a Composition utility applied at multiple levels
- `.text-lg`, `.font-bold`, `.color-muted` are Utilities
- `data-state="featured"` is an Exception
- `data-variant="primary"` is an Exception on the button

## Remember

- Let the browser do the work - use flexible units and intrinsic sizing
- Global styles handle 80%+ of the work
- Blocks should be small - if they grow large, you're probably not leveraging utilities enough
- State changes use data attributes, not modifier classes
- Consistency within your team matters more than strict rules
