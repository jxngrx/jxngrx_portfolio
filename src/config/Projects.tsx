import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import TailwindCss from '@/components/technologies/TailwindCss';
import Python from '@/components/technologies/Python';
import HuggingFace from '@/components/technologies/HuggingFace';
import Convex from '@/components/technologies/Convex';
import VAPI from '@/components/technologies/VAPI';
import Clerk from '@/components/technologies/Clerk';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ERohtak',
    description:
      'Developed a multi-platform system with 100+ live business listings, increasing partner sales by 20%. Built responsive UI with Jest test coverage, boosting user engagement by 35%.',
    image: '/project/erohtak.png',
    link: 'https://erohtak.com',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'React Native', icon: <ReactIcon key="reactnative" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: '',
    live: 'https://erohtak.com',
    details: true,
    projectDetailsPageSlug: '/projects/erohtak',
    isWorking: true,
  },
  {
    title: 'AI Support SaaS Platform',
    description:
      'Built B2B AI support system with real-time chat, voice AI, and RAG-based knowledge search. Implemented auto-resolution, human escalation, multi-workspaces, and team management. Integrated Clerk auth, subscription billing, secure AWS key storage, and an embeddable AI widget.',
    image: '/company/figleo.png',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Convex', icon: <Convex key="convex" /> },
      { name: 'VAPI', icon: <VAPI key="vapi" /> },
      { name: 'Clerk', icon: <Clerk key="clerk" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/jxngrx/jkdebug-echo-nextjs',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/ai-support-saas',
    isWorking: true,
  },
  {
    title: 'RECHK',
    description:
      'Built AI-driven research paper evaluation system reducing manual review time by 80%. Integrated ML models for plagiarism, grammar, and formatting analysis.',
    image: '/project/rechk.png',
    link: 'https://rechk.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Hugging Face', icon: <HuggingFace key="hf" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: '',
    live: 'https://rechk.in',
    details: true,
    projectDetailsPageSlug: '/projects/rechk',
    isWorking: true,
  },
];
