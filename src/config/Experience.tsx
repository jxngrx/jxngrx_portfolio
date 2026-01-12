
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Firebase from '@/components/technologies/Firebase';
import Git from '@/components/technologies/Git';
import Linux from '@/components/technologies/Linux';
import Python from '@/components/technologies/Python';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Advan Drive',
    position: 'Backend Developer (Freelance)',
    location: 'Remote',
    image: '/company/figleo.png',
    description: [
      'Built a strongly typed TypeScript backend with Node.js, Express, MongoDB using clean layered architecture.',
      'Implemented social auth (Google, Apple, Facebook) with token verification, JWT sessions, and role-based access.',
      'Designed geo-aware presence and event lifecycle using Place IDs, 50--500m radius matching, and TTL expiry.',
      'Developed privacy-first APIs for discovery and chats with access control, rate limiting, and abuse protection.',
      'Modeled scalable schemas and indexes to support high-read discovery flows and low-latency queries.',
    ],
    startDate: 'Dec 2025',
    endDate: 'Present',
    website: '',
    technologies: [
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'Git', href: 'https://git-scm.com/', icon: <Git /> },
      { name: 'Linux', href: 'https://kernel.org/', icon: <Linux /> },
    ],
  },
  {
    isCurrent: true,
    company: 'Suffai',
    position: 'Software Development Engineer (Intern)',
    location: 'Remote',
    image: '/company/suffai.png',
    description: [
      'Migrated the React Native app to Expo with a full dev--test--prod pipeline and OTA updates.',
      'Took the product from MVP to production, independently owning mobile development for 10K+ users.',
      'Built core backend logic for pricing, cart flow, order lifecycle, and location-based operations.',
      'Led UI/UX redesign, animations, cart flow, and improved admin dashboards for orders and transactions.',
      'Integrated notifications, analytics, and monitoring to ensure release stability and production visibility.',
    ],
    startDate: 'May 2024',
    endDate: 'Present',
    website: 'https://suffai.in',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'React Native', href: 'https://reactnative.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'PostgreSQL', href: 'https://postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
      { name: 'Firebase', href: 'https://firebase.google.com/', icon: <Firebase /> },
      { name: 'Git', href: 'https://git-scm.com/', icon: <Git /> },
      { name: 'Linux', href: 'https://kernel.org/', icon: <Linux /> },
    ],
  },
  {
    isCurrent: false,
    company: 'Tekora Labs — MeraNivas',
    position: 'React Native App Developer (Contract)',
    location: 'Remote',
    image: '/company/meranivas.jpeg',
    description: [
      'Owned end-to-end development of a multi-role society platform across 3 production apps.',
      'Built navigation, notification, and permission flows for finance, subscriptions, visitors, parking, and emergencies.',
      'Implemented finance systems: invoicing, analytics, budgets, settlements, and date-range exports.',
      'Designed automation and data systems for reminders, attendance, QR visitors, bulk uploads, and audits.',
      'Coordinated releases and schema changes across apps to ensure backward compatibility and data integrity.',
    ],
    startDate: 'Feb 2025',
    endDate: 'Dec 2025',
    website: '',
    technologies: [
      { name: 'React Native', href: 'https://reactnative.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'PostgreSQL', href: 'https://postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Git', href: 'https://git-scm.com/', icon: <Git /> },
      { name: 'Firebase', href: 'https://firebase.google.com/', icon: <Firebase /> },
    ],
  },
  {
    isCurrent: false,
    company: 'Figleo Web Services',
    position: 'App Developer (Contract)',
    location: 'Remote',
    image: '/company/figleo.png',
    description: [
      'Built an offline-first visitor system using AsyncStorage, improving efficiency by 50%.',
      'Reduced app crashes by 25% through Redux optimization and error handling.',
      'Developed QR/Barcode attendance scanning, reducing check-in time by 70%.',
    ],
    startDate: 'Apr 2024',
    endDate: 'Oct 2024',
    website: '',
    technologies: [
      { name: 'React Native', href: 'https://reactnative.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'Postman', href: 'https://postman.com/', icon: <Postman /> },
      { name: 'Firebase', href: 'https://firebase.google.com/', icon: <Firebase /> },
      { name: 'Git', href: 'https://git-scm.com/', icon: <Git /> },
    ],
  },
];
