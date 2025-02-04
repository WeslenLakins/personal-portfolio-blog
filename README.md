# Weslen T. Lakins Personal Portfolio & Blog

![WTL Thoughts Logo](public/static/images/logo.png)

## WTL Thoughts

Welcome to my personal portfolio and blog repository. This site is my creative and professional outlet where I share detailed insights on law, technology, data security, and my various projects. It is built using modern web technologies to provide a fast, accessible, and beautifully designed experience.

## Overview

This project is a customized version of the [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) tailored for my personal use. The repository integrates best practices from Next.js, React, and Tailwind CSS, with content managed through Contentlayer for effortless MDX/Markdown handling. It’s optimized for performance, accessibility, and SEO, while providing flexible customization options.

### Key Features

- **Responsive & Modern Design:**  
  Utilizes Tailwind CSS for a fully responsive layout with support for both light and dark themes.

- **Optimized Performance:**  
  Lightweight JavaScript (around 85kB on first load) and near-perfect Lighthouse scores ensure a snappy experience.

- **Content Management with Contentlayer:**  
  Markdown/MDX posts are managed and transformed using Contentlayer, offering type safety and easy content updates.

- **Flexible Layouts & Custom Components:**  
  Multiple blog post layouts, dynamic project pages, and reusable components allow for a highly customized presentation.

- **SEO and Accessibility:**  
  Built-in support for RSS feeds, sitemaps, and preconfigured security headers help the site rank well and remain secure.

- **Developer-Ready Configuration:**  
  Includes ESLint, Prettier, Husky for Git hooks, and a full dev container configuration to ensure consistent development environments.

---

## Technologies Used

- **Framework & Runtime:**  
  [Next.js](https://nextjs.org) (using the App directory and React Server Components) with TypeScript.

- **Styling:**  
  [Tailwind CSS](https://tailwindcss.com) (customized via `tailwind.config.js` and additional styles in `/css`).

- **Content Management:**  
  [Contentlayer](https://www.contentlayer.dev) for handling MDX/Markdown content with enhanced type safety.

- **Utilities & Tooling:**

  - ESLint and Prettier for code quality.
  - Husky for Git hooks.
  - Yarn for dependency management (with lockfiles and .yarn configurations).

- **Deployment:**  
  Optimized for Vercel, with options for static export and other hosting solutions (GitHub Pages, Netlify, etc.).

---

## Repository Structure

Below is a breakdown of the main folders and configuration files in the repository:

### Development & Configuration

- **.devcontainer/**  
  Contains configuration files for setting up a consistent development container environment.

- **.github/**  
  Includes GitHub Actions workflows for CI/CD, issue templates, and other repository management files.

- **.husky/**  
  Configured Git hooks to run linters and tests before commits, ensuring code quality.

- **.vscode/**  
  VS Code workspace settings to improve the local development experience.

- **.yarn/**  
  Yarn-specific configurations and release files.

### Source Code & Content

- **app/**  
  The Next.js application folder where routing, server components, and page-level code reside.

- **components/**  
  Reusable React components for UI elements such as headers, footers, blog cards, and more. This folder enables the flexible design and functionality of your site.

- **css/**  
  Tailwind CSS base styles and additional custom styles. Adjustments here directly impact the look and feel of the entire site.

- **data/**  
  Contains structured data files and content:

  - **siteMetadata.js:** Site-wide settings and metadata.
  - **authors/**: Markdown files with author bios.
  - **projectsData.js:** Data driving the projects/portfolio section.
  - **headerNavLinks.js:** Navigation link configuration.
  - **blog/**: Directory where all blog posts (in MDX/Markdown format) are stored.

- **faq/**  
  A collection of frequently asked questions and answers to assist visitors and contributors.

- **layouts/**  
  Templates used to render various pages and blog post formats:

  - _PostLayout_, _PostSimple_, and _PostBanner_ provide multiple styles for content display.
  - Blog listing layouts (e.g., `ListLayoutWithTags`) to facilitate navigation through your content.

- **public/**  
  Static assets including images, favicons, and other media files used across the site.

- **scripts/**  
  Utility scripts to assist with tasks such as deployment and local development automation.

### Configuration Files

- **contentlayer.config.ts:**  
  Defines content sources, MDX processing, and schema definitions for posts and pages.

- **next.config.js:**  
  Next.js configuration including security headers, image optimization settings, and custom build options.

- **tailwind.config.js & postcss.config.js:**  
  Tailwind and PostCSS configurations to manage styles and enable theme customizations.

- **tsconfig.json & jsconfig.json:**  
  TypeScript and JavaScript configuration files to ensure proper module resolution and type-checking.

- **.eslintrc.js & .prettier.config.js:**  
  Code style and linting rules to maintain code consistency.

- **package.json & yarn.lock:**  
  Dependency management files defining project scripts and required libraries.

---

## Getting Started

### Prerequisites

- **Node.js:** Version 14 or later
- **Package Manager:** Yarn (preferred) or npm

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/WeslenLakins/personal-portfolio-blog.git
   cd personal-portfolio-blog
   ```

2. **Install Dependencies:**

   ```bash
   yarn install
   # or if you prefer npm:
   npm install
   ```

### Running Locally

Start the development server with live reloading:

```bash
yarn dev
```

Then open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your site.

### Building for Production

Create an optimized production build:

```bash
yarn build
```

To run the production build locally:

```bash
yarn start
```

---

## Customization & Extension

This repository is highly customizable. Here are some key areas you can modify:

- **Content:**

  - Update blog posts in `/data/blog` (supports MDX/Markdown).
  - Modify author details in `/data/authors`.
  - Adjust site metadata and global settings in `/data/siteMetadata.js`.

- **Design & Layout:**

  - Customize Tailwind styles in `tailwind.config.js` and `/css`.
  - Modify layout templates in `/layouts` to change the presentation of posts and pages.
  - Update UI components in `/components` to tailor the site’s look and functionality.

- **Projects & Portfolio:**

  - Manage portfolio projects through `/data/projectsData.js`.
  - Enhance or add new components to showcase work and projects.

- **Navigation:**

  - Edit navigation links in `/data/headerNavLinks.js` to reflect your desired structure.

- **Configuration:**
  - Tweak Next.js settings in `next.config.js` for image optimization, security policies, and more.
  - Adjust Contentlayer settings in `contentlayer.config.ts` to support additional MDX features or custom plugins.

---

## Deployment

### Vercel

Deploying on Vercel is straightforward—just connect your GitHub repository to Vercel and follow the prompts. Vercel’s optimized Next.js support will handle the rest.

### Other Hosting Options

For static hosting (GitHub Pages, Netlify, etc.), you can create a static export:

```bash
EXPORT=1 UNOPTIMIZED=1 yarn build
```

Then deploy the contents of the generated `out` directory to your host of choice.

---

## Contributing

Contributions, bug reports, and feature requests are welcome. To contribute:

1. **Fork the Repository.**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Describe your feature or fix"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Open a Pull Request** and describe your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## About

I'm Weslen T. Lakins—a legal professional with a passion for technology and data security. This site is my platform to share thoughtful analyses, tutorials, and project updates that bridge the worlds of law and technology. Connect with me on [GitHub](https://github.com/WeslenLakins) or via my social channels.

---

This README is designed to provide a comprehensive guide to your repository and help others understand the structure, features, and customization options available. Feel free to adjust or expand any sections to further reflect your project’s evolution and personal style.

---
