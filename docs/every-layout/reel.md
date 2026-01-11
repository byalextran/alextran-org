# The Reel

A horizontal scrolling layout for displaying items in a single row with overflow handling.

## Core Concept

The Reel creates an auto-scrolling container ideal for showcasing galleries, carousels, or lists of items that exceed viewport width while maintaining a compact vertical footprint. Items flow horizontally and scroll when they overflow.

## CSS Implementation

```css
.reel {
  display: flex;
  block-size: auto;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: var(--color-light) var(--color-dark);
}

.reel::-webkit-scrollbar {
  block-size: 1rem;
}

.reel::-webkit-scrollbar-track {
  background-color: var(--color-dark);
}

.reel::-webkit-scrollbar-thumb {
  background-color: var(--color-dark);
  background-image: linear-gradient(
    var(--color-dark) 0,
    var(--color-dark) 0.25rem,
    var(--color-light) 0.25rem,
    var(--color-light) 0.75rem,
    var(--color-dark) 0.75rem
  );
}

.reel > * {
  flex: 0 0 auto;
}

.reel > img {
  block-size: 100%;
  flex-basis: auto;
  width: auto;
}

.reel > * + * {
  margin-inline-start: var(--s0);
}
```

### Overflow Detection

```css
.reel.overflowing {
  padding-block-end: var(--s1);
}
```

Add class dynamically when content overflows to make room for scrollbar.

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `itemWidth` | `auto` | Individual item dimensions |
| `height` | `auto` | Container height |
| `space` | `var(--s0)` | Gap between items |
| `noBar` | `false` | Hide scrollbars entirely |

## Use Cases

- Image galleries and portfolios
- Product carousels
- Horizontal navigation menus
- Timeline displays
- Video or media collections
- Scrolling testimonials
- Logo strips
- Feature highlights

## Example Usage

### Image Gallery

```html
<div class="reel">
  <img src="photo1.jpg" alt="Photo 1">
  <img src="photo2.jpg" alt="Photo 2">
  <img src="photo3.jpg" alt="Photo 3">
  <img src="photo4.jpg" alt="Photo 4">
  <img src="photo5.jpg" alt="Photo 5">
</div>
```

### Card Carousel

```html
<div class="reel">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
  <article class="card">Card 4</article>
</div>
```

### Fixed Width Items

```html
<div class="reel" style="--item-width: 15rem;">
  <!-- Items will all be 15rem wide -->
</div>
```

## Variants

### Hidden Scrollbar

```css
.reel-no-bar {
  scrollbar-width: none;
}

.reel-no-bar::-webkit-scrollbar {
  display: none;
}
```

### Snap Scrolling

```css
.reel-snap {
  scroll-snap-type: x mandatory;
}

.reel-snap > * {
  scroll-snap-align: start;
}
```

## Best Practices

- Images receive special handling with `flex-basis: auto` to preserve aspect ratios
- Use `scroll-snap-type` for controlled scrolling behavior
- Consider touch/swipe interactions on mobile
- Custom scrollbar styling improves visual design
- Monitor overflow with JavaScript for conditional styling
- Provide visual indicators when content is scrollable
- Consider adding scroll buttons for mouse users
