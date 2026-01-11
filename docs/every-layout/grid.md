# The Grid

A CSS Grid-based layout for creating responsive multi-column layouts without media queries.

## Core Concept

The Grid uses CSS Grid's intrinsic sizing capabilities to create columns that automatically adjust to available space. It leverages the `min()` function for intrinsic responsiveness, allowing columns to reflow based on container size rather than arbitrary viewport breakpoints.

## CSS Implementation

```css
.grid {
  display: grid;
  gap: var(--s1);
}

@supports (width: min(250px, 100%)) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  }
}
```

### How It Works

- `repeat(auto-fill, ...)`: Creates as many columns as will fit
- `minmax(min(250px, 100%), 1fr)`: Each column is at least 250px (or 100% on narrow screens) and grows equally
- `min(250px, 100%)`: Prevents columns from being wider than their container on small screens

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `min` | `250px` | Minimum column width |
| `space` | `var(--s1)` | Gap between grid items |

## Use Cases

- Product catalogs with consistent column widths
- Image galleries adapting to container constraints
- Card-based layouts with automatic reflowing
- Blog post grids
- Team member displays
- Feature showcases
- Portfolio galleries

## Example Usage

### Basic Grid

```html
<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

### Custom Minimum Width

```html
<div class="grid" style="--min: 15rem;">
  <!-- Narrower columns -->
</div>
```

### Image Gallery

```html
<div class="grid" style="--min: 200px; --space: var(--s-1);">
  <img src="photo1.jpg" alt="">
  <img src="photo2.jpg" alt="">
  <img src="photo3.jpg" alt="">
</div>
```

## Variants

### Wider Minimum

```css
.grid-wide {
  --min: 20rem;
}
```

### Tighter Gap

```css
.grid-tight {
  --space: var(--s-1);
}
```

## Best Practices

- Set `--min` based on content requirements (card width, image size, etc.)
- Items will be equal height in each row by default
- Use `align-items: start` if unequal heights are desired
- Combine with Box for consistent card styling
- The `@supports` query provides fallback for older browsers

## Considerations

- All items in a row will have equal height (CSS Grid default)
- Consider aspect ratio constraints for image grids
- Works best when all items have similar content structure
- Use Frame component inside grid items for aspect ratio control
