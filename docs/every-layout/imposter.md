# The Imposter

A layout component for absolutely-positioned overlay elements that can break out of containers.

## Core Concept

The Imposter creates elements that transcend normal document flow—useful for modal dialogs, tooltips, dropdowns, and other floating UI components. It can either break out of its container or remain fixed within the viewport.

## CSS Implementation

### Basic Imposter (Absolute Positioning)

```css
.imposter {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
}
```

### Contained Imposter (Stays Within Parent)

```css
.imposter {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  max-inline-size: calc(100% - (var(--margin) * 2));
  max-block-size: calc(100% - (var(--margin) * 2));
  overflow: auto;
}
```

### Fixed Imposter (Viewport-Relative)

```css
.imposter-fixed {
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `breakout` | `false` | Allow element to exceed container boundaries |
| `fixed` | `false` | Use fixed positioning instead of absolute |
| `margin` | `0px` | Spacing buffer from container edges |

## Use Cases

- Modal dialogs with responsive sizing constraints
- Dropdown menus that need to escape overflow-hidden containers
- Floating action buttons using fixed positioning
- Tooltips and popovers requiring layered presentation
- Image lightboxes with constrained dimensions
- Notification toasts
- Context menus

## Example Usage

### Modal Dialog

```html
<div class="imposter-container">
  <div class="imposter" style="--margin: 1rem;">
    <div class="box">
      <h2>Modal Title</h2>
      <p>Modal content...</p>
      <button>Close</button>
    </div>
  </div>
</div>
```

### Fixed Toast Notification

```html
<div class="imposter-fixed" style="inset-block-start: auto; inset-block-end: 1rem;">
  <div class="box">
    Notification message
  </div>
</div>
```

### Tooltip

```html
<span class="tooltip-trigger">
  Hover me
  <span class="imposter" role="tooltip">
    Tooltip content
  </span>
</span>
```

## Container Setup

The parent element needs positioning context:

```css
.imposter-container {
  position: relative;
}

/* For full-viewport modals */
.imposter-container-fixed {
  position: fixed;
  inset: 0;
}
```

## Variants

### Top-Positioned

```css
.imposter-top {
  inset-block-start: 0;
  inset-block-end: auto;
  transform: translateX(-50%);
}
```

### Corner-Positioned

```css
.imposter-corner {
  inset-block-start: auto;
  inset-block-end: var(--s1);
  inset-inline-start: auto;
  inset-inline-end: var(--s1);
  transform: none;
}
```

## Best Practices

- Use `position: relative` on the containing element
- The margin parameter creates a buffer from edges
- Include `overflow: auto` for long content that might exceed bounds
- Consider z-index management for layered imposters
- Use fixed positioning for viewport-relative overlays (modals)
- Use absolute positioning for container-relative overlays (dropdowns)
- Add backdrop/overlay for modal-style imposters
