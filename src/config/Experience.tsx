
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
    company: 'Suffai',
    position: 'Software Development Engineer',
    location: 'Remote',
    image: '/company/suffai.png',
    description: [
      'Developed and optimized the website admin frontend, improving workflow efficiency by ~40%.',
      'Contributed to backend development, reducing API response time by ~30%.',
      'Led development of a React Native app from scratch; crossed 1,000+ downloads with ~4.5★ rating in the first 2 months.',
      'Implemented scalable React/React Native component patterns that accelerated development by ~25%.',
      'Improved deployment pipelines and integrated Expo-based release flows, reducing release cycles by ~20%.',
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
    company: 'Figleo Web Services',
    position: 'App Developer',
    location: 'Remote',
    image: '/company/figleo.png',
    description: [
      'Built a visitor management system with offline-ready flows via AsyncStorage and optimized API usage; improved operational efficiency by ~50%.',
      'Reduced crash rates by ~25% by optimizing Redux state management and render paths.',
      'Designed and shipped QR/Barcode-based attendance scanning; reduced check-in time by ~70% and eliminated ~95% manual entry errors.',
      'Integrated REST APIs, improving customer satisfaction metrics by ~30%.',
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
  {
    isCurrent: false,
    company: 'Gurugram Police Cyber Cell',
    position: 'Cybersecurity Intern',
    location: 'Gurugram, India',
    image: '/company/cybercell.png',
    description: [
      'Assisted in resolving several cyber-fraud cases and strengthened investigation protocols.',
      'Performed threat analysis and vulnerability scans on 20+ devices, accelerating case resolution by ~40%.',
      'Contributed to security controls and awareness that correlated with fewer reported data breach incidents.',
    ],
    startDate: 'Jun 2024',
    endDate: 'Jul 2024',
    website: '',
    technologies: [
      { name: 'Linux', href: 'https://kernel.org/', icon: <Linux /> },
      { name: 'PostgreSQL', href: 'https://postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Python', href: 'https://python.org/', icon: <Python /> }, // you may create a Python icon component
      { name: 'Java', href: 'https://www.java.com/', icon: <JavaScript /> }, // placeholder until you add Java icon
      { name: 'Postman', href: 'https://postman.com/', icon: <Postman /> },
    ],
  },
];
