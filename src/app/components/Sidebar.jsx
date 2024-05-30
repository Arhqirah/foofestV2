'use client'
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sticky top-4 right-2 z-50'>
      <button
        className="p-4 bg-black border-orange border-2 text-white rounded-md absolute top-4 right-4 z-100 flex flex-col items-center justify-center"
        onClick={toggleSidebar}
      >
        <span className='hidden'>button</span>
        <div className="block w-6 h-0.5 bg-white my-1 rounded-full"></div>
        <div className="block w-6 h-0.5 bg-white my-1 rounded-full"></div>
        <div className="block w-6 h-0.5 bg-white my-1 rounded-full"></div>
      </button>
      <div
        className={`fixed bottom-0 z-50 right-0 h-full w-80 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{
          background: `linear-gradient(var(--gradient-start), var(--gradient-end))`
        }}
      >
        <button
          className="p-2 m-4 bg-black-light border-orange border 2 rounded"
          onClick={toggleSidebar}
        >
          X
        </button>
        <nav>
          <ul>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <Link href="/#" prefetch={false}>NYHEDER</Link>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
              <Link href="/camp" prefetch={false}>PROGRAM</Link>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
              <Link href="/form" prefetch={false}>BILLETTER</Link>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
              <Link href="/#" prefetch={false}>BLIV FRIVILLIG</Link>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
              <Link href="/camp/#campInfo" prefetch={false}>CAMP</Link>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
              <Link href="#faq" prefetch={false}>FAQ</Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-between items-center p-4">
        <Link href="/" prefetch={false}>
          <img src="/assets/img/FooFestLogo.webp" alt="Logo" />
        </Link>
          <div className="flex">
          <Link href="#faq" prefetch={false}>
            <img src="/assets/icons/FacebookIcon.webp" alt="Facebook Icon" className="w-6 h-6 mr-4" />
          </Link>
          <Link href="#faq" prefetch={false}>
            <img src="/assets/icons/InstagramIcon.webp" alt="Instagram Icon" className="w-6 h-6" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
