# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page built with **Astro**, a modern static site generator optimized for speed and simplicity. The project includes blog functionality via MDX and automatic sitemap generation.

## Stack

- **Framework**: Astro 7.x
- **Language**: JavaScript/TypeScript
- **Node**: >= 22.12.0
- **Deployment**: Docker (see docker-compose.yml for local development)

## Development Commands

### Local Development (Native)
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Docker Development
```bash
docker-compose up    # Start app in Docker on port 3000
docker-compose down  # Stop and remove containers
```

## Project Structure

- **`src/pages/`** — Astro pages and routes. Files here become routes automatically (file-based routing).
- **`src/components/`** — Reusable Astro components (.astro files).
- **`src/layouts/`** — Shared layout components for pages and blog posts.
- **`src/content/`** — Content collections (blog posts as .md or .mdx files).
- **`public/`** — Static assets (images, favicon, etc.) served at root.
- **`astro.config.mjs`** — Astro configuration (integrations, output settings).

## Key Points

- **Astro Syntax**: `.astro` files combine HTML-like templates with JavaScript frontmatter (between `---`). JavaScript runs at build time only (unless using `client:*` directives for islands).
- **Integrations Installed**: `@astrojs/mdx` (Markdown + JSX in posts), `@astrojs/rss` (RSS feed), `@astrojs/sitemap` (auto-generated sitemap).
- **Build Output**: Static HTML files in `dist/` directory.
- **Images**: Use `@astrojs/image` or `astro:assets` for optimized images in posts and components.

## Common Development Tasks

### Add a New Page
Create a file in `src/pages/` (e.g., `src/pages/about.astro`). It becomes a route automatically.

### Add a Blog Post
Add a `.md` or `.mdx` file in `src/content/blog/`. Include frontmatter with layout, title, description, pubDate. Query posts via `getCollection('blog')` in pages.

### Customize Styling
Global styles go in `src/styles/global.css`. Component styles are scoped to `.astro` files using `<style>` tags.

### Build and Deploy
Run `npm run build` to generate static files in `dist/`. Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Docker Workflow

The `Dockerfile` and `docker-compose.yml` are configured for local development:
- Mounts source code as a volume for hot reload.
- Exposes port 3000.
- Runs `npm run dev` in the container.

To rebuild after package.json changes:
```bash
docker-compose build --no-cache
docker-compose up
```
