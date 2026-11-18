import { Check, MessageCircle } from 'lucide-react';
import { PACKAGES } from '../data/packages';
import { buildWhatsAppUrl } from '../config';

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-[#F5F8F5] py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
            Flexible Access
          </p>
          <h2 className="fluid-section-title font-bold text-[#1B1F1C]">
            Packages &amp; Pricing
          </h2>
        </div>

        {/* 1 col mobile, 2 cols tablet (5th card centred), 3 cols desktop (bottom row centred) */}
        <div className="flex flex-wrap justify-center items-stretch gap-6">
          {PACKAGES.map((pkg) => {
            const whatsappUrl = buildWhatsAppUrl(pkg.whatsappMessage);

            return (
              <article
                key={pkg.id}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl border border-[#1B1F1C]/12 p-7 flex flex-col justify-between"
              >
                <div>
                  <h3 className="fluid-card-title font-bold text-[#1B1F1C]">{pkg.name}</h3>

                  <div className="mt-4 pb-5 border-b border-[#1B1F1C]/10 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1B1F1C] tabular-nums tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-[#1B1F1C]/65">{pkg.unit}</span>
                  </div>

                  <p className="mt-4 text-sm text-[#1B1F1C]/75 leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {pkg.facilities.map((facility) => (
                      <li
                        key={facility}
                        className="flex items-start gap-2.5 text-sm text-[#1B1F1C]/85"
                      >
                        <Check
                          className="w-4 h-4 text-[#1E6B3A] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>

                  {(pkg.note || pkg.workPassLabel) && (
                    <div className="mt-4 pt-3 border-t border-[#1B1F1C]/8 space-y-1">
                      {pkg.note && (
                        <p className="text-xs font-medium text-[#1E6B3A]">{pkg.note}</p>
                      )}
                      {pkg.workPassLabel && (
                        <p className="text-xs font-semibold text-[#1B1F1C]/85">
                          {pkg.workPassLabel}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-7 pt-5 border-t border-[#1B1F1C]/10">
                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] focus-visible:ring-offset-2"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  ) : (
                    <p className="w-full text-center text-xs font-medium text-[#1B1F1C]/65 py-2.5 border border-[#1B1F1C]/15 rounded-lg">
                      WhatsApp is not configured yet
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-[#1B1F1C]/70">
          Tea, coffee, printing and scanning are charged separately. Food is at your own expense.
        </p>
      </div>
    </section>
  );
}
