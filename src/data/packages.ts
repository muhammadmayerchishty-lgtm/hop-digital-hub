export type PackageOptionKey = 'Hourly' | 'Half-Day' | 'Full-Day' | 'Weekly' | 'Monthly';

export interface HubPackage {
  id: string;
  selectKey: PackageOptionKey;
  name: string;
  price: string;
  unit: string;
  description: string;
  facilities: string[];
  note?: string;
  workPassLabel?: string;
  whatsappMessage: string;
}

export const PACKAGES: HubPackage[] = [
  {
    id: 'hourly-pass',
    selectKey: 'Hourly',
    name: 'Hourly Pass',
    price: 'PKR 200',
    unit: '/ hour',
    description: 'Pay-as-you-go workstation access for short tasks, calls, or classes.',
    facilities: [
      'Computer workstation',
      'High-speed internet',
      'Electricity and charging',
      'Drinking water',
    ],
    whatsappMessage:
      'Assalam-o-Alaikum! I would like to enquire about the Hourly Pass (PKR 200 / hour) at HOP Digital Hub.',
  },
  {
    id: 'half-day-pass',
    selectKey: 'Half-Day',
    name: 'Half-Day Pass',
    price: 'PKR 500',
    unit: '/ 4 hours',
    description: 'Four focused hours for study sessions, client work, or meetings.',
    facilities: [
      'Computer workstation',
      'High-speed internet',
      'Electricity and charging',
      'Drinking water',
    ],
    whatsappMessage:
      'Assalam-o-Alaikum! I would like to enquire about the Half-Day Pass (PKR 500 / 4 hours) at HOP Digital Hub.',
  },
  {
    id: 'full-day-pass',
    selectKey: 'Full-Day',
    name: 'Full-Day Pass',
    price: 'PKR 1,000',
    unit: '/ 10 AM to 6 PM',
    description: 'Full workday access from 10 AM to 6 PM in Johar Town, Lahore.',
    facilities: [
      'Computer workstation',
      'High-speed internet',
      'Electricity and charging',
      'Drinking water',
    ],
    whatsappMessage:
      'Assalam-o-Alaikum! I would like to enquire about the Full-Day Pass (PKR 1,000 / 10 AM to 6 PM) at HOP Digital Hub.',
  },
  {
    id: 'weekly-pass',
    selectKey: 'Weekly',
    name: 'Weekly Pass',
    price: 'PKR 5,000',
    unit: '/ 5 working days',
    description: 'Five consecutive working days for sprint weeks and focused projects.',
    facilities: [
      'Computer workstation',
      'High-speed internet',
      'Electricity and charging',
      'Drinking water',
    ],
    whatsappMessage:
      'Assalam-o-Alaikum! I would like to enquire about the Weekly Pass (PKR 5,000 / 5 working days) at HOP Digital Hub.',
  },
  {
    id: 'monthly-membership',
    selectKey: 'Monthly',
    name: 'Monthly Membership',
    price: 'PKR 20,000',
    unit: '/ 1 month',
    description: 'Consistent monthly workspace access for daily learning and digital work.',
    facilities: [
      'Computer workstation',
      'High-speed internet',
      'Electricity and charging',
      'Drinking water',
    ],
    note: 'Same rate for students and professionals.',
    workPassLabel: 'Work Pass',
    whatsappMessage:
      'Assalam-o-Alaikum! I would like to enquire about the Monthly Membership (PKR 20,000 / 1 month) at HOP Digital Hub.',
  },
];
