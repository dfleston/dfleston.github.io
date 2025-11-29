# Daniel Leston Live Workspace

A personal blog exploring code experiments and thoughts on Bitcoin, Cognitive Computing, and Virtual Production.

## About

This is Daniel Leston's personal website built with [Hugo](https://gohugo.io/) using a custom CodeThink theme. The site focuses on:

- 🪙 **Bitcoin** - Exploring the future of money and decentralized systems
- 🧠 **Cognitive Computing** - AI, machine learning, and intelligent systems
- 🎬 **Virtual Production** - Modern filmmaking and digital content creation

## Tech Stack

- **Static Site Generator**: Hugo v0.152.2+
- **Theme**: CodeThink (custom theme)
- **Content Format**: Markdown with support for:
  - Code syntax highlighting
  - Mermaid diagrams
  - Mathematical equations
  - Custom shortcodes

## Development

### Prerequisites

- Hugo Extended v0.152.2 or later
- Git

### Running Locally

```bash
# Clone the repository
git clone <repository-url>
cd hugoblog

# Start the development server
hugo server -D

# Build for production
hugo
```

The site will be available at `http://localhost:1313/`

### Project Structure

```
.
├── config/          # Site configuration
├── content/         # Blog posts and pages
├── layouts/         # Custom layouts and shortcodes
├── static/          # Static assets
├── themes/          # CodeThink theme
└── public/          # Generated site (after build)
```

## Writing Content

Blog posts are written in Markdown and stored in `content/blog/`. Each post should be in its own directory with an `index.md` file:

```
content/blog/my-post/
├── index.md
└── featured.jpg (optional)
```

## Connect

- Twitter/X: [@df_leston](https://twitter.com/df_leston)
- GitHub: [@dfleston](https://github.com/dfleston)

## License

© 2025 Daniel Leston. This work is licensed under Creative Commons (Non-Commercial, No Derivatives, Share Alike).
