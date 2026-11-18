import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '../data/hubData';
import { buildWhatsAppUrl } from '../config';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to enquire about HOP Digital Hub in Johar Town, Lahore.'
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#1B1F1C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-8">
          <a
            href="#top"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] rounded"
            aria-label="HOP Digital Hub Home"
          >
            <img
              src="/images/hop-logo.png"
              alt="HOP House of Professionals logo"
              className="h-[44px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm font-medium text-[#1B1F1C]/80 hover:text-[#1E6B3A] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#1E6B3A] after:transition-all after:duration-200 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>
            ) : (
              <span className="hidden sm:inline-block text-xs text-[#1B1F1C]/65 whitespace-nowrap">
                WhatsApp is not configured yet
              </span>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#1B1F1C]/15 text-[#1B1F1C] hover:bg-[#F5F8F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#1B1F1C]/10 bg-white px-4 py-4 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-base font-medium text-[#1B1F1C] hover:text-[#1E6B3A] hover:bg-[#F5F8F5] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#1B1F1C]/10">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
              ) : (
                <p className="text-center text-xs text-[#1B1F1C]/65 py-2">
                  WhatsApp is not configured yet
                </p>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
