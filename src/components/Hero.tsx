import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

const HERO_SLIDES = [
  {
    src: '/images/hop-building.webp',
    label: 'Building',
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
  const [bgUnavailable, setBgUnavailable] = useState(false);
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

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[#0F351D] text-white"
    >
      {/* Architectural gradient fallback beneath /images/hop-building.webp */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(201,162,39,0.22),transparent_48%),linear-gradient(135deg,#0B2614_0%,#144A27_52%,#1E6B3A_100%)]"
      />

      {/* Full-width building background image */}
      {!bgUnavailable && (
        <img
          src="/images/hop-building.webp"
          alt="House of Professionals HOP Digital Hub building in Johar Town, Lahore"
          loading="eager"
          onError={() => setBgUnavailable(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      )}

      {/* Dark forest green gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#092112]/95 via-[#10381F]/88 to-[#17502C]/78"
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Hero Copy, CTAs & Location */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#C9A227] uppercase mb-4">
              HOP DIGITAL HUB
            </p>

            <h1 className="fluid-hero-title font-bold text-white tracking-tight mb-6">
              YOUR DIGITAL SPACE TO LEARN, WORK &amp; GROW.
            </h1>

            <p className="fluid-lead text-white/90 max-w-2xl mb-8 font-normal">
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

            <div className="mt-7 flex items-center gap-2 text-sm text-white/90">
              <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" aria-hidden="true" />
              <span>Johar Town, Lahore · Near Emporium Mall</span>
            </div>
          </div>

          {/* Right Column: Cleanly Contained Building & Labs Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white p-2.5 shadow-2xl border border-white/20">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#144A27]">
                {!failedSlides[activeSlide] ? (
                  <img
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    onError={() =>
                      setFailedSlides((prev) => ({ ...prev, [activeSlide]: true }))
                    }
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-end p-5 text-white bg-gradient-to-br from-[#113A20] to-[#1E6B3A]">
                    <p className="text-sm font-semibold">{currentSlide.alt}</p>
                  </div>
                )}
              </div>

              <div
                role="group"
                aria-label="Hero space views"
                className="mt-2.5 flex flex-wrap items-center gap-1.5"
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
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] ${
                        active
                          ? 'bg-[#1E6B3A] text-white'
                          : 'bg-[#F5F8F5] text-[#1B1F1C]/80 hover:bg-[#1E6B3A]/10 hover:text-[#1E6B3A]'
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
      </div>
    </section>
  );
}
