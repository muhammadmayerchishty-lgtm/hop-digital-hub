import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/hubData';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-4">FAQ</h2>
            <p className="text-sm text-[#1B1F1C]/75 leading-relaxed">
              Clear answers about packages, facilities, meeting rooms, and registration at HOP
              Digital Hub in Johar Town, Lahore.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#1B1F1C]/12 border-t border-b border-[#1B1F1C]/12">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] rounded-sm"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#1B1F1C]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1E6B3A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={panelId}
                      className="pb-6 pr-8 text-sm sm:text-base text-[#1B1F1C]/75 leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
