# Jeeva OS — Portfolio

Personal portfolio for Jeeva Satish Kumar, styled as an "analytics command center".

Live: https://jeeva-portfolio-mu.vercel.app

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · lucide-react icons · Vercel Analytics

## Where things live

| What you want to change | File |
| --- | --- |
| Project case studies | `src/data/projects.ts` |
| Experience timeline | `src/data/experience.ts` |
| Leadership | `src/data/leadership.ts` |
| Skills | `src/data/skills.ts` |
| Education | `src/data/education.ts` |
| Hero / contact text | `src/components/Hero.tsx`, `src/components/ContactSection.tsx` |
| Page layout and nav | `src/app/page.tsx` |
| Title / description (SEO) | `src/app/layout.tsx` |
| Styling | `src/app/globals.css` |
| Resume | `public/resume.pdf` (replace the file, keep the name) |
| Link-preview image | `src/app/opengraph-image.png`, `src/app/twitter-image.png` |

## Edit → preview → publish

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:3000
npm run build      # optional: check it builds before pushing
git add -A
git commit -m "Describe the change"
git push           # Vercel deploys main automatically (~1 min)
```

Every push to `main` on GitHub (`JEEVA-SATISK-KUMAR/jeeva-portfolio`) triggers a production deploy on Vercel.
