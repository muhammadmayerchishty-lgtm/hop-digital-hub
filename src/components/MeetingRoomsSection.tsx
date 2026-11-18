import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

export default function MeetingRoomsSection() {
  const [imgError, setImgError] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to enquire in advance about booking a meeting, training, or seminar room at HOP Digital Hub.'
  );

  return (
    <section id="meeting-rooms" className="bg-[#F5F8F5] py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
              On-Request Spaces
            </p>
            <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-5">
              Meeting &amp; Training Rooms
            </h2>
            <p className="fluid-lead text-[#1B1F1C]/80 mb-8 max-w-xl">
              Fully equipped meeting rooms, training rooms and seminar rooms available on request,
              subject to availability. Enquire in advance.
            </p>

            <div>
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
              ) : (
                <p className="inline-block text-sm font-medium text-[#1B1F1C]/65">
                  WhatsApp is not configured yet
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[260px] rounded-xl overflow-hidden border border-[#1B1F1C]/12 bg-gradient-to-br from-[#144A27] to-[#1E6B3A]">
              {!imgError ? (
                <img
                  src="/images/hop-meeting-room.webp"
                  alt="HOP Digital Hub meeting room inside House of Professionals"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-end p-6 text-white">
                  <p className="text-base font-semibold">
                    Meeting, training and seminar rooms at House of Professionals
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
