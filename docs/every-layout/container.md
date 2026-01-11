# The Container

A layout component for establishing consistent page width constraints and centering.

## Core Concept

The Container manages maximum width constraints and horizontal centering for page-level content. It provides responsive behavior across viewport sizes while maintaining consistent horizontal spacing.

## CSS Implementation

```css
.container {
  max-inline-size: var(--max-width, 80rem);
  margin-inline: auto;
  padding-inline: var(--gutter, var(--s1));
}
```

### Full-Width Container with Breakout

```css
.container-full {
  --full: minmax(var(--gutter), 1fr);
  --content: min(var(--max-width, 80rem), 100% - var(--gutter) * 2);

  display: grid;
  grid-template-columns:
    [full-start] var(--full)
    [content-start] var(--content) [content-end]
    var(--full) [full-end];
}

.container-full > * {
  grid-column: content;
}

.container-full > .full-bleed {
  grid-column: full;
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `max-width` | `80rem` | Maximum container width |
| `gutter` | `var(--s1)` | Horizontal padding on edges |

## Use Cases

- Establishing consistent page width constraints
- Centering and constraining content width for readability
- Managing horizontal spacing and padding
- Providing responsive behavior across viewport sizes
- Full-bleed sections within constrained content

## Example Usage

### Basic Container

```html
<div class="container">
  <header>Site Header</header>
  <main>Main Content</main>
  <footer>Site Footer</footer>
</div>
```

### Narrow Container for Text

```html
<article class="container" style="--max-width: 65ch;">
  <h1>Article Title</h1>
  <p>Article content with optimal reading width...</p>
</article>
```

### Full-Bleed Image Within Container

```html
<div class="container-full">
  <h1>Page Title</h1>
  <p>Normal content...</p>
  <img class="full-bleed" src="hero.jpg" alt="">
  <p>More content...</p>
</div>
```

## Variants

### Narrow Container

```css
.container-narrow {
  --max-width: 45rem;
}
```

### Wide Container

```css
.container-wide {
  --max-width: 100rem;
}
```

### No Gutters

```css
.container-flush {
  padding-inline: 0;
}
```

## Best Practices

- Use CSS custom properties for easy theme-wide adjustments
- Set `max-width` based on content type (wider for dashboards, narrower for articles)
- Always include gutters to prevent content from touching screen edges on mobile
- Consider using `ch` units for text-focused containers (e.g., `65ch`)
- Combine with Stack for vertical rhythm within the container
- Use Center component for more fine-grained control over individual sections
- The grid-based full-bleed approach allows for breakout elements
