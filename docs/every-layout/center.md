# The Center

A layout component for horizontally centering content with maximum width constraints.

## Core Concept

The Center provides horizontal centering with a `max-width` constraint, keeping layouts readable and visually balanced. It's particularly useful for establishing proper measure (line length) in text-based designs.

## CSS Implementation

### Basic Center

```css
.center {
  box-sizing: content-box;
  max-inline-size: var(--measure);
  margin-inline: auto;
}
```

### With Gutters (Horizontal Padding)

```css
.center {
  box-sizing: content-box;
  max-inline-size: var(--measure);
  margin-inline: auto;
  padding-inline: var(--s1);
}
```

### Intrinsic Centering (Center Child Elements)

```css
.center {
  box-sizing: content-box;
  max-inline-size: var(--measure);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

### With Text Centering

```css
.center {
  box-sizing: content-box;
  max-inline-size: var(--measure);
  margin-inline: auto;
  text-align: center;
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `max` | `var(--measure)` | Maximum width |
| `gutters` | `null` | Horizontal padding on both sides |
| `andText` | `false` | Enable `text-align: center` |
| `intrinsic` | `false` | Use flexbox to center child elements |

## Use Cases

- Constraining article content to readable line lengths
- Creating centered landing pages with bounded width
- Establishing visual hierarchy in marketing layouts
- Improving typography readability through proper measure control
- Blog post content
- Documentation pages

## Example Usage

```html
<div class="center">
  <article>
    <h1>Article Title</h1>
    <p>Content constrained to a readable line length...</p>
  </article>
</div>
```

### With Gutters for Mobile

```html
<div class="center" style="--gutters: var(--s1);">
  <!-- Content won't touch screen edges on mobile -->
</div>
```

## Best Practices

- Use `content-box` box-sizing so gutters don't subtract from max-width
- Set `--measure` to approximately 60ch for optimal readability
- Combine with Stack for vertical rhythm within centered content
- Use intrinsic mode for centering elements of varying widths
