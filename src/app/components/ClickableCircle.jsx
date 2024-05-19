import React from 'react';
import Link from 'next/link';

const ClickableCircle = () => {
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
};

export default ClickableCircle;
