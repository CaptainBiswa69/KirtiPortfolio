import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import FooterAurora from '../components/FooterAurora';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-midnight-light">
      <FooterAurora />

      <div className="section-container py-16">
        <div className="flex flex-col items-center text-center">
          <span className="font-display text-sm font-bold tracking-widest text-text-primary mb-2 uppercase">
            kirtimahapatra.dev
          </span>
          <span className="font-mono text-xs text-text-tertiary mb-8">
            built with curiosity. shipped with care.
          </span>

          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="font-mono text-xs text-text-secondary hover:text-rose transition-colors capitalize"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6 mb-8">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-rose transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-rose transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-rose transition-colors"
              aria-label="LeetCode"
            >
              <Code2 size={20} />
            </a>
            <a
              href={personalInfo.socials.email}
              className="text-text-secondary hover:text-rose transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="font-mono text-2xs text-text-tertiary">
            © 2025 Kirti Mahapatra · crafted with React & chai
          </p>
        </div>
      </div>
    </footer>
  );
}
