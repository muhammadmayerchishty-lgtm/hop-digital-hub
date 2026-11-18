import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

export default function FloatingWhatsAppButton() {
  const whatsappUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to enquire about HOP Digital Hub.'
  );

  if (!whatsappUrl) {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 h-12 px-4 rounded-full bg-[#1E6B3A] hover:bg-[#144A27] text-white shadow-lg border border-white/20 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] focus-visible:ring-offset-2"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
