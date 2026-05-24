# Kirti Mahapatra — Portfolio Design Document

## Overview
A creative, animated yet minimal single-page React portfolio for Kirti Mahapatra, a female SDE aspirant with an M.Tech from IIT Bhilai. The design adapts the sophisticated structure of codedgar.com — numbered sections, code-inspired annotations (`// section.about`), smooth scroll reveals, interactive elements, and canvas effects — into an elegant, feminine, and technically impressive portfolio.

**Core Philosophy:** Code elegance meets visual poetry. Every animation has purpose. Every pixel is intentional.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | **React 19** + **Vite** | Fast development, optimized production builds |
| Styling | **Tailwind CSS 4** | Utility-first, consistent design tokens |
| Animations | **Framer Motion** + **GSAP** | Scroll reveals, parallax, complex sequences |
| Icons | **Lucide React** | Real, consistent iconography |
| Fonts | **JetBrains Mono** (mono) + **Plus Jakarta Sans** (display) + **Crimson Text** (body accents) | Sophisticated typography |
| State | React hooks | Custom cursor, boot sequence, keyboard shortcuts |
| Build Output | Static SPA | Deploy anywhere (Vercel/Netlify) |

---

## Color Palette: Midnight Rose

```
Background Primary:   #0F0E13  (Deep midnight with warm undertone)
Background Secondary: #16141F  (Slightly lighter, for cards/alt sections)
Background Elevated:  #1E1C27  (Cards, hover states)

Text Primary:         #F5F0EB  (Warm off-white)
Text Secondary:       #A8A3B3  (Muted lavender-gray)
Text Tertiary:        #6B6577  (Subtle, for annotations)

Accent Rose:          #D4849A  (Primary accent — soft rose)
Accent Rose Glow:     #E8A5B8  (Hover states, highlights)
Accent Lavender:      #9B8EC7  (Secondary accent — soft purple)
Accent Lavender Glow: #B8ABE0  (Hover states)
Accent Gold:          #D4AF87  (Tertiary — warm highlights, counters)

Border:               rgba(212, 132, 154, 0.12)
Border Hover:         rgba(212, 132, 154, 0.25)

Success:              #8FBC8F
Error:                #D48484
```

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #D4849A 0%, #9B8EC7 50%, #D4AF87 100%);
--gradient-card: linear-gradient(180deg, rgba(212,132,154,0.08) 0%, transparent 100%);
--gradient-glow: radial-gradient(circle, rgba(212,132,154,0.15) 0%, transparent 70%);
```

---

## Typography System

```
Font Family:
  --font-mono:    'JetBrains Mono', monospace;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body:    'Crimson Text', serif;

Scale:
  --text-hero:      72px / 1.0 / display / 700 / -0.03em
  --text-h1:        48px / 1.1 / display / 700 / -0.02em
  --text-h2:        36px / 1.2 / display / 600 / -0.01em
  --text-h3:        24px / 1.3 / display / 600
  --text-body-lg:   20px / 1.6 / body / 400
  --text-body:      16px / 1.6 / body / 400
  --text-sm:        14px / 1.5 / mono / 400
  --text-xs:        12px / 1.4 / mono / 400 / 0.02em
  --text-2xs:       10px / 1.4 / mono / 400
```

---

## Layout & Spacing

```
Container Max Width: 1200px
Section Padding:     120px vertical (desktop), 80px (mobile)
Container Padding:   24px → 48px → 64px horizontal

Spacing Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 120px
```

---

## Global Effects

### 1. Noise Texture Overlay
- Subtle grain across entire viewport
- `opacity: 0.03`, `mix-blend-mode: overlay`
- Static PNG, `pointer-events: none`

### 2. Custom Cursor
- **Default:** 4px dot (Accent Rose) + corner-bracket ring with lag (lerp 0.15)
- **Hover links:** Ring expands, dot glows
- **Hover cards:** Ring becomes square bracket targeting element
- Disabled on touch, respects `prefers-reduced-motion`

### 3. Smooth Scroll
- CSS `scroll-behavior: smooth`
- Optional Lenis for premium feel

### 4. Boot Sequence (First Visit Only)
- "K" SVG stroke draw + fill rising from bottom
- Duration ~1.2s, stored in `sessionStorage`
- Skip if `prefers-reduced-motion`

---

## Page Sections

---

### Section 00: Boot Sequence
- Full-screen overlay, Background Primary
- Centered stylized "K" SVG
- Stroke draws (1s), fill rises (0.8s), overlay lifts (0.6s)

---

### Section 01: Hero
**ID:** `#hero` | **Annotation:** `// system.init`

**Layout:** 100vh, two-column (content left, visual right), single column on mobile.

**Content:**
```
Pre-title:    // system.init  →  M.Tech IIT Bhilai · GATE CSE 2025 · SDE Aspirant
Greeting:     Hello, I'm
Name:         Kirti Mahapatra
Role:         Software Development Engineer
Tagline:      I build systems that scale. From network science on materials data
              to real-time collaborative editors — I turn complex problems into
              elegant, performant solutions.
CTAs:         [View My Work]  [Download Resume]
```

**Visual:** Right side portrait with ASCII reveal scanline effect (3:4 ratio, max 380px). Subtle rose glow behind image.

**Background:** Dot grid (28px spacing, 1px dots, opacity 0.12, breathing animation 8s).

**Section Number:** "01" — 144px, top-left, opacity 0.06, parallax.

**Entrance:** Staggered fade-in-up, 0.2s intervals.

---

### Section 02: The Value I Bring
**ID:** `#value` | **Annotation:** `// 0x02 // the.value`

**Purpose:** Show Kirti understands engineering pain points and delivers value.

**Layout:** Centered header, 2×2 grid of problem cards (desktop), single column (mobile).

**Content:**
```
Header:       The Value I Bring
Subtitle:     Great software isn't just about writing code. It's about solving
              problems before they become crises.

Card 1 [01]:  Scalable Architecture
              "Systems that break under load cost companies millions.
               I design architectures that grow gracefully — from
               graph-theory-driven material networks to real-time
               collaborative systems."

Card 2 [02]:  Performance Engineering
              "I rebuilt 12 pages in Next.js 14, cutting LCP by 38%
               and lifting Lighthouse scores from 54 to 91.
               Performance isn't an afterthought — it's the foundation."

Card 3 [03]:  Clean, Maintainable Code
              "Technical debt compounds silently. I write code that the
               next developer (future me) will thank me for —
               modular, typed, tested, and documented."

Card 4 [04]:  Cross-Functional Impact
              "The best products emerge when design, product, and
               engineering speak the same language. I bridge those gaps
               with data, communication, and empathy."
```

**Card Design:** Transparent with rose border, hover brightens + translateY(-4px) + glow.

**Section Number:** "02" — top-right, 120px, opacity 0.08.

---

### Section 03: About Me
**ID:** `#about` | **Annotation:** `// section.about`

**Layout:** Left text (~60%), right stats (~40%).

**Content:**
```
Annotation:   // section.about
Title:        Who I Am

Lead:         "I'm Kirti Mahapatra, an M.Tech Computer Science student at
              IIT Bhilai with a passion for building systems that matter.
              From network science on 500+ material alloys to real-time
              collaborative editors handling 1,000+ documents, I've learned
              that great engineering is equal parts logic and empathy."

Link:         [More about my journey →]  (scrolls to Experience)
```

**Stats Grid (Animated Counters):**
```
4+          years       coding & building
12+         pages       rebuilt with Next.js 14
91          Lighthouse  performance score achieved
38%         reduction    in LCP at Bottom Street
```

**Counter Animation:** Count up from 0, 2s duration, ease-out, trigger at 50% viewport.

**Section Number:** "03" — top-left, 120px, opacity 0.08.

---

### Section 04: Featured Projects
**ID:** `#projects` | **Annotation:** `// section.work`

**Layout:** Header left, 3 project cards in a row (desktop), stacked (mobile).

**Content:**
```
Annotation:   // section.work
Title:        Featured Work

Card 1 — Global Alloy Ecosystem:
  Year:       2025
  Role:       Network Science Researcher
  Title:      Global Alloy Ecosystem
  Desc:       Scraped and structured 500+ alloys from public materials databases;
              modeled the ecosystem as a weighted graph with 200+ nodes.
              Applied PageRank, betweenness centrality, and Louvain community
              detection to identify the 10 most supply-chain-critical metals.
              Built an interactive PyVis force-directed graph for drill-down.
  Tags:       Python, NetworkX, Pandas, PyVis, Graph Theory
  Links:      GitHub

Card 2 — CollabNote:
  Year:       2024
  Role:       Full Stack Developer
  Title:      CollabNote
  Desc:       Real-time collaborative markdown editor with WebSocket sync and
              operational-transformation conflict resolution. Architected with
              React/TypeScript custom hooks, cutting re-renders by 60% via
              React.memo and useMemo. JWT + refresh-token auth with HTTP-only
              cookies. Per-document RBAC. Compound indexes reduced fetch
              latency from ~400ms to ~60ms at 1,000 document scale.
  Tags:       React, TypeScript, Node.js, Socket.io, MongoDB, JWT
  Links:      GitHub

Card 3 — SnapLink:
  Year:       2024
  Role:       Backend Engineer
  Title:      SnapLink
  Desc:       URL shortener sustaining 100 concurrent redirects with p99
              latency under 20ms via Redis caching. Sliding-window rate limiter
              (100 req/15min per IP) blocking abuse with zero impact on
              legitimate traffic. Click analytics pipeline with MongoDB
              aggregation and live Recharts dashboard.
  Tags:       Node.js, TypeScript, Redis, MongoDB, React, Recharts
  Links:      GitHub, Live
```

**Card Design:** Image top (4:3), content bottom. Hover: image scale(1.05), card lifts, border glows. Tags are pills.

**Image Placeholder:** If no real screenshot, elegant gradient with project initials in display font.

**Section Number:** "04" — top-left, 120px, opacity 0.08.

**Dot Grid:** Lavender tinted, returns behind this section.

---

### Section 05: Skills & Technologies
**ID:** `#skills` | **Annotation:** `// section.modules`

**Layout:** Centered header, category cards with animated glyph icons.

**Content:**
```
Annotation:   // section.modules
Title:        How I Build
Subtitle:     My technical toolkit — languages, frameworks, and practices
              I use to turn ideas into reality.

Languages:    C/C++, Python, JavaScript, TypeScript, Java, SQL
Frontend:     React.js, Next.js, Redux Toolkit, React Query, Tailwind CSS, Framer Motion
Backend:      Node.js, Express.js, REST APIs, WebSockets (Socket.io)
Database:     MongoDB, MySQL, Redis
Data/Tools:   NetworkX, Pandas, BeautifulSoup, PyVis, scikit-learn, Git, Vercel, Postman, Linux
CS Fundamentals: DSA, OS, DBMS, Computer Networks, OOP, Graph Theory
```

**Visual:** Each category is a module card with a 3×3 animated glyph icon.
- Glyph colors: Rose, Lavender, Gold
- Hover: cells fill sequentially, glow softens

**Glyph Patterns:** Each category has a unique binary pattern that fills to all-ones on hover.

**Entrance:** Cards stagger in from bottom, 0.12s between each.

**Section Number:** "05" — top-right, 120px, opacity 0.08.

---

### Section 06: Experience
**ID:** `#experience` | **Annotation:** `// section.timeline`

**Layout:** Vertical timeline, left-aligned.

**Content:**
```
Annotation:   // section.timeline
Title:        Experience

Entry 1:
  Period:     Oct 2023 — Jun 2024
  Role:       Frontend Developer Intern
  Company:    Bottom Street (Remote)
  Bullets:
    • Rebuilt 12 marketing/product pages in Next.js 14 + TypeScript;
      Lighthouse Performance 54→91, LCP down 38%.
    • Migrated useEffect fetching to Server Components + SSG;
      TTFB 920ms→310ms, eliminated 18 redundant client re-renders.
    • Implemented JSON-LD schema + semantic HTML;
      30% organic ranking improvement (Google Search Console, 90 days).
    • Built reusable TypeScript component library (buttons, modals, Zod forms);
      ~4 hours saved per sprint per feature.
  Tags:       Next.js, TypeScript, SEO, Performance, Component Library

Entry 2:
  Period:     2025 — Present
  Role:       M.Tech Researcher
  Company:    IIT Bhilai
  Bullets:
    • Conducting research in network science applied to material informatics.
    • Developing graph-based models for supply chain criticality analysis.
  Tags:       Python, NetworkX, Graph Theory, Research
```

**Timeline Design:** 1px vertical line (Rose→Lavender gradient), 8px dots, content slides in from right.

**Entrance:** Each entry fade + translateX(30px→0), staggered 0.2s.

**Section Number:** "06" — top-left, 120px, opacity 0.08.

---

### Section 07: Education & Achievements
**ID:** `#education` | **Annotation:** `// section.learning`

**Layout:** Two-column: Education (left) + Achievements (right).

**Content:**
```
Annotation:   // section.learning
Title:        Education & Growth

Education:
  M.Tech, Computer Science and Engineering
  Indian Institute of Technology (IIT) Bhilai
  June 2025 — Present | Raipur, Chhattisgarh

  B.Tech, Computer Science and Engineering
  Veer Surendra Sai University of Technology (VSSUT), Burla
  Nov 2020 — Jun 2024 | CGPA: 8.88/10 | Odisha

Achievements:
  • GATE CSE 2025: 645/1000 — qualified for IIT Bhilai M.Tech
  • LeetCode: 323 problems solved (190 Easy / 124 Medium / 9 Hard)
  • Rebuilt 12 production pages with measurable SEO and performance gains
  • Built 4 full-stack projects with real-world impact and deployment
```

**Design:** Education card with left border (Accent Lavender). Achievements list with rose diamond bullets.

**Section Number:** "07" — top-right, 120px, opacity 0.08.

---

### Section 08: Testimonials
**ID:** `#testimonials` | **Annotation:** `// section.proof`

**Layout:** Centered header, 2 testimonial cards side by side (desktop).

**Content:**
```
Annotation:   // section.proof
Title:        What Others Say

Testimonial 1:
  Quote:      "Placeholder: Kirti rebuilt our entire frontend with remarkable
               speed and precision. Her Lighthouse score improvements and
               component library work saved us countless hours per sprint."
  Author:     [To be provided by user]
  Role:       [Title/Relationship]

Testimonial 2:
  Quote:      "Placeholder: Her ability to dive deep into network science
               while delivering production-ready code is rare. Kirti combines
               academic rigor with engineering pragmatism beautifully."
  Author:     [To be provided by user]
  Role:       [Title/Relationship]
```

**Card Design:** Large `Quote` icon (Lucide) in Accent Rose opacity 0.3. Quote in Crimson Text italic. Author in display font. Role in mono.

**Section Number:** "08" — top-left, 120px, opacity 0.08.

---

### Section 09: Contact
**ID:** `#contact` | **Annotation:** `// channel.open`

**Layout:** Centered, generous spacing.

**Content:**
```
Glyph:        [Animated 3×3 grid — "contact" pattern]
Title:        Let's Build Something
Subtitle:     I'm currently preparing for SDE roles and open to
              internships, full-time opportunities, and collaboration.

Availability: ●  Open to opportunities · actively interviewing

CTA:          [Say Hello]  →  mailto:kirtimahapatra07@gmail.com
Secondary:    [Download Resume]  →  /resume.pdf
```

**Availability Dot:** Pulsing scale + opacity, sage green, 2s infinite.

**Background:** Dot grid, 32px spacing, Lavender tinted, fade from top.

**Section Number:** "09" — bottom-left, cropped, 120px, opacity 0.05.

---

### Section 10: Footer
**ID:** `#footer`

**Layout:** Full width, Background Secondary.

**Top:** Canvas particle aurora (horizontal flow, Rose→Lavender, slow, opacity 0.4).

**Content:**
```
Brand:        KIRTIMAHAPATRA.dev
Tagline:      built with curiosity. shipped with care.

Navigation:   home · about · projects · skills · contact

Socials:      [GitHub] [LinkedIn] [LeetCode] [Email]
              Icons: Github, Linkedin, Code2 (for LeetCode), Mail

Legal:        © 2025 Kirti Mahapatra · crafted with React & chai
```

---

## Component Specifications

### Buttons
```css
.btn-primary {
  background: Accent Rose;
  color: Background Primary;
  padding: 14px 28px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  border-radius: 4px;
  transition: all 0.24s ease-out;
}
.btn-primary:hover {
  background: Accent Rose Glow;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(212, 132, 154, 0.3);
}

.btn-secondary {
  background: transparent;
  color: Text Primary;
  border: 1px solid Border;
  padding: 14px 28px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  border-radius: 4px;
  transition: all 0.24s ease-out;
}
.btn-secondary:hover {
  border-color: Accent Rose;
  color: Accent Rose;
  transform: translateY(-2px);
}

.btn-large { padding: 18px 36px; font-size: var(--text-body); border-radius: 6px; }
```

### Cards
```css
.card {
  background: Background Elevated;
  border: 1px solid Border;
  border-radius: 8px;
  padding: 32px;
  transition: all 0.3s ease-out;
}
.card:hover {
  border-color: Border Hover;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(212, 132, 154, 0.08);
}
```

### System Annotations
```css
.annotation {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: Text Tertiary;
  letter-spacing: 0.02em;
}
.annotation--accent { color: Accent Lavender; }
```

### Tags / Pills
```css
.tag {
  display: inline-flex;
  padding: 4px 12px;
  background: Background Elevated;
  border: 1px solid Border;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: var(--text-2xs);
  color: Text Secondary;
  transition: all 0.2s ease;
}
.tag:hover { border-color: Accent Rose; color: Accent Rose; }
```

---

## Animation Specifications

### Scroll Reveal Patterns

| Name | Animation | Duration | Easing |
|------|-----------|----------|--------|
| fade | opacity: 0→1 | 0.6s | ease-out |
| up | opacity + translateY(30px→0) | 0.7s | cubic-bezier(0, 0, 0.2, 1) |
| left | opacity + translateX(-30px→0) | 0.7s | cubic-bezier(0, 0, 0.2, 1) |
| right | opacity + translateX(30px→0) | 0.7s | cubic-bezier(0, 0, 0.2, 1) |
| scale | opacity + scale(0.95→1) | 0.6s | cubic-bezier(0, 0, 0.2, 1) |
| blur | opacity + blur(8px→0) | 0.8s | ease-out |

**Trigger:** IntersectionObserver at threshold 0.2, 20% from bottom.
**Stagger:** 0.1–0.15s between siblings. Play once.

### Parallax

| Element | Speed | Direction |
|---------|-------|-----------|
| Section Numbers | 0.3x | Vertical opposite |
| Dot Grid | 0.1x | Vertical opposite |
| Hero Visual | 0.15x | Vertical opposite |

### Hover Effects

| Element | Effect | Duration |
|---------|--------|----------|
| Links | Underline from left, color→Rose | 0.24s |
| Cards | translateY(-4px), border glow | 0.3s |
| Buttons | translateY(-2px), shadow | 0.24s |
| Images | scale(1.05) | 0.4s |
| Glyph Icons | Cells fill sequentially | 0.3s |

### Background Animations
```
Dot Grid Breathe: opacity 0.12↔0.18, 8s, ease-in-out, infinite
Footer Aurora: canvas particles, horizontal, Rose→Lavender, 0.5px/frame, opacity 0.4
Noise Overlay: static, opacity 0.03, overlay blend
```

---

## Responsive Breakpoints

```
Mobile:   < 640px
Tablet:   640px–1024px
Desktop:  > 1024px
```

**Key Adaptations:**
- Hero stacks vertically on mobile
- Project cards: 1 col mobile, 2 tablet, 3 desktop
- Problem cards: 1 col mobile, 2 tablet, 4 desktop
- Custom cursor disabled on touch
- Boot sequence skipped on reduced motion
- Section padding: 80px mobile, 120px desktop
- Font sizes scale down 15–20% on mobile

---

## Accessibility

- **Skip Link:** "Skip to main content"
- **Focus States:** 2px Accent Rose outline, 2px offset
- **Reduced Motion:** All animations disabled via `prefers-reduced-motion`
- **Color Contrast:** WCAG AA minimum (4.5:1)
- **Semantic HTML:** Proper headings, landmarks, ARIA labels
- **Alt Text:** All images descriptive
- **Keyboard:** Full tab nav, `j/k` scroll, `?` help, `Esc` close

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `j` | Scroll down |
| `k` | Scroll up |
| `g g` | Go to top |
| `G` | Go to bottom |
| `g h` | Go to hero |
| `g p` | Go to projects |
| `g s` | Go to skills |
| `g c` | Go to contact |
| `?` | Toggle help modal |
| `Esc` | Close overlays |

---

## Assets Required From User

### Provided (Already Have)
- ✅ Resume PDF: `Mithu_Single_Column_Updated.pdf`
- ✅ All text content (from resume LaTeX)
- ✅ Contact info, education, experience, projects, skills

### Still Needed
1. **Portrait Photo** — 3:4 ratio, min 800px wide, good contrast
2. **Project Screenshots** — 3 projects, 16:9 or 4:3, min 600px
   - If not available: elegant gradient placeholders with project initials
3. **Testimonials** — 2 quotes with author name + role
4. **Any Design Preference Changes** — color palette, section ordering, etc.

---

## File Structure

```
/
├── public/
│   ├── resume.pdf
│   ├── images/
│   │   ├── portrait.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── project-3.jpg
│   ├── noise.png
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── BootSequence.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Navigation.jsx
│   │   ├── SectionNumber.jsx
│   │   ├── DotGrid.jsx
│   │   ├── SystemAnnotation.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── GlyphIcon.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── ParallaxElement.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── TimelineItem.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── FooterAurora.jsx
│   │   ├── KeyboardShortcuts.jsx
│   │   └── AsciiReveal.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Value.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   ├── useParallax.js
│   │   ├── useKeyboardShortcuts.js
│   │   └── useReducedMotion.js
│   └── data/
│       └── portfolioData.js
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Performance Targets

- **Lighthouse Score:** 95+ all categories
- **FCP:** < 1.5s
- **LCP:** < 2.5s
- **TTI:** < 3.5s
- **No CLS:** Explicit image dimensions
- **Font loading:** `font-display: swap`, preload critical fonts
- **Image optimization:** WebP, responsive srcset

---

## Notes

1. **No Emojis:** All icons from Lucide React. All decorative elements are SVG/CSS.
2. **No AI Slop:** Every visual is code-generated (canvas, SVG, CSS) or user-provided real photography.
3. **Feminine but Professional:** Rose/lavender palette + Crimson Text serifs create warmth without sacrificing technical credibility. This is *sophisticated* feminine, not pink-and-glitter.
4. **Interview-Ready:** The "Value I Bring" section directly addresses what hiring managers want — business value understanding, not just syntax.
5. **Extensible:** All content lives in `portfolioData.js`. Changing text, adding projects, or updating experience requires zero component changes.
6. **Real Data:** Every metric, project, and achievement is real and verifiable from Kirti's resume.
