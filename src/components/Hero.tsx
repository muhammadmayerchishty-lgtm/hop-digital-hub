import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

const HERO_SLIDES = [
  {
    src: '/images/hop-building.webp',
    label: 'HOP Building',
    alt: 'House of Professionals HOP Digital Hub building in Johar Town, Lahore',
  },
  {
    src: '/images/hop-lab-1.webp',
    label: 'Computer Lab',
    alt: 'HOP Digital Hub computer workstation lab',
  },
  {
    src: '/images/hop-lab-2.webp',
    label: 'Training Lab',
    alt: 'HOP Digital Hub digital training and learning lab',
  },
  {
    src: '/images/hop-meeting-room.webp',
    label: 'Meeting Room',
    alt: 'HOP Digital Hub meeting and conference room',
  },
  {
    src: '/images/hop-entrance.webp',
    label: 'Entrance',
    alt: 'House of Professionals main entrance',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to chat about workspace availability and packages at HOP Digital Hub.'
  );

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[#0F351D] text-white min-h-[600px] lg:min-h-[680px] flex items-center"
    >
      {/* Fallback architectural backdrop beneath hero slides */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(201,162,39,0.22),transparent_48%),linear-gradient(135deg,#0B2614_0%,#144A27_52%,#1E6B3A_100%)]"
      />

      {/* Building and Lab photography layers */}
      {HERO_SLIDES.map((slide, idx) => {
        if (failedSlides[idx]) return null;
        const isCurrent = idx === activeSlide;
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            onError={() => setFailedSlides((prev) => ({ ...prev, [idx]: true }))}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              isCurrent ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            referrerPolicy="no-referrer"
          />
        );
      })}

      {/* Dark forest green gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0A2413]/92 via-[#123D22]/82 to-[#1E6B3A]/55"
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#C9A227] uppercase mb-4">
            HOP DIGITAL HUB
          </p>

          <h1 className="fluid-hero-title font-bold text-white tracking-tight mb-6">
            YOUR DIGITAL SPACE TO LEARN, WORK &amp; GROW.
          </h1>

          <p className="fluid-lead text-white/90 max-w-2xl mb-9 font-normal">
            A professional digital coworking and learning environment for students, freelancers,
            professionals and businesses in Johar Town, Lahore.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1E6B3A] hover:bg-[#17552E] border border-[#2D8A4E] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F351D]"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-transparent hover:bg-white hover:text-[#1B1F1C] border border-white/85 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F351D]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            ) : (
              <span className="text-sm text-white/80">WhatsApp is not configured yet</span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-white/85">
              <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" aria-hidden="true" />
              <span>Johar Town, Lahore · Near Emporium Mall</span>
            </div>

            {/* Interactive Slide Selector for Building & Labs */}
            <div
              role="group"
              aria-label="Hero space views"
              className="flex items-center gap-1.5"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const active = idx === activeSlide;
                return (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Show ${slide.label}`}
                    aria-pressed={active}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      active
                        ? 'bg-white text-[#1B1F1C]'
                        : 'bg-black/35 text-white/80 hover:bg-black/55 hover:text-white'
                    }`}
                  >
                    {slide.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
