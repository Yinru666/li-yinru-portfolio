# Li Yinru Personal Research Portfolio

[Live Site](https://li-yinru-portfolio.vercel.app) · [Projects](https://li-yinru-portfolio.vercel.app/projects) · [Research](https://li-yinru-portfolio.vercel.app/research) · [Resume](https://li-yinru-portfolio.vercel.app/resume) · [Contact](https://li-yinru-portfolio.vercel.app/contact)

This repository contains the source code for 李胤儒's personal research portfolio. The site presents project work across UAV-based inspection, computer vision, smart transportation, and transportation infrastructure safety.

本仓库是李胤儒个人科研主页的源码。网站围绕无人机低空巡检、计算机视觉、智慧交通与交通基础设施安全治理展开，用交互式项目档案的方式展示项目经历、研究方向、履历与联系方式。

## Overview

The website is designed as an explorable research profile rather than a static resume page. It uses restrained dark UI, clickable project cards, image lightboxes, pipeline explainers, and accessible micro-interactions to help visitors understand the evidence behind each project.

网站目标不是简单的静态简历，而是一份可探索的个人研究档案。页面通过深色工程感视觉、项目卡片、图片放大、技术流程解释和清晰的交互反馈，帮助访问者理解项目背后的证据链与工程语境。

## Site Structure

- **Home**: profile summary, selected projects, research directions, key achievements, technical skills, and contact CTA.
- **Projects**: case-study pages with problem framing, method pipeline, evidence gallery, results, and reflection.
- **Research**: research directions including UAV remote sensing, road damage detection, loess slope warning, and digital twin workflows.
- **Resume**: education, achievements, project experience, skills, research outcomes, and selected evidence materials.
- **Contact**: public email, GitHub link, resume entry, and WeChat contact note.

## Tech Stack

- **Framework**: Next.js App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI primitives**: shadcn/ui and Radix UI
- **Images**: local static assets with `next/image`
- **Deployment**: Vercel

## Design Notes

- Dark, high-contrast interface with restrained engineering-oriented motion.
- Every project and achievement entry has a clear destination or deeper interaction.
- Technical pipelines use interactive tabs instead of static diagrams only.
- Evidence images keep their original project context and can be opened for inspection.
- Motion respects `prefers-reduced-motion`.

## Security and Privacy

This is a static portfolio site with no login system, database, CMS, or contact-form backend.

Implemented safeguards:

- Security headers configured through `next.config.ts`.
- Content Security Policy, frame blocking, MIME sniffing protection, and restricted browser permissions.
- `X-Powered-By` disabled.
- `robots.txt` rules for common AI and crawler agents.
- Sensitive certificate and award images marked with `X-Robots-Tag: noindex, noimageindex, noarchive`.
- Public pages avoid exposing phone numbers, identity-related information, certificate numbers, or license numbers.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Verification

Run linting:

```bash
npm run lint
```

Run the production build:

```bash
npm run build
```

On some Windows sandbox environments, `next build` can fail with `spawn EPERM` when worker processes are blocked. Running the same build outside that sandbox completes successfully.

## Content Maintenance

Most visible content is managed through local data files:

- Profile and contact content: `src/data/profile.ts`, `src/data/contact.ts`
- Projects and case studies: `src/data/projects.ts`
- Research directions: `src/data/research.ts`
- Achievements and credentials: `src/data/achievements.ts`
- Skill groups: `src/data/skills.ts`
- Image metadata: `src/data/assets.ts`

Static image assets live under:

```text
public/images/picture/
```

To add a new project:

1. Add image metadata in `src/data/assets.ts`.
2. Add a project record in `src/data/projects.ts`.
3. Link related research IDs from `src/data/research.ts`.
4. Run `npm run lint` and `npm run build`.

## Deployment

The production site is hosted on Vercel:

[https://li-yinru-portfolio.vercel.app](https://li-yinru-portfolio.vercel.app)

The project is intended to be connected to GitHub so that pushes to `main` trigger Vercel deployments automatically.

## License

The source code is maintained as a personal portfolio project. Images, certificates, award materials, and personal content belong to the site owner and should not be reused without permission.
