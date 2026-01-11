# The Frame

A layout component for maintaining specific aspect ratios on container elements.

## Core Concept

The Frame constrains content within a defined width-to-height proportion, making it ideal for embedding videos, images, or other media that requires consistent dimensional relationships regardless of viewport size.

## CSS Implementation

```css
.frame {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame > img,
.frame > video {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}
```

### Alternative Ratios

```css
.frame[data-ratio="1:1"] {
  aspect-ratio: 1 / 1;
}

.frame[data-ratio="4:3"] {
  aspect-ratio: 4 / 3;
}

.frame[data-ratio="3:2"] {
  aspect-ratio: 3 / 2;
}

.frame[data-ratio="21:9"] {
  aspect-ratio: 21 / 9;
}
```

## Configuration Options

| Property | Default | Description |
|----------|---------|-------------|
| `ratio` | `16:9` | Aspect ratio in `width:height` format |

## Use Cases

- Responsive video embeds (YouTube, Vimeo)
- Image galleries maintaining consistent dimensions
- Avatar containers with 1:1 ratios
- Card designs requiring proportional layouts
- Thumbnail grids
- Hero image sections
- Social media preview cards

## Example Usage

### Video Embed

```html
<div class="frame">
  <iframe
    src="https://www.youtube.com/embed/..."
    allowfullscreen>
  </iframe>
</div>
```

### Square Avatar

```html
<div class="frame" data-ratio="1:1">
  <img src="avatar.jpg" alt="User avatar">
</div>
```

### Image Card

```html
<article class="card">
  <div class="frame" data-ratio="3:2">
    <img src="cover.jpg" alt="">
  </div>
  <div class="box">
    <h3>Card Title</h3>
    <p>Card description...</p>
  </div>
</article>
```

## Variants

### Common Aspect Ratios

| Ratio | Use Case |
|-------|----------|
| `1:1` | Avatars, thumbnails, Instagram-style |
| `4:3` | Traditional photo/video format |
| `16:9` | Widescreen video, YouTube |
| `3:2` | Photography, 35mm film |
| `21:9` | Ultrawide/cinematic |
| `9:16` | Vertical video (stories) |

### Object Fit Options

```css
.frame > img {
  object-fit: contain; /* Show entire image */
}

.frame > img {
  object-fit: cover; /* Fill frame, crop excess */
}
```

## Best Practices

- Use `object-fit: cover` for images that should fill the frame
- Use `object-fit: contain` when the entire image must be visible
- Enforce single-child structure for optimal semantics
- The `aspect-ratio` property has good modern browser support
- Combine with Grid for responsive image galleries
- Consider using `object-position` for control over crop positioning
