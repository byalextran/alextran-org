# The Cluster

A layout component for arranging elements in a flexible, wrapping horizontal group.

## Core Concept

The Cluster creates groups of items that automatically flow and wrap based on available space. It's ideal for flexible grouping of related elements like navigation items, tags, or button groups.

## CSS Implementation

```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);
  justify-content: flex-start;
  align-items: center;
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `justify` | `flex-start` | Horizontal alignment (`flex-start`, `center`, `flex-end`, `space-between`, `space-around`) |
| `align` | `center` | Vertical alignment (`flex-start`, `center`, `flex-end`, `baseline`, `stretch`) |
| `space` | `var(--s1)` | Gap between items |

## Use Cases

- Navigation menus with flexible item spacing
- Tag or label collections
- Button groups with dynamic sizing
- Icon groupings
- Filter/search result display elements
- Responsive breadcrumb trails
- Social media icon links
- Form action buttons

## Example Usage

### Basic Tag List

```html
<div class="cluster">
  <span class="tag">CSS</span>
  <span class="tag">HTML</span>
  <span class="tag">JavaScript</span>
  <span class="tag">Design</span>
</div>
```

### Centered Button Group

```html
<div class="cluster" style="justify-content: center;">
  <button>Cancel</button>
  <button>Save Draft</button>
  <button>Publish</button>
</div>
```

### Space-Between Navigation

```html
<nav class="cluster" style="justify-content: space-between;">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

## Variants

### Tight Cluster

```css
.cluster-tight {
  gap: var(--s-2);
}
```

### Loose Cluster

```css
.cluster-loose {
  gap: var(--s3);
}
```

## Best Practices

- Use `gap` instead of margins for consistent spacing
- Items will wrap naturally when container is too narrow
- Combine with Stack for vertical arrangements of clusters
- Use baseline alignment for text elements of different sizes
