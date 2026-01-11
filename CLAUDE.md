# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog built with Eleventy v3 (11ty) static site generator. Zero JavaScript output, optimized for performance. Deployable to Netlify, Vercel, or Cloudflare Pages.

## Essential Commands

```bash
npm start              # Development server with live reload
npm run build          # Production build
npm run build-ghpages  # Build for GitHub Pages (with path prefix)
npm run debug          # Show all Eleventy internals
npm run benchmark      # Build performance metrics
```

## Architecture

**Tech Stack**: Eleventy v3, Nunjucks templates, Markdown, Luxon (dates), Zod (validation), PrismJS (syntax highlighting)

**Directory Structure**:
- `content/` - Eleventy input directory with pages and blog posts
- `_includes/layouts/` - Template hierarchy: `base.njk` → `home.njk`/`post.njk`
- `_data/` - Global data files (metadata.js for site config)
- `_config/` - Configuration modules (filters.js for Nunjucks filters)
- `css/` - Global stylesheets with CSS variables and dark mode
- `public/` - Static assets copied as-is to output
- `_site/` - Build output (gitignored)

**Data Flow**:
1. Content files with YAML frontmatter in `content/`
2. Data cascade via `*.11tydata.js` applies layouts and collection tags
3. Templates transform content through layout hierarchy
4. Plugins handle image optimization, syntax highlighting, feed generation
5. Static HTML/CSS output to `_site/`

**Collections**:
- `posts` - Blog posts (files in `content/blog/`, auto-tagged via `blog.11tydata.js`)

## Key Conventions

**Draft Posts**: Set `draft: true` in frontmatter. Drafts appear in dev server (`npm start`) but excluded from production builds.

**Navigation**: Use `eleventyNavigation` data key with `key` and `order` properties for top-level menu items.

**Custom Filters** (in `_config/filters.js`):
- `readableDate(dateObj, format, zone)` - Format dates
- `head(array, n)` - Get first n elements
- `filterTagList(tags)` - Remove "all" and "posts" meta-tags

**CSS**: Variables at `:root` for theming, dark mode via `@media (prefers-color-scheme: dark)`, per-page bundles via `{% css %}` shortcode.

**Images**: Co-locate with posts or place in `public/img/`. Eleventy Image auto-generates AVIF/WebP with responsive srcsets.

## Configuration

Main config in `eleventy.config.js`. Site metadata in `_data/metadata.js` (title, URL, author, description).

Requires Node.js >= 22 (see `.nvmrc`).
