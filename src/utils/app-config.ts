import type { CollectionEntry } from 'astro:content';

import acciona from '@/assets/images/acciona-logo.png';
import backend from '@/assets/images/backend.png';
import blockchain from '@/assets/images/blockchain.png';
import creator from '@/assets/images/creator.png';
import smartos from '@/assets/images/smartos-logo.png';
import web from '@/assets/images/web.png';
import facebook from '@/assets/svgs/facebook.svg';
import github from '@/assets/svgs/github.svg';
import linkedin from '@/assets/svgs/linkedin.svg';
import youtube from '@/assets/svgs/youtube.svg';

export const AppConfig = {
  site_name: 'Son Tran - Fullstack Developer',
  name: 'Son Tran',
  bio: 'As a Frontend Tech Lead with over 5 years of experience, I specialize in building high-performance web applications using the latest technologies. My expertise lies in React, GraphQL, Apollo, Next.js, TypeScript, and AWS. I have a proven track record of leading cross-functional teams to deliver high-quality products on time and within budget. My strong leadership skills and technical acumen have enabled me to drive innovation and improve the overall user experience of the applications I have worked on.',
  title: 'Son Tran',
  description: 'Blog of Son Tran - Fullstack Developer',
  author: 'Son Tran',
  locale_region: 'en-us',
  locale: 'en',
  image: {
    src: '/images/avatar.jpg',
    alt: 'Son Tran Blog',
  },
  socials: {
    facebook: {
      link: 'https://www.facebook.com/son.tran.17.11/',
      icon: facebook,
      alt: 'Facebook Icon',
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/son-tran-b26797182/',
      icon: linkedin,
      alt: 'LinkedIn Icon',
    },
    github: {
      link: 'https://www.github.com/tranthaison1231/',
      icon: github,
      alt: 'Github Icon',
    },
    youtube: {
      link: 'https://www.youtube.com/channel/UCFGSLDaIOZpvE432Scyarow',
      icon: youtube,
      alt: 'Youtube Icon',
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
    title: 'Blockchain Developer',
    icon: blockchain,
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

export const Projects = [
  {
    name: 'Chinese Chess',
    description: 'Side project to create a chess game with technologies like Svelte, TypeScript, Shadcn UI, AWS Lambda, API Gateway, Cloudfront, Socket',
    url: 'https://github.com/tranthaison1231/chinese-chess',
    fromDate: 'Oct 01, 02023',
    toDate: 'Dec 01, 2023',
    imgSrc: 'https://res.cloudinary.com/dx1jngfdn/image/upload/v1702022165/son-tran/Screenshot_2023-12-08_at_14.55.52_x1jwk4.png',
  },
  {
    name: 'Meta Clone',
    description: 'Project clone of Meta with Tuborepo, Golang, Postgres and Lambda for BE, Svelekit for Messenger, Nuxt for Facebook',
    url: 'https://github.com/tranthaison1231/meta-clone',
    fromDate: 'Oct 01, 02023',
    toDate: 'Now',
    imgSrc: 'https://res.cloudinary.com/dx1jngfdn/image/upload/v1702022551/Screenshot_2023-12-08_at_15.01.21_pyfoyp.png',
  },
  {
    name: 'CoinInvest',
    description: 'Project for manage and investing in crypto with Sveltekit, Prisma, Clerk and Vercel Function',
    url: 'https://github.com/tranthaison1231/dca-system',
    fromDate: 'Dec 01, 02023',
    toDate: 'Now',
    imgSrc: 'https://res.cloudinary.com/dx1jngfdn/image/upload/v1702022711/Screenshot_2023-12-08_at_15.05.00_us5tfg.png',
  }
]

export const NAVBAR_LINKS = [
  {
    name: 'Blogs',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Courses',
    url: '/courses',
  },
  {
    name: 'My CV',
    url: 'https://drive.google.com/file/d/1-g5VYJPg5K7mM8FcQWYCuJBMiXYrW7Dc/view?usp=sharing',
  },
];

export function jsonLDGenerator({
  type,
  post,
  url,
}: {
  type: string;
  post?: CollectionEntry<'blog'>;
  url: string | URL;
}) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post?.data.title}",
        "description": "${post?.data.description}",
        "image": "${post?.data.imgSrc}",
        "datePublished": "${post?.data.pubDate}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${AppConfig.title}",
      "url": "https://son-tran.vercel.app/"
      }
    </script>`;
}
