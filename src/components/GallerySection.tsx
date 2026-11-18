import { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/hubData';

function GreenFallbackBlock({ caption }: { caption: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#113A20] via-[#1E6B3A] to-[#144A27] flex flex-col justify-between p-5 text-white">
      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C9A227]">
        HOP Digital Hub
      </span>
      <p className="text-base font-semibold leading-snug text-white">{caption}</p>
    </div>
  );
}

function GalleryThumb({ item }: { item: GalleryItem }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return <GreenFallbackBlock caption={item.caption} />;
  }

  return (
    <img
      src={item.imagePath}
      alt={item.alt}
      loading="lazy"
      onError={() => setImgError(true)}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      referrerPolicy="no-referrer"
    />
  );
}

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalImgError, setModalImgError] = useState(false);

  const selectedItem = selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  const goPrev = useCallback(() => {
    setModalImgError(false);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, []);

  const goNext = useCallback(() => {
    setModalImgError(false);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, goPrev, goNext]);

  const openLightbox = (index: number) => {
    setModalImgError(false);
    setSelectedIndex(index);
  };

  return (
    <section id="gallery" className="bg-white py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
            Inside House of Professionals
          </p>
          <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-3">Gallery</h2>
          <p className="text-[#1B1F1C]/75 leading-relaxed">
            A look at our building in Johar Town, computer labs, workstations, and meeting rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(idx)}
              className="group text-left bg-[#F5F8F5] rounded-xl border border-[#1B1F1C]/12 overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#144A27]">
                <GalleryThumb item={item} />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <Maximize2 className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold text-[#1B1F1C] group-hover:text-[#1E6B3A] transition-colors">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Escape & Arrow Keys */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-caption"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden border border-[#1B1F1C]/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-[#144A27]">
              {modalImgError ? (
                <GreenFallbackBlock caption={selectedItem.caption} />
              ) : (
                <img
                  src={selectedItem.imagePath}
                  alt={selectedItem.alt}
                  onError={() => setModalImgError(true)}
                  className="w-full h-full object-contain bg-[#0F351D]"
                  referrerPolicy="no-referrer"
                />
              )}

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-black/65 hover:bg-black/85 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/65 hover:bg-black/85 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/65 hover:bg-black/85 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
              <p id="gallery-lightbox-caption" className="text-base font-bold text-[#1B1F1C]">
                {selectedItem.caption}
              </p>
              <span className="text-xs font-medium text-[#1B1F1C]/60 tabular-nums shrink-0">
                {(selectedIndex ?? 0) + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
