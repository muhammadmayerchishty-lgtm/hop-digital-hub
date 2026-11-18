import { HOW_IT_WORKS_STEPS } from '../data/hubData';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F5F8F5] py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
            Simple Onboarding
          </p>
          <h2 className="fluid-section-title font-bold text-[#1B1F1C]">How It Works</h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li
              key={step.number}
              className="bg-white rounded-xl border border-[#1B1F1C]/12 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-bold text-[#C9A227] tabular-nums">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-[#1B1F1C] mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-[#1B1F1C]/75 leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
