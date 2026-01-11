# The Stack

A layout primitive for managing vertical spacing between flowing elements.

## Core Concept

The Stack targets the relationship between adjacent siblings rather than applying margin directly to individual elements. Margin is a property of the relationship between two proximate elements, making context-aware spacing essential for flexible design systems.

## CSS Implementation

### Basic Stack (Direct Children Only)

```css
.stack > * + * {
  margin-block-start: 1.5rem;
}
```

Uses the "owl" pattern (adjacent sibling combinator with universal selector) to target only elements preceded by siblings.

### Recursive Stack (All Descendants)

```css
.stack * + * {
  margin-block-start: 1.5rem;
}
```

Removes the child combinator to apply spacing at all nesting levels.

### Split Stack (Push Content Apart)

```css
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > :nth-child(2) {
  margin-block-end: auto;
}
```

Uses flexbox with `margin-block-end: auto` to push remaining content to the bottom.

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `space` | `var(--s1)` | CSS margin value between elements |
| `recursive` | `false` | Apply spacing at all nesting levels |
| `splitAfter` | `null` | Element index to split the stack |

## Best Practices

- Align spacing with body text line-height to maintain visual rhythm
- Use Stacks wherever elements stack vertically—paragraphs, cards, form fields
- Only adjacent elements like grid cells should not be subject to a Stack

## Use Cases

- Form layouts with grouped sections
- Article content with consistent spacing
- Card-based interfaces
- Sidebar navigation menus
- Any vertical flow of content

## Variants

### Exception Handling
Override default spacing per-element using CSS custom properties:

```css
.stack > * + * {
  margin-block-start: var(--space, 1.5rem);
}

/* Override for specific element */
.stack > .special-element {
  --space: 3rem;
}
```

### Size Variants

```css
.stack-small > * + * {
  margin-block-start: var(--s-1);
}

.stack-large > * + * {
  margin-block-start: var(--s3);
}
```

## Considerations

- Recursive mode may unexpectedly space generic elements like list items
- Use targeted non-recursive stacks for deliberate control
- Avoid using Stack on grid cells (they already have gap)
