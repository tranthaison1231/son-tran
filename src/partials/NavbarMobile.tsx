import clsx from 'clsx';
import { useState } from 'react';

import { AppConfig } from '@/utils/app-config';

const NAVBAR_LINKS = [
  {
    name: 'Blogs',
    url: '/posts',
  },
  {
    name: 'Courses',
    url: '/courses',
  },
  {
    name: 'GitHub',
    url: AppConfig.socials.github.link,
  },
  {
    name: 'Linkedin',
    url: AppConfig.socials.linkedin.link,
  },
];

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        role="button"
        tabindex="0"
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        className="block h-10 w-10 cursor-pointer sm:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {!isOpen ? (
            <>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                <path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                <path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
              </g>
            </>
          ) : (
            <>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="#fff"
                ></path>{' '}
              </g>
            </>
          )}
        </svg>
      </div>
      <div
        className={clsx('fixed inset-0 z-30 h-screen w-screen bg-black/70', {
          hidden: !isOpen,
        })}
        role="button"
        tabindex="0"
        onClick={onClose}
      />
      <ul
        className={clsx('fixed inset-0 z-40 h-screen w-3/4 bg-[#2e2b5a] pt-5 text-black transition-transform', {
          'translate-x-0': isOpen,
          '-translate-x-full': !isOpen,
        })}
      >
        {NAVBAR_LINKS.map((link) => (
          <a
            href={link.url}
            key={link.name}
            class="block cursor-pointer p-5 text-2xl text-white hover:bg-white hover:text-[#7e67fd]"
          >
            {link.name}
          </a>
        ))}
      </ul>
    </>
  );
}

export default NavbarMobile;
