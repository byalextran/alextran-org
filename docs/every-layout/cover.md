# The Cover

A layout for creating full-viewport containers with vertically centered principal content.

## Core Concept

The Cover creates structures where one element is vertically centered while maintaining flexible spacing. It's designed for hero sections, landing pages, and any layout requiring a prominent centered element with optional header and footer sections.

## CSS Implementation

```css
.cover {
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
  padding: var(--s1);
}

.cover > * {
  margin-block: var(--s1);
}

.cover > :first-child:not(.centered) {
  margin-block-start: 0;
}

.cover > :last-child:not(.centered) {
  margin-block-end: 0;
}

.cover > .centered {
  margin-block: auto;
}
```

### How It Works

Using `margin-block: auto` on the centered element pushes it to the vertical middle, with remaining elements distributed to the top and bottom.

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `centered` | `h1` | CSS selector for the vertically centered element |
| `space` | `var(--s1)` | Margin spacing between children |
| `minHeight` | `100vh` | Container minimum height |
| `noPad` | `false` | Remove padding from container |

## Use Cases

- Landing page hero sections
- Full-screen modal or dialog structures
- Sticky header/footer layouts with centered content
- Marketing pages with prominent messaging
- Splash screens or cover pages
- Book cover layouts
- Presentation slides

## Example Usage

### Basic Hero Section

```html
<div class="cover">
  <header>Logo & Navigation</header>
  <h1 class="centered">Welcome to Our Site</h1>
  <footer>Scroll indicator or CTA</footer>
</div>
```

### Custom Centered Element

```html
<div class="cover">
  <nav>Navigation</nav>
  <div class="centered">
    <h1>Main Heading</h1>
    <p>Supporting text</p>
    <button>Call to Action</button>
  </div>
  <footer>Footer content</footer>
</div>
```

### Reduced Height Cover

```html
<div class="cover" style="min-block-size: 50vh;">
  <h2 class="centered">Section Title</h2>
</div>
```

## Variants

### No Padding

```css
.cover-full {
  padding: 0;
}
```

### With Background Image

```css
.cover {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
}
```

## Best Practices

- The centered element receives `margin-block: auto` to achieve vertical centering
- Edge children (first/last) have zero top/bottom margins unless centered
- Use with Stack inside the centered element for grouped content
- Consider overlay effects for text readability over images
- Works well with Center for horizontal and vertical centering combined
