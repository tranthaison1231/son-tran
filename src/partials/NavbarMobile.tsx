import { useState } from 'react';

import { NAVBAR_LINKS } from '@/utils/app-config';

import Drawer from './ui/Drawer';

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        className="block h-10 w-10 cursor-pointer sm:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {!isOpen ? (
            <>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
              </g>
            </>
          ) : (
            <>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="currentColor"
                ></path>{' '}
              </g>
            </>
          )}
        </svg>
      </div>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {NAVBAR_LINKS.map((link) => (
          <a
            href={link.url}
            key={link.name}
            className="block cursor-pointer p-5 text-2xl text-white hover:bg-white hover:text-primary"
          >
            {link.name}
          </a>
        ))}
      </Drawer>
    </>
  );
}

export default NavbarMobile;
