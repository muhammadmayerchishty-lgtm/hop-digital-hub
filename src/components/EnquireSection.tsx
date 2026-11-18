import { useState, type FormEvent } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { PACKAGES, type PackageOptionKey } from '../data/packages';
import { buildWhatsAppUrl } from '../config';

const CUSTOMER_CATEGORIES = [
  'Student',
  'Freelancer',
  'Remote Worker',
  'Professional',
  'Business Owner',
  'Other',
] as const;

const PACKAGE_OPTIONS: PackageOptionKey[] = [
  'Hourly',
  'Half-Day',
  'Full-Day',
  'Weekly',
  'Monthly',
];

interface FormState {
  fullName: string;
  customerCategory: string;
  interestedPackage: string;
  visitDate: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  customerCategory?: string;
  interestedPackage?: string;
}

export default function EnquireSection() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    customerCategory: '',
    interestedPackage: '',
    visitDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [configError, setConfigError] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.customerCategory) {
      nextErrors.customerCategory = 'Please choose your customer category.';
    }
    if (!form.interestedPackage) {
      nextErrors.interestedPackage = 'Please select the package you are interested in.';
    }
    return nextErrors;
  };

  const buildEnquiryMessage = () => {
    const matchedPkg = PACKAGES.find((pkg) => pkg.selectKey === form.interestedPackage);
    const packageLine = matchedPkg
      ? `${matchedPkg.name} (${matchedPkg.price} ${matchedPkg.unit})`
      : form.interestedPackage;

    const lines = [
      'Assalam-o-Alaikum',
      'I would like to enquire about HOP Digital Hub:',
      `Name: ${form.fullName.trim()}`,
      `Category: ${form.customerCategory}`,
      `Package: ${packageLine}`,
    ];

    if (form.visitDate) {
      lines.push(`Preferred Visit Date: ${form.visitDate}`);
    }
    if (form.message.trim()) {
      lines.push(`Message: ${form.message.trim()}`);
    }

    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfigError(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setGeneratedUrl(null);
      return;
    }

    setErrors({});
    const whatsappMessage = buildEnquiryMessage();
    const url = buildWhatsAppUrl(whatsappMessage);

    if (!url) {
      setGeneratedUrl(null);
      setConfigError(true);
      return;
    }

    setGeneratedUrl(url);

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="enquire" className="bg-[#F5F8F5] py-20 sm:py-24 border-b border-[#1B1F1C]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#1E6B3A] uppercase mb-3">
            Quick Booking
          </p>
          <h2 className="fluid-section-title font-bold text-[#1B1F1C] mb-3">Enquire</h2>
          <p className="text-[#1B1F1C]/75 leading-relaxed">
            Choose your package and prepare a WhatsApp enquiry with your details.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#1B1F1C]/12 p-7 sm:p-9">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="enquire-full-name"
                className="block text-sm font-medium text-[#1B1F1C] mb-1.5"
              >
                Full Name <span className="text-red-700">*</span>
              </label>
              <input
                id="enquire-full-name"
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Enter your full name"
                aria-invalid={Boolean(errors.fullName)}
                className="w-full px-3.5 py-2.5 text-sm text-[#1B1F1C] bg-white border border-[#1B1F1C]/20 rounded-lg focus:outline-none focus:border-[#1E6B3A] focus:ring-2 focus:ring-[#1E6B3A]/20"
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-700">{errors.fullName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="enquire-category"
                  className="block text-sm font-medium text-[#1B1F1C] mb-1.5"
                >
                  Customer Category <span className="text-red-700">*</span>
                </label>
                <select
                  id="enquire-category"
                  required
                  value={form.customerCategory}
                  onChange={(e) => setForm({ ...form, customerCategory: e.target.value })}
                  aria-invalid={Boolean(errors.customerCategory)}
                  className="w-full px-3.5 py-2.5 text-sm text-[#1B1F1C] bg-white border border-[#1B1F1C]/20 rounded-lg focus:outline-none focus:border-[#1E6B3A] focus:ring-2 focus:ring-[#1E6B3A]/20"
                >
                  <option value="">Select category</option>
                  {CUSTOMER_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.customerCategory && (
                  <p className="mt-1.5 text-xs text-red-700">{errors.customerCategory}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquire-package"
                  className="block text-sm font-medium text-[#1B1F1C] mb-1.5"
                >
                  Interested Package <span className="text-red-700">*</span>
                </label>
                <select
                  id="enquire-package"
                  required
                  value={form.interestedPackage}
                  onChange={(e) => setForm({ ...form, interestedPackage: e.target.value })}
                  aria-invalid={Boolean(errors.interestedPackage)}
                  className="w-full px-3.5 py-2.5 text-sm text-[#1B1F1C] bg-white border border-[#1B1F1C]/20 rounded-lg focus:outline-none focus:border-[#1E6B3A] focus:ring-2 focus:ring-[#1E6B3A]/20"
                >
                  <option value="">Select package</option>
                  {PACKAGE_OPTIONS.map((option) => {
                    const pkg = PACKAGES.find((p) => p.selectKey === option);
                    return (
                      <option key={option} value={option}>
                        {pkg ? `${option} — ${pkg.price} ${pkg.unit}` : option}
                      </option>
                    );
                  })}
                </select>
                {errors.interestedPackage && (
                  <p className="mt-1.5 text-xs text-red-700">{errors.interestedPackage}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="enquire-visit-date"
                className="block text-sm font-medium text-[#1B1F1C] mb-1.5"
              >
                Preferred Visit Date <span className="text-xs text-[#1B1F1C]/55">(optional)</span>
              </label>
              <input
                id="enquire-visit-date"
                type="date"
                value={form.visitDate}
                onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm text-[#1B1F1C] bg-white border border-[#1B1F1C]/20 rounded-lg focus:outline-none focus:border-[#1E6B3A] focus:ring-2 focus:ring-[#1E6B3A]/20"
              />
            </div>

            <div>
              <label
                htmlFor="enquire-message"
                className="block text-sm font-medium text-[#1B1F1C] mb-1.5"
              >
                Message <span className="text-xs text-[#1B1F1C]/55">(optional)</span>
              </label>
              <textarea
                id="enquire-message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Any questions or specific requirements..."
                className="w-full px-3.5 py-2.5 text-sm text-[#1B1F1C] bg-white border border-[#1B1F1C]/20 rounded-lg focus:outline-none focus:border-[#1E6B3A] focus:ring-2 focus:ring-[#1E6B3A]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6B3A] focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </button>

            {configError && (
              <p className="text-sm font-medium text-red-700">WhatsApp is not configured yet</p>
            )}

            {generatedUrl && (
              <div className="rounded-lg border border-[#1E6B3A]/30 bg-[#F5F8F5] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-[#1E6B3A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-[#1B1F1C]">
                    Your enquiry message is ready. Click below if WhatsApp did not open
                    automatically.
                  </p>
                </div>
                <a
                  href={generatedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E6B3A] hover:bg-[#144A27] rounded-lg whitespace-nowrap shrink-0"
                >
                  Open WhatsApp
                </a>
              </div>
            )}

            <p className="pt-2 text-xs text-[#1B1F1C]/65 leading-relaxed">
              Submitting opens WhatsApp on your phone. You send the message yourself. We do not
              store your details on this website.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
