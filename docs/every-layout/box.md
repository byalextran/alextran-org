# The Box

A foundational layout component for consistent padding and styling of container elements.

## Core Concept

The Box provides uniform internal spacing and optional borders for content containment. It establishes spatial boundaries and visual styling as a basic wrapper utility.

## CSS Implementation

```css
.box {
  padding: var(--s1);
  border: var(--border-thin) solid;
  background-color: inherit;
}
```

### With Inversion (Color Scheme Flip)

```css
.box[data-invert] {
  filter: invert(1);
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `padding` | `var(--s1)` | Internal spacing |
| `borderWidth` | `var(--border-thin)` | Border thickness |
| `invert` | `false` | Enable color inversion filter |

## Use Cases

- Creating consistent content padding across design systems
- Establishing bordered containers for visual separation
- Applying uniform spacing within component hierarchies
- Building modular, reusable layout blocks
- Callout boxes and highlighted content
- Card containers
- Form field groups

## Example Usage

```html
<div class="box">
  <h2>Heading</h2>
  <p>Content with consistent padding all around.</p>
</div>
```

### Nested Boxes

```html
<div class="box">
  <div class="box" data-invert>
    Inverted nested box
  </div>
</div>
```

## Best Practices

- Use CSS custom properties to maintain consistent spacing across the system
- The `inherit` background-color allows boxes to adapt to their context
- Invert functionality uses CSS filters rather than direct color manipulation
- Combine with Stack for vertical spacing between boxes
