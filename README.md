# TinyDocs 📚

> **Note:** This project is a fork of [TinyBones](https://github.com/itzCozi/tinybones) transformed into a documentation framework.

A minimal documentation framework built with [Astro](https://astro.build/). Perfect for developers who want clean, fast, and customizable documentation without the bloat.

[![Use this template](https://img.shields.io/badge/Use%20this%20template-brightgreen?style=for-the-badge)](https://github.com/itzCozi/tinydocs/generate)

## Key features

- **Minimal and fast:** Built with Astro for optimal performance and minimal JavaScript
- **SEO-friendly:** Sitemap and Open Graph protocol support out of the box
- **Accessible:** System, dark, and light mode support with keyboard navigation
- **Developer-friendly:** TypeScript, Tailwind CSS, and modern tooling
- **MDX support:** Write interactive documentation with custom components including built-in InfoBox admonitions
- **Organized structure:** Hierarchical navigation with collapsible sections
- **Sidebar navigation:** List of all pages on the left with nested categories
- **Table of contents:** Right-side TOC for easy page navigation

## Getting Started

1. Click the "Use this template" button at the top of the repository
2. Clone your new repository to your local machine
3. Install dependencies: `pnpm install`
4. Update `src/siteConfig.ts` with your site details
5. Add your content to `src/content/docs/` - it's that easy!
6. Start writing and customizing!

## Documentation Structure

Your documentation is organized in `src/content/docs/`:

```
src/content/docs/
├── index.mdx              # Main documentation page
├── intro/
│   ├── index.mdx         # Intro section landing page
│   └── installation.mdx  # Installation guide
└── guides/
    └── writing-docs.mdx  # Writing documentation guide
```

Each directory can have an `index.mdx` file that serves as the landing page for that section. The sidebar will automatically create collapsible sections for nested directories.

## Customization

- Update site configuration in `src/siteConfig.ts`
- Modify colors and styling in `src/styles/`
- Add your documentation content in `src/content/docs/`
- Control page order using the `order` frontmatter field

## Building and Deploying

To build your documentation site for production, run:

```bash
pnpm build
```

This will generate static files in the `dist/` directory. You can then deploy these files to any static hosting provider like Vercel, Netlify, or Cloudflare Pages (which is completely free and super easy). For most providers all you have to do is link your GitHub repository and set your build command to `pnpm build` and your output directory to `dist/`.

## Package Manager

This project exclusively uses [pnpm](https://pnpm.io/) as its package manager for several reasons:

- **Disk space efficiency**: pnpm uses a content-addressable store to avoid duplication
- **Faster installations**: pnpm creates hard links instead of copying packages
- **Strict dependency management**: prevents phantom dependencies
- **Monorepo support**: built-in workspace capabilities
