import acciona from '@/assets/images/acciona-logo.png';
import backend from '@/assets/images/backend.png';
import creator from '@/assets/images/creator.png';
import facebook from '@/assets/images/facebook-icon.png';
import linkedin from '@/assets/images/linkedin-icon.png';
import mobile from '@/assets/images/mobile.png';
import smartos from '@/assets/images/smartos-logo.png';
import web from '@/assets/images/web.png';

export const AppConfig = {
  site_name: 'Son Tran - Fullstack Developer',
  name: 'Son Tran',
  bio: 'As a Frontend Tech Lead with over 4 years of experience, I specialize in building high-performance web applications using the latest technologies. My expertise lies in React, GraphQL, Apollo, Next.js, TypeScript, and AWS. I have a proven track record of leading cross-functional teams to deliver high-quality products on time and within budget. My strong leadership skills and technical acumen have enabled me to drive innovation and improve the overall user experience of the applications I have worked on.',
  title: 'Son Tran',
  description: 'Boilerplate built with Astro using React and Tailwind CSS',
  author: 'Son Tran',
  locale_region: 'en-us',
  locale: 'en',
  socials: {
    github: {
      link: 'https://github.com/tranthaison1231',
      icon: null,
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/son-tran-b26797182/',
      icon: linkedin,
      alt: 'LinkedIn Icon',
    },
    facebook: {
      link: 'https://www.facebook.com/son.tran.17.11/',
      icon: facebook,
      alt: 'Facebook Icon',
    },
  },
  projects: [
    {
      name: 'ACCIONA',
      description:
        'A management platform helps construction company to manage their employees with timesheet, manage other modules and their partners',
      link: '/',
      img: {
        src: acciona,
        alt: 'Acciona Logo',
      },
      categories: ['React', 'Frontend-Developer', 'Tailwind', 'TypeScript', 'AWS', 'Mapbox', 'Circle CI'],
    },
    {
      name: 'SMARTOS',
      description: 'A smarter office space management software',
      link: '/',
      img: {
        src: smartos,
        alt: 'Project Web Design',
      },
      categories: ['React', 'Frontend-Developer', 'Tailwind', 'TypeScript', 'AWS', 'Mapbox', 'Circle CI'],
    },
  ],
};

export const Services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];
