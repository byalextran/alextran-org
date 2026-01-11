# The Switcher

A responsive layout that transitions cleanly between horizontal and vertical configurations.

## Core Concept

The Switcher uses "quantum layout" principles—allowing the browser to intelligently switch between a single horizontal row and a single vertical column based on container width. Unlike regular flex-wrap which can create uneven intermediate states, the Switcher prevents any element from being visually "picked out" or appearing featured unintentionally.

## CSS Implementation

```css
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);
}

.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--threshold, 30rem) - 100%) * 999);
}
```

### How It Works

The calculation `(threshold - 100%) * 999` generates either:
- **Large positive number** (when container < threshold): Forces elements to full-width rows (vertical layout)
- **Large negative number** (when container > threshold): Invalid CSS that gracefully degrades, allowing `flex-grow` to distribute space equally (horizontal layout)

### Quantity Query (Limit Items)

```css
.switcher > :nth-last-child(n+5),
.switcher > :nth-last-child(n+5) ~ * {
  flex-basis: 100%;
}
```

Forces vertical layout when 5+ items are present, regardless of container width.

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `threshold` | `var(--measure)` | Container width breakpoint for switching |
| `space` | `var(--s1)` | Gap between elements |
| `limit` | `4` | Maximum items before forcing vertical |

## Use Cases

- Product cards (prevents false emphasis on any single product)
- Numbered steps or process flows
- Navigation menus
- Equal-value content groupings
- Feature comparison blocks
- Pricing tiers

## Example Usage

### Basic Switcher

```html
<div class="switcher">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

### Custom Threshold

```html
<div class="switcher" style="--threshold: 40rem;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Asymmetrical Proportions

```css
.switcher > :nth-child(1) {
  flex-grow: 2;
}

.switcher > :nth-child(2) {
  flex-grow: 1;
}
```

## Best Practices

- Nested elements should receive `max-inline-size: 100%` to prevent content from distorting proportions
- Use modern `gap` property instead of negative margins
- The Switcher embodies intrinsic thinking—responding to element dimensions rather than viewport breakpoints
- Works best with equal-value content where no item should appear emphasized

## Considerations

- All items will be equal width in horizontal mode (unless custom `flex-grow` applied)
- Content that varies significantly in height may look uneven
- Combine with Stack for spacing within switched items
