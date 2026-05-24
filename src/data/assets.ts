// =============================================================================
// ASSET CONFIGURATION FILE
// Centralize all images, icons, and external references here.
// Update paths once — changes apply everywhere.
// =============================================================================

// ---------------------------------------------------------------------------
// HERO SECTION
// ---------------------------------------------------------------------------
export const HERO = {
  // Portrait / Avatar used in the Hero section
  // Place a 3:4 ratio portrait photo (min 800px wide) at /public/images/hero-portrait.jpg
  // If no photo yet, a gradient placeholder with initials will be shown.
  portrait: '/images/hero-portrait.jpg',

  // Fallback gradient colors for the portrait placeholder (used if photo doesn't exist)
  portraitPlaceholderColors: {
    from: 'rgba(212, 132, 154, 0.1)',
    to: 'rgba(155, 142, 199, 0.1)',
  },
};

// ---------------------------------------------------------------------------
// PROJECTS SECTION
// Place screenshots (16:9 or 4:3 ratio, min 600px wide) in /public/images/
// ---------------------------------------------------------------------------
export const PROJECTS = {
  globalAlloyEcosystem: {
    // Screenshot or mockup of the Global Alloy Ecosystem project
    image: '/images/project-alloy-ecosystem.jpg',
    // GitHub repo link
    github: 'https://github.com/kirti-007',
    // Live demo URL (set to null if not deployed yet)
    live: null,
  },

  collabNote: {
    // Screenshot or mockup of CollabNote
    image: '/images/project-collabnote.jpg',
    github: 'https://github.com/kirti-007',
    live: null,
  },

  snapLink: {
    // Screenshot or mockup of SnapLink
    image: '/images/project-snaplink.jpg',
    github: 'https://github.com/kirti-007',
    live: null,
  },

  // Placeholder colors used when no image is available
  placeholderColors: [
    { from: 'rgba(212, 132, 154, 0.15)', to: 'rgba(155, 142, 199, 0.15)' },
    { from: 'rgba(155, 142, 199, 0.15)', to: 'rgba(212, 132, 154, 0.15)' },
    { from: 'rgba(212, 132, 154, 0.15)', to: 'rgba(212, 175, 135, 0.15)' },
  ],
};

// ---------------------------------------------------------------------------
// TESTIMONIALS SECTION
// ---------------------------------------------------------------------------
export const TESTIMONIALS = {
  // Optional: Add author photos if you have them
  // path: '/images/testimonial-author-1.jpg',
  useAuthorPhotos: false,
};

// ---------------------------------------------------------------------------
// ABOUT SECTION
// ---------------------------------------------------------------------------
export const ABOUT = {
  // Optional: A different photo for the About section
  // If null, no extra photo is shown (stats grid takes the space)
  portrait: null, // '/images/about-portrait.jpg',
};

// ---------------------------------------------------------------------------
// RESUME
// ---------------------------------------------------------------------------
export const RESUME = {
  // Path to the PDF resume inside /public/
  pdfPath: '/resume.pdf',
  // Display filename when downloaded
  downloadName: 'Kirti_Mahapatra_Resume.pdf',
};

// ---------------------------------------------------------------------------
// FAVICON & BRANDING
// ---------------------------------------------------------------------------
export const BRANDING = {
  // SVG favicon path
  favicon: '/favicon.svg',
  // Site title (used in index.html <title>)
  siteTitle: 'Kirti Mahapatra | Software Development Engineer',
  // Meta description
  metaDescription:
    'Kirti Mahapatra — Software Development Engineer. M.Tech IIT Bhilai. Building systems that scale.',
  // Theme color (for mobile browser chrome)
  themeColor: '#0F0E13',
};

// ---------------------------------------------------------------------------
// SOCIAL LINKS & ICONS
// External profile URLs and their display names
// ---------------------------------------------------------------------------
export const SOCIALS = {
  github: {
    url: 'https://github.com/kirti-007',
    label: 'GitHub',
    icon: 'Github', // Lucide icon name
  },
  linkedin: {
    url: 'https://linkedin.com/in/kirti-mahapatra-1020a520b/',
    label: 'LinkedIn',
    icon: 'Linkedin',
  },
  leetcode: {
    url: 'https://leetcode.com/kirt72/',
    label: 'LeetCode',
    icon: 'Code2',
  },
  email: {
    url: 'mailto:kirtimahapatra07@gmail.com',
    label: 'Email',
    icon: 'Mail',
  },
};

// ---------------------------------------------------------------------------
// NOISE TEXTURE
// ---------------------------------------------------------------------------
export const TEXTURES = {
  // The noise overlay is an inline SVG in CSS (no external file needed).
  // If you want to replace it with a real PNG, put the file in /public/
  // and update the path in index.css.
  noiseOverlay: null, // '/images/noise.png',
};

// ---------------------------------------------------------------------------
// BOOT SEQUENCE
// ---------------------------------------------------------------------------
export const BOOT = {
  // The "K" logo is drawn inline via SVG.
  // If you want a custom SVG logo, place it at /public/images/logo.svg
  // and set customLogo to that path.
  customLogo: null, // '/images/logo.svg',
  // Colors for the boot animation
  strokeColor: '#F5F0EB',
  fillColor: '#D4849A',
};

// ---------------------------------------------------------------------------
// FOOTER AURORA
// Canvas particle animation colors
// ---------------------------------------------------------------------------
export const FOOTER = {
  auroraColors: {
    start: 'rgba(212, 132, 154, ', // Rose base
    mid: 'rgba(155, 142, 199, ',   // Lavender mid
  },
};

// ---------------------------------------------------------------------------
// CHECKLIST: Assets You Still Need to Provide
// ---------------------------------------------------------------------------
/*
□ /public/images/hero-portrait.jpg          — Your portrait (3:4, min 800px)
□ /public/images/project-alloy-ecosystem.jpg — Screenshot of Global Alloy project
□ /public/images/project-collabnote.jpg      — Screenshot of CollabNote project
□ /public/images/project-snaplink.jpg          — Screenshot of SnapLink project
□ /public/images/testimonial-author-1.jpg    — Optional: testimonial author photo
□ /public/images/testimonial-author-2.jpg    — Optional: testimonial author photo
□ /public/images/about-portrait.jpg          — Optional: different photo for About section
□ 2 real testimonials with names and roles    — Update in portfolioData.ts
*/

// =============================================================================
// HELPER: Check if an image exists (for conditional rendering)
// Usage: import { imageExists } from './assets';
//        const hasPhoto = await imageExists(HERO.portrait);
// =============================================================================
export async function imageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}
