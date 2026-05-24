// =============================================================================
// ASSET CONFIGURATION FILE
// Centralize all images, icons, and external references here.
// Update paths once — changes apply everywhere.
// =============================================================================

// IMPORTANT: This must match the repo name on GitHub Pages.
// If your repo is "KirtiPortfolio", use: '/KirtiPortfolio/'
// If your repo is "username.github.io", use: '/'
export const BASE_PATH = '/KirtiPortfolio';

/**
 * Prepends the GitHub Pages base path to any asset path.
 * Use this for ALL images, PDFs, and other static assets.
 *
 * Examples:
 *   getAssetPath('/images/hero.jpg')  → '/KirtiPortfolio/images/hero.jpg'
 *   getAssetPath('/resume.pdf')       → '/KirtiPortfolio/resume.pdf'
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}

// ---------------------------------------------------------------------------
// HERO SECTION
// ---------------------------------------------------------------------------
export const HERO = {
  // Portrait / Avatar used in the Hero section
  portrait: getAssetPath('/images/hero-portrait.JPG'),

  // Fallback gradient colors for the portrait placeholder
  portraitPlaceholderColors: {
    from: 'rgba(212, 132, 154, 0.1)',
    to: 'rgba(155, 142, 199, 0.1)',
  },
};

// ---------------------------------------------------------------------------
// PROJECTS SECTION
// ---------------------------------------------------------------------------
export const PROJECTS = {
  globalAlloyEcosystem: {
    image: getAssetPath('/images/project-alloy-ecosystem.jpg'),
    github: 'https://github.com/kirti-007',
    live: null,
  },

  collabNote: {
    image: getAssetPath('/images/project-collabnote.png'),
    github: 'https://github.com/kirti-007',
    live: null,
  },

  snapLink: {
    image: getAssetPath('/images/project-snaplink.png'),
    github: 'https://github.com/kirti-007',
    live: null,
  },

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
  useAuthorPhotos: false,
};

// ---------------------------------------------------------------------------
// ABOUT SECTION
// ---------------------------------------------------------------------------
export const ABOUT = {
  portrait: null, // getAssetPath('/images/about-portrait.jpg'),
};

// ---------------------------------------------------------------------------
// RESUME
// ---------------------------------------------------------------------------
export const RESUME = {
  pdfPath: getAssetPath('/resume.pdf'),
  downloadName: 'Kirti_Mahapatra_Resume.pdf',
};

// ---------------------------------------------------------------------------
// FAVICON & BRANDING
// ---------------------------------------------------------------------------
export const BRANDING = {
  favicon: getAssetPath('/favicon.svg'),
  siteTitle: 'Kirti Mahapatra | Software Development Engineer',
  metaDescription:
    'Kirti Mahapatra — Software Development Engineer. M.Tech IIT Bhilai. Building systems that scale.',
  themeColor: '#0F0E13',
};

// ---------------------------------------------------------------------------
// SOCIAL LINKS & ICONS
// ---------------------------------------------------------------------------
export const SOCIALS = {
  github: {
    url: 'https://github.com/kirti-007',
    label: 'GitHub',
    icon: 'Github',
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
  noiseOverlay: null,
};

// ---------------------------------------------------------------------------
// BOOT SEQUENCE
// ---------------------------------------------------------------------------
export const BOOT = {
  customLogo: null,
  strokeColor: '#F5F0EB',
  fillColor: '#D4849A',
};

// ---------------------------------------------------------------------------
// FOOTER AURORA
// ---------------------------------------------------------------------------
export const FOOTER = {
  auroraColors: {
    start: 'rgba(212, 132, 154, ',
    mid: 'rgba(155, 142, 199, ',
  },
};

// ---------------------------------------------------------------------------
// CHECKLIST: Assets You Still Need to Provide
// ---------------------------------------------------------------------------
/*
□ /public/images/hero-portrait.jpg          — Your portrait (3:4, min 800px)
□ /public/images/project-alloy-ecosystem.jpg — Screenshot of Global Alloy project
□ /public/images/project-collabnote.png     — Screenshot of CollabNote project
□ /public/images/project-snaplink.png          — Screenshot of SnapLink project
□ /public/images/testimonial-author-1.jpg    — Optional: testimonial author photo
□ /public/images/testimonial-author-2.jpg    — Optional: testimonial author photo
□ /public/images/about-portrait.jpg          — Optional: different photo for About section
□ 2 real testimonials with names and roles    — Update in portfolioData.ts
*/

// =============================================================================
// HELPER: Check if an image exists
// =============================================================================
export async function imageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}
