import {
  Monitor,
  Wifi,
  Zap,
  Droplets,
  Video,
  BookOpen,
  Headphones,
} from 'lucide-react';
import { FACILITIES } from '../data/hubData';

const FACILITY_ICONS: Record<string, typeof Monitor> = {
  workstations: Monitor,
  internet: Wifi,
  electricity: Zap,
  water: Droplets,
  meetings: Video,
  assignments: BookOpen,
};

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-white py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
            Workspace Essentials
          </p>
          <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-4">
            Facilities
          </h2>
          <p className="text-[#1B1F1C]/75 leading-relaxed">
            Every pass covers the core workstation essentials inside House of Professionals so you
            can focus on study, client projects, or remote work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => {
            const IconComponent = FACILITY_ICONS[facility.id] ?? Monitor;

            return (
              <div
                key={facility.id}
                className="rounded-xl border border-[#1B1F1C]/12 bg-[#F5F8F5] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1E6B3A]/10 text-[#1E6B3A] flex items-center justify-center mb-5">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="fluid-card-title font-bold text-[#1B1F1C] mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-[#1B1F1C]/75 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-xl border border-[#C9A227]/35 bg-[#F5F8F5] px-5 py-4">
          <Headphones className="w-5 h-5 text-[#1E6B3A] shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium text-[#1B1F1C]">
            Bring your own headphones or earphones for online meetings.
          </p>
        </div>
      </div>
    </section>
  );
}
