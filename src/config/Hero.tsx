import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import Firebase from '@/components/technologies/Firebase';
import Git from '@/components/technologies/Git';
import JavaScript from '@/components/technologies/JavaScript';
import Linux from '@/components/technologies/Linux';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Tailwind from '@/components/technologies/Tailwind';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Tailwind: Tailwind,
  Firebase: Firebase,
  Git: Git,
  Linux: Linux,
};

export const heroConfig = {
  // Personal Information
  name: 'Shubham Jangra',
  title: 'Full Stack Developer | App Developer | Open Source Contributor',
  avatar: '/assets/logo.png', // replace with your actual avatar

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'React Native',
      href: 'https://reactnative.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
      href: 'https://mongodb.com/',
      component: 'MongoDB',
    },
  ],

  // Description Configuration
  description: {
    template:
      "I'm a <b>Full Stack Developer</b> who loves building scalable products that solve real-world problems. " +
      'I work with {skills:0}, {skills:1}, {skills:2}, {skills:3}, and databases like {skills:4}/{skills:5}. ' +
      'Currently pursuing <b>B.Tech CSE</b> (MDU, 2026) and working as a <b>Software Development Engineer @ Suffai</b>.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/jxngrx',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jxngrx',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/jxngrx',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:shubhamjangrartk@gmail.com',
    icon: <Mail />,
  },
//   {
//     name: 'Portfolio',
//     href: 'https://jxngrx.vercel.app',
//     icon: <Github />, // you can replace with a custom "Globe" or "Portfolio" icon
//   },
];
