# Tulas International School — Homepage Redesign

An animated, mobile-first redesign of the [TIS homepage](https://tis.edu.in/), built for the Frontend Developer task. The school's name, branding and copy are kept; the page is rebuilt as a modern single-page experience.

**Live site:** _add your Vercel / Netlify link here_

## Tech stack

| Need | Choice |
| --- | --- |
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 (colour tokens in `src/index.css`) |
| Animation | Framer Motion, plus CSS keyframes for the endless marquees |
| Hosting | Vercel (or Netlify / GitHub Pages) |

## Features

The brief asks for two extras; all four are included.

- **Custom cursor** — a dot plus a trailing ring that grows over links, buttons, form fields and cards. Only shown for mouse users, never on touch devices.
- **Scroll-triggered reveals** — sections and cards slide in with a stagger as they enter the viewport. Stats count up when seen.
- **Animated dark / light switch** — sliding pill with a spinning sun/moon icon. Remembers the choice and follows the system setting on first visit, with no flash on load.
- **Scroll progress bar** — smooth spring-driven bar at the top of the page.

Also included: hide-on-scroll navbar with an animated mobile menu, hero parallax, tabbed achievers carousel, a validated enquiry form, and `prefers-reduced-motion` support.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The site's images are included in `public/images/`, so no separate asset download step is needed.

Open the address printed in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # check the code with oxlint
```

## Deploy

**Vercel (recommended)**

1. Push this repository to GitHub.
2. On vercel.com choose **Add New → Project** and import the repository.
3. Keep the defaults (Framework: Vite, Build: `npm run build`, Output: `dist`) and click **Deploy**.

**Netlify:** same steps, with build command `npm run build` and publish directory `dist`.

## Project structure

```
src/
  main.jsx              App entry
  App.jsx               Page layout: lists the sections in order
  index.css             Tailwind import, theme colours, marquee keyframes
  data/content.js       All page copy and links in one place
  hooks/
    useTheme.js         Dark/light state, saved in localStorage
    usePointerFine.js   Detects mouse vs touch (used by the cursor)
  components/
    Navbar, Hero, Showcase, About, Stories, EnquiryForm, Life,
    Sports, Rankings, Achievers, Awards, VirtualTour, Parents,
    Reviews, Collaborations, Footer     one file per page section
    CustomCursor, ScrollProgress, ThemeToggle, Reveal   the feature components
    Section, SectionHeading, Button, Marquee, ScrollRow, Photo   small shared pieces
```

Design decisions worth knowing:

- Components only animate `transform` and `opacity`, which keeps scrolling smooth.
- The count-up numbers use Framer Motion values, so they update the DOM without re-rendering React every frame.
- Colours are CSS variables (`--bg`, `--ink`, `--accent`...), so the dark theme is just a second set of values.
- Semantic HTML throughout: `header`, `nav`, `main`, `section` with labels, `footer`, real buttons, tab roles on the achievers tabs, a skip link, and visible focus rings.

## Notes and limitations

- **Images** are the school's own photos from `tis.edu.in`, included locally in `public/images/`. If a file is missing, a tinted placeholder appears instead; restore it into `public/images/` with the same file name.
- **The three parent testimonial videos** still stream from the school's video host (`assets.tulas.edu.in`) because the files are large.
- **The enquiry form has no backend.** It validates the fields and shows a thank-you message. The original site's phone-OTP step is not reproduced.
- Navigation items point to sections of this single page rather than the original site's separate pages.
- Obvious typos in the original copy were corrected (for example "Pollution", "Uttarakhand").
- Fonts (Fraunces and Inter) load from Google Fonts.
