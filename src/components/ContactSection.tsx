import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { HUB_CONTACT, buildWhatsAppUrl } from '../config';

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function ContactSection() {
  const enquiryWhatsAppUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to enquire about HOP Digital Hub.'
  );
  const officeWhatsAppUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to reach the House of Professionals office.',
    HUB_CONTACT.officeWhatsApp.number
  );

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
            House of Professionals · Johar Town
          </p>
          <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-3">Contact</h2>
          <p className="text-[#1B1F1C]/75 leading-relaxed">
            Reach our digital hub desk or House of Professionals office directly by phone,
            WhatsApp, email, or in person.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Phone & WhatsApp */}
          <div className="rounded-xl border border-[#1B1F1C]/12 bg-[#F5F8F5] p-7 flex flex-col justify-between">
            <div>
              <h3 className="fluid-card-title font-bold text-[#1B1F1C] mb-5">
                Phone &amp; WhatsApp
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E6B3A] mb-1.5">
                    HOP Digital Hub Enquiries
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={HUB_CONTACT.whatsappEnquiries.tel}
                      className="inline-flex items-center gap-2.5 font-medium text-[#1B1F1C] hover:text-[#1E6B3A] transition-colors tabular-nums"
                    >
                      <Phone className="w-4 h-4 text-[#1E6B3A] shrink-0" aria-hidden="true" />
                      <span>{HUB_CONTACT.whatsappEnquiries.display}</span>
                    </a>
                    {enquiryWhatsAppUrl ? (
                      <a
                        href={enquiryWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 font-medium text-[#1E6B3A] hover:text-[#144A27] transition-colors tabular-nums"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>WhatsApp Enquiries ({HUB_CONTACT.whatsappEnquiries.display})</span>
                      </a>
                    ) : (
                      <span className="text-xs text-[#1B1F1C]/65">
                        WhatsApp is not configured yet
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1B1F1C]/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E6B3A] mb-2">
                    HOP Office
                  </p>
                  <div className="flex flex-col gap-2">
                    {HUB_CONTACT.officePhones.map((phone) => (
                      <a
                        key={phone.display}
                        href={phone.tel}
                        className="inline-flex items-center gap-2.5 text-[#1B1F1C]/85 hover:text-[#1E6B3A] transition-colors tabular-nums"
                      >
                        <Phone className="w-4 h-4 text-[#1E6B3A] shrink-0" aria-hidden="true" />
                        <span>{phone.display}</span>
                      </a>
                    ))}
                    {officeWhatsAppUrl && (
                      <a
                        href={officeWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-[#1B1F1C]/85 hover:text-[#1E6B3A] transition-colors tabular-nums"
                      >
                        <MessageCircle className="w-4 h-4 text-[#1E6B3A] shrink-0" aria-hidden="true" />
                        <span>WhatsApp {HUB_CONTACT.officeWhatsApp.display}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Email & Hours */}
          <div className="rounded-xl border border-[#1B1F1C]/12 bg-[#F5F8F5] p-7 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="fluid-card-title font-bold text-[#1B1F1C] mb-4">Email</h3>
                <div className="flex flex-col gap-3 text-sm">
                  {HUB_CONTACT.emails.map((email) => (
                    <a
                      key={email.address}
                      href={email.mailto}
                      className="inline-flex items-center gap-2.5 text-[#1B1F1C]/85 hover:text-[#1E6B3A] transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-[#1E6B3A] shrink-0" aria-hidden="true" />
                      <span>{email.address}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#1B1F1C]/10">
                <h4 className="text-sm font-bold text-[#1B1F1C] mb-2">Operating Hours</h4>
                <div className="inline-flex items-center gap-2.5 text-sm text-[#1B1F1C]/85 tabular-nums">
                  <Clock className="w-4 h-4 text-[#1E6B3A] shrink-0" aria-hidden="true" />
                  <span>{HUB_CONTACT.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Location, Google Maps & Socials */}
          <div className="rounded-xl border border-[#1B1F1C]/12 bg-[#F5F8F5] p-7 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="fluid-card-title font-bold text-[#1B1F1C] mb-4">
                Location &amp; Socials
              </h3>

              <div className="flex items-start gap-2.5 text-sm text-[#1B1F1C]/85 mb-4">
                <MapPin className="w-4 h-4 text-[#1E6B3A] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{HUB_CONTACT.location}</span>
              </div>

              <a
                href={HUB_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg transition-colors whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 pt-5 border-t border-[#1B1F1C]/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1B1F1C]/65 mb-3">
                Follow House of Professionals
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={HUB_CONTACT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="House of Professionals on Instagram"
                  className="w-11 h-11 rounded-lg bg-white border border-[#1B1F1C]/15 text-[#1B1F1C] hover:text-white hover:bg-[#1E6B3A] hover:border-[#1E6B3A] flex items-center justify-center transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={HUB_CONTACT.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="House of Professionals on LinkedIn"
                  className="w-11 h-11 rounded-lg bg-white border border-[#1B1F1C]/15 text-[#1B1F1C] hover:text-white hover:bg-[#1E6B3A] hover:border-[#1E6B3A] flex items-center justify-center transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={HUB_CONTACT.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="House of Professionals on Facebook"
                  className="w-11 h-11 rounded-lg bg-white border border-[#1B1F1C]/15 text-[#1B1F1C] hover:text-white hover:bg-[#1E6B3A] hover:border-[#1E6B3A] flex items-center justify-center transition-colors"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
