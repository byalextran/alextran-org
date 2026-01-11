# The Icon

A layout component for pairing icons with accompanying text.

## Core Concept

The Icon creates a horizontal alignment where an SVG icon sits flush with text content, maintaining proper spacing and baseline alignment for improved visual hierarchy and readability.

## CSS Implementation

```css
.with-icon {
  display: inline-flex;
  align-items: baseline;
}

.with-icon > svg {
  block-size: 0.75em;
  inline-size: 0.75em;
  margin-inline-end: var(--space, 0.5em);
}
```

### Icon Before Text

```css
.with-icon > svg:first-child {
  margin-inline-end: var(--space, 0.5em);
  margin-inline-start: 0;
}
```

### Icon After Text

```css
.with-icon > svg:last-child {
  margin-inline-start: var(--space, 0.5em);
  margin-inline-end: 0;
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `space` | `0.5em` | Gap between icon and text |
| `label` | `null` | Accessible label (sets `aria-label` and `role="img"`) |

## Use Cases

- Navigation items with accompanying icons
- Status indicators paired with descriptive text
- List items combining visual symbols with labels
- Button components integrating iconography
- Feature callouts in marketing layouts
- Social media links
- Contact information
- Warning/info messages

## Example Usage

### Basic Icon with Text

```html
<span class="with-icon">
  <svg aria-hidden="true"><!-- icon SVG --></svg>
  Settings
</span>
```

### Button with Icon

```html
<button class="with-icon">
  <svg aria-hidden="true"><!-- download icon --></svg>
  Download
</button>
```

### Icon After Text

```html
<a href="/next" class="with-icon">
  Next
  <svg aria-hidden="true"><!-- arrow icon --></svg>
</a>
```

### Accessible Icon (No Visible Text)

```html
<button class="with-icon" aria-label="Close">
  <svg role="img" aria-label="Close"><!-- X icon --></svg>
</button>
```

## Variants

### Larger Icon

```css
.with-icon-large > svg {
  block-size: 1.5em;
  inline-size: 1.5em;
}
```

### Centered Alignment

```css
.with-icon-center {
  align-items: center;
}
```

### Tighter Spacing

```css
.with-icon-tight {
  --space: 0.25em;
}
```

## Best Practices

- Use `em` units for icon sizing to scale with text
- Use `inline-flex` to keep the icon-text pair inline with surrounding content
- Apply `aria-hidden="true"` to decorative icons
- Use `baseline` alignment to align icon with text baseline
- For icon-only buttons, provide accessible labels
- SVG icons should have consistent viewBox dimensions
- Consider using `currentColor` in SVGs to inherit text color

## Accessibility

```html
<!-- Decorative icon (has visible text) -->
<span class="with-icon">
  <svg aria-hidden="true">...</svg>
  Visible Label
</span>

<!-- Meaningful icon (no visible text) -->
<span class="with-icon">
  <svg role="img" aria-label="Warning">...</svg>
</span>
```
