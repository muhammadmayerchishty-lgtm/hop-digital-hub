export const HOP_WHATSAPP_NUMBER = '923164338095';

export function buildWhatsAppUrl(
  message: string,
  phoneNumber: string = HOP_WHATSAPP_NUMBER
): string | null {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  if (!cleanNumber) {
    return null;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const HUB_CONTACT = {
  whatsappEnquiries: {
    display: '+92 316 4338095',
    tel: 'tel:+923164338095',
    number: HOP_WHATSAPP_NUMBER,
  },
  officePhones: [
    {
      label: 'HOP Office Landline',
      display: '+92 (042) 3545 5361-3',
      tel: 'tel:+924235455361',
    },
    {
      label: 'HOP Office Mobile',
      display: '+92 (301) 844 7711',
      tel: 'tel:+923018447711',
    },
  ],
  officeWhatsApp: {
    label: 'HOP Office WhatsApp',
    display: '+92 (301) 844 7766',
    number: '923018447766',
  },
  emails: [
    {
      address: 'mayer@hopinternational.org',
      mailto: 'mailto:mayer@hopinternational.org',
    },
    {
      address: 'info@hopinternational.org',
      mailto: 'mailto:info@hopinternational.org',
    },
  ],
  location: 'Johar Town, Lahore, near Emporium Mall',
  hours: '10:00 AM to 6:00 PM',
  googleMapsUrl: 'https://maps.google.com/?q=Johar+Town+Lahore+Emporium+Mall',
  socials: {
    instagram: 'https://www.instagram.com/houseofprofessionals/?hl=en',
    linkedin: 'https://www.linkedin.com/company/house-of-professionals/',
    facebook: 'https://web.facebook.com/House.Of.Professional',
  },
} as const;
