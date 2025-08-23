import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import TailwindCss from '@/components/technologies/TailwindCss';
import Python from '@/components/technologies/Python'; // ⚡️ add this component
import HuggingFace from '@/components/technologies/HuggingFace'; // ⚡️ add this component
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ERohtak',
    description:
      'Multi-platform local-business listing system onboarding 100+ listings and boosting sales by ~20%. Features responsive UI with ~35% higher engagement and Jest testing for reliability. Roadmap includes secure payments and ~30% performance optimization.',
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
    github: '', // add if public repo exists
    live: 'https://erohtak.com',
    details: true,
    projectDetailsPageSlug: '/projects/erohtak',
    isWorking: true,
  },
  {
    title: 'RECHK',
    description:
      'AI-powered platform for automated research paper evaluation, reducing manual review time by ~80%. Checks publishability, AI-likeness, plagiarism, grammar, word count, figures, tables, and font usage. Deployed full-stack with custom domain.',
    image: '/project/rechk.png',
    link: 'https://dev.rechk.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Hugging Face', icon: <HuggingFace key="hf" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: '', // add if public repo exists
    live: 'https://dev.rechk.in',
    details: true,
    projectDetailsPageSlug: '/projects/rechk',
    isWorking: true,
  },
];
