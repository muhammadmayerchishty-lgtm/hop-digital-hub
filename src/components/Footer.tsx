import { NAV_LINKS } from '../data/hubData';
import { HUB_CONTACT } from '../config';

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1B1F1C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#top"
              className="inline-block bg-white rounded-lg px-2.5 py-1.5 w-fit shrink-0"
              aria-label="HOP Digital Hub Top"
            >
              <img
                src="/images/hop-logo.png"
                alt="HOP House of Professionals logo"
                loading="lazy"
                className="h-[44px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#C9A227]">
                LEARN. WORK. CONNECT. GROW.
              </p>
              <p className="text-sm text-white/70 mt-1">{HUB_CONTACT.location}</p>
            </div>
          </div>

          <nav aria-label="Footer Quick Links" className="flex flex-wrap items-center gap-5 sm:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              className="text-sm text-white/75 hover:text-white transition-colors whitespace-nowrap"
            >
              Enquire
            </a>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={HUB_CONTACT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="House of Professionals on Instagram"
              className="w-10 h-10 rounded-lg border border-white/15 text-white/80 hover:text-white hover:bg-[#1E6B3A] hover:border-[#1E6B3A] flex items-center justify-center transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={HUB_CONTACT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="House of Professionals on LinkedIn"
              className="w-10 h-10 rounded-lg border border-white/15 text-white/80 hover:text-white hover:bg-[#1E6B3A] hover:border-[#1E6B3A] flex items-center justify-center transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href={HUB_CONTACT.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="House of Professionals on Facebook"
              className="w-10 h-10 rounded-lg border border-white/15 text-white/80 hover:text-white hover:bg-[#1E6B3A] hover:border-[#1E6B3A] flex items-center justify-center transition-colors"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/65">
          <p>© 2026 HOP Digital Hub. A product of House of Professionals.</p>
          <p className="tabular-nums">Hours: {HUB_CONTACT.hours}</p>
        </div>
      </div>
    </footer>
  );
}
