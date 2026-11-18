export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
}

export const FACILITIES: FacilityItem[] = [
  {
    id: 'workstations',
    title: 'Workstations',
    description: 'Dedicated computer workstations arranged for focused individual work and study.',
  },
  {
    id: 'internet',
    title: 'High-Speed Internet',
    description: 'Reliable high-speed internet connectivity across the workspace and labs.',
  },
  {
    id: 'electricity',
    title: 'Electricity and Charging',
    description: 'Uninterrupted power access and desk-side charging for laptops and devices.',
  },
  {
    id: 'water',
    title: 'Drinking Water',
    description: 'Clean drinking water available on site for all members and visitors.',
  },
  {
    id: 'meetings',
    title: 'Online Meetings',
    description: 'Suitable workspace environment for attending remote standups and video calls.',
  },
  {
    id: 'assignments',
    title: 'University Assignments and Projects',
    description: 'Quiet, structured seating for university coursework, research, and semester projects.',
  },
];

export interface GalleryItem {
  id: string;
  imagePath: string;
  caption: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hop-building',
    imagePath: '/images/hop-building-800.webp',
    caption: 'HOP building, Johar Town',
    alt: 'HOP building, Johar Town — House of Professionals Digital Hub exterior',
  },
  {
    id: 'hop-lab-1',
    imagePath: '/images/hop-lab-1.webp',
    caption: 'Workstation and computer lab',
    alt: 'HOP Digital Hub computer workstation lab rows',
  },
  {
    id: 'hop-lab-2',
    imagePath: '/images/hop-lab-2.webp',
    caption: 'Training and digital learning lab',
    alt: 'HOP Digital Hub training and computer learning lab',
  },
  {
    id: 'hop-lab-3',
    imagePath: '/images/hop-lab-3.webp',
    caption: 'Computer workstations and seating',
    alt: 'HOP Digital Hub computer workstations with frosted glass partition',
  },
  {
    id: 'hop-meeting-room',
    imagePath: '/images/hop-meeting-room.webp',
    caption: 'Meeting and conference room',
    alt: 'HOP Digital Hub glass conference and meeting room',
  },
  {
    id: 'hop-entrance',
    imagePath: '/images/hop-entrance.webp',
    caption: 'HOP main entrance, Johar Town',
    alt: 'House of Professionals entrance doors and access ramp',
  },
  {
    id: 'hop-street',
    imagePath: '/images/hop-street-view.webp',
    caption: 'House of Professionals campus street view',
    alt: 'Street view of House of Professionals in Johar Town, Lahore',
  },
  {
    id: 'workspace-coming-soon',
    imagePath: '/images/workspace-coming-soon.webp',
    caption: 'Workspace and computer area (coming soon)',
    alt: 'Workspace and computer area (coming soon)',
  },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Choose a package',
    description: 'Select Hourly, Half-Day, Full-Day, Weekly, or Monthly Membership.',
  },
  {
    number: '02',
    title: 'Enquire on WhatsApp',
    description: 'Send your enquiry with your preferred package and visit date.',
  },
  {
    number: '03',
    title: 'Visit the office',
    description: 'Come to House of Professionals in Johar Town, Lahore near Emporium Mall.',
  },
  {
    number: '04',
    title: 'Complete registration and payment',
    description: 'Confirm your pass at the desk and complete your registration.',
  },
  {
    number: '05',
    title: 'Start working',
    description: 'Settle in at your workstation and get to work right away.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-hop',
    question: 'What is HOP Digital Hub?',
    answer:
      'HOP Digital Hub is a digital coworking and learning hub inside House of Professionals in Johar Town, Lahore, built for students, freelancers, remote workers, professionals, and businesses.',
  },
  {
    id: 'location',
    question: 'Where is it located?',
    answer:
      'It is located inside House of Professionals in Johar Town, Lahore, near Emporium Mall.',
  },
  {
    id: 'hours',
    question: 'What are the operating hours?',
    answer:
      'HOP Digital Hub operates from 10:00 AM to 6:00 PM. Our Full-Day Pass covers 10 AM to 6 PM.',
  },
  {
    id: 'students',
    question: 'Can students use the workstations?',
    answer:
      'Yes. Students can use the workstations for online classes, university assignments, and projects. The Monthly Membership is PKR 20,000 / 1 month at the same rate for students and professionals.',
  },
  {
    id: 'freelancers-professionals',
    question: 'Can freelancers and professionals join?',
    answer:
      'Yes. Freelancers, remote workers, professionals, and business owners can choose from Hourly, Half-Day, Full-Day, Weekly, or Monthly packages.',
  },
  {
    id: 'facilities',
    question: 'What facilities are included?',
    answer:
      'All passes include a computer workstation, high-speed internet, electricity and charging, and drinking water, along with support for online meetings and university assignments and projects. Bring your own headphones or earphones for online meetings.',
  },
  {
    id: 'food-refreshments',
    question: 'Are food and refreshments included?',
    answer:
      'Drinking water is included with every package. Tea, coffee, printing and scanning are charged separately, and food is at your own expense.',
  },
  {
    id: 'meeting-rooms',
    question: 'Are meeting rooms available?',
    answer:
      'Yes. Fully equipped meeting rooms, training rooms, and seminar rooms are available on request, subject to availability. Please enquire in advance on WhatsApp.',
  },
  {
    id: 'how-to-register',
    question: 'How can I register?',
    answer:
      'Choose a package, enquire on WhatsApp, visit the House of Professionals office in Johar Town, and complete your registration and payment at the office.',
  },
  {
    id: 'how-to-book',
    question: 'How do I book a workstation?',
    answer:
      'Use the Enquire form below or click any Enquire on WhatsApp button to send your preferred package and visit date directly to our WhatsApp desk.',
  },
];
