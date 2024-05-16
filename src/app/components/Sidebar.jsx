'use client'
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className="p-2 bg-black border-orange border-2 text-white rounded-md absolute top-4 right-4 z-100 flex flex-col items-center justify-center"
        onClick={toggleSidebar}
      >
        <div className="block w-6 h-0.5 bg-white my-1 rounded-full"></div>
        <div className="block w-6 h-0.5 bg-white my-1 rounded-full"></div>
        <div className="block w-6 h-0.5 bg-white my-1 rounded-full"></div>
      </button>
      <div
        className={`fixed bottom-0 right-0 h-full w-80 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{
          background: `linear-gradient(var(--gradient-start), var(--gradient-end))`
        }}
      >
        <button
          className="p-2 m-4 bg-red rounded"
          onClick={toggleSidebar}
        >
          X
        </button>
        <nav>
          <ul>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <span>NYHEDER</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <span>PROGRAM</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <span>BILLETTER</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <span>BLIV FRIVILLIG</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <span>CAMPING</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between items-center border-b border-orange text-lg">
                <span>FAQ</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-between items-center p-4">
          <img src="/assets/img/FooFestLogo.webp" alt="Logo" />
          <div className="flex">
            <img src="/assets/icons/FacebookIcon.webp" alt="Facebook Icon" className="w-6 h-6 mr-4" />
            <img src="/assets/icons/InstagramIcon.webp" alt="Instagram Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
