import { ArrowUpRight } from 'lucide-react';

const AUDIENCE_TRACKS = [
  {
    number: '01',
    title: 'Students',
    description:
      'Focused computer workstations for university assignments, semester projects, and online learning.',
  },
  {
    number: '02',
    title: 'Freelancers & Remote Workers',
    description:
      'High-speed internet, electricity and charging, and quiet seating for client work and online meetings.',
  },
  {
    number: '03',
    title: 'Professionals',
    description:
      'Flexible hourly, daily, weekly, and monthly passes inside a quiet, disciplined work environment.',
  },
  {
    number: '04',
    title: 'Businesses & Teams',
    description:
      'Meeting rooms, training rooms, and seminar rooms available on request inside House of Professionals.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
              Inside House of Professionals
            </p>
            <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-5">
              A digital coworking and learning hub in Johar Town, Lahore.
            </h2>
            <p className="text-[#1B1F1C]/75 leading-relaxed mb-6">
              Located inside House of Professionals near Emporium Mall, HOP Digital Hub offers a
              clean, dependable space equipped with computer workstations, high-speed internet, and
              backup electricity for everyday learning and productive work.
            </p>
            <a
              href="#enquire"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E6B3A] hover:text-[#144A27] transition-colors"
            >
              <span>Enquire or Schedule a Visit</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {AUDIENCE_TRACKS.map((track) => (
              <div
                key={track.number}
                className="pt-5 border-t border-[#1B1F1C]/12 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#C9A227] tabular-nums tracking-wider">
                    {track.number}.
                  </span>
                  <h3 className="fluid-card-title font-bold text-[#1B1F1C] mt-1.5 mb-2">
                    {track.title}
                  </h3>
                  <p className="text-sm text-[#1B1F1C]/75 leading-relaxed">{track.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
