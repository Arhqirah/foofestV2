"use client";
import React from 'react';
import Link from 'next/link';

export default function FancyCampCircle(props) {

  const {href, stageSelect} = props;

  const handleStage = (newStage, newTheme) => {
    stageSelect(newStage, newTheme);
  }
  
  if (href || stageSelect) {
    if (href) {
      return (
        <div className="relative w-[28rem] h-96 mx-auto my-16 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/assets/img/CAMPMAP.webp)' }}>
          <div className="relative mx-auto w-48 h-48">
            <Link href="/camp" prefetch={false}>
              <div className="absolute w-[32rem] h-52 hover:backdrop-blur-sm hover:bg-opacity-30 duration-300 clip-wedge rotate-0 origin-center transform hover:opacity-100"style={{ top: '0%', left: '-83%' }}></div>
            </Link>
            <Link href="/camp" prefetch={false}>
              <div className="absolute w-72 h-48 hover:backdrop-blur-sm duration-300 clip-wedge rotate-[270deg] origin-center transform hover:opacity-100"style={{ top: '50%', left: '-82%' }}></div>
            </Link>  
            <Link href="/camp" prefetch={false}>
              <div className="absolute w-72 h-48 duration-300 hover:backdrop-blur-sm clip-wedge rotate-[90deg] origin-center transform hover:opacity-100"style={{ top: '50%', left: '34%' }}></div>
            </Link>
          </div>
        </div>
      );
    } else if (stageSelect) {
      return (
        <div className="relative w-[28rem] h-96 mx-auto my-16 bg-no-repeat bg-center bg-cover bg-bandMap">
          <div className="relative mx-auto w-48 h-48">
              <div className="flex justify-center absolute w-[32rem] h-52 hover:backdrop-blur-sm hover:bg-opacity-30 duration-300 clip-wedge rotate-0 origin-center transform hover:opacity-100" style={{ top: '0%', left: '-83%' }}>
                <button key="Vanaheim" className="flex flex-col gap-4 items-center p-10 opacity-0 hover:opacity-100 hover:text-gold" onClick={() => handleStage('Vanaheim', 'gold')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                  Vanaheim
                </button>
              </div>
              <div className="flex justify-center absolute w-72 h-48 hover:backdrop-blur-sm duration-300 clip-wedge rotate-[270deg] origin-center transform hover:opacity-100" style={{ top: '50%', left: '-82%' }}>
                <button key="Midgard" className="flex flex-col gap-4 items-center rotate-90 p-10 opacity-0 hover:opacity-100 hover:text-green" onClick={() => handleStage('Midgard', 'green')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                  Midgard
                </button>
              </div>
              <div className="flex justify-center absolute w-72 h-48 duration-300 hover:backdrop-blur-sm clip-wedge rotate-[90deg] origin-center transform hover:opacity-100" style={{ top: '50%', left: '34%' }}>
                <button key="Alfheim" className="flex flex-col gap-4 items-center  -rotate-90 p-10 opacity-0 hover:opacity-100 hover:text-blue" onClick={() => handleStage('Alfheim', 'blue')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                  Alfheim
                </button>
              </div>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div>Hvad har du nu lavet?!</div>
    )
  }
}