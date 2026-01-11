# The Sidebar

A responsive layout pattern for two adjacent elements that stack or sit side-by-side based on available space.

## Core Concept

The Sidebar manages two elements: one maintains a fixed or intrinsic width (the sidebar), while the other grows to fill remaining space. When space is insufficient, both elements wrap and take 100% width—all without media queries. This exemplifies intrinsic design: self-governing components that respond to context.

## CSS Implementation

```css
.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);
}

.with-sidebar > .sidebar {
  flex-basis: 20rem;
  flex-grow: 1;
}

.with-sidebar > .not-sidebar {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
}
```

### How It Works

The extremely high `flex-grow: 999` on the non-sidebar element causes it to consume available space, effectively squashing the sidebar to its prescribed width. When the non-sidebar's `min-inline-size` can't be satisfied, wrapping occurs.

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `side` | `left` | Which element is the sidebar (`left` or `right`) |
| `sideWidth` | (content width) | Width of sidebar when horizontal |
| `contentMin` | `50%` | Minimum content width before wrapping |
| `space` | `var(--s1)` | Gap between elements |
| `noStretch` | `false` | Disable equal height stretching |

## Use Cases

- Media objects (image alongside description)
- Form layouts (label beside input)
- Dashboard layouts
- Article with table of contents
- Any two-column layout needing responsive stacking

## Example Usage

### Left Sidebar (Default)

```html
<div class="with-sidebar">
  <nav class="sidebar">
    <!-- Navigation links -->
  </nav>
  <main class="not-sidebar">
    <!-- Main content -->
  </main>
</div>
```

### Right Sidebar

```html
<div class="with-sidebar" style="flex-direction: row-reverse;">
  <aside class="sidebar">
    <!-- Sidebar content -->
  </aside>
  <article class="not-sidebar">
    <!-- Article content -->
  </article>
</div>
```

### Intrinsic Width Sidebar

Omit `flex-basis` to let content determine sidebar width:

```css
.with-sidebar > .sidebar {
  flex-grow: 1;
}
```

## Variants

### No Stretch (Natural Heights)

```css
.with-sidebar {
  align-items: flex-start;
}
```

### Different Content Minimum

```css
.with-sidebar > .not-sidebar {
  min-inline-size: 60%;
}
```

## Best Practices

- The sidebar element should come first in the HTML for left sidebars
- Use `flex-direction: row-reverse` for right sidebars while maintaining source order
- Adjust `min-inline-size` based on content requirements
- Consider using `contentMin` as a percentage to control wrap point
