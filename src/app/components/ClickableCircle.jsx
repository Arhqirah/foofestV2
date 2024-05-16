import React from 'react';
import Link from 'next/link';

const ClickableCircle = () => {
  return (
    <div className="relative w-[28rem] h-96 mx-auto my-16 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/assets/img/CAMPMAP.webp)' }}>
      <div className="relative mx-auto w-48 h-48">
        
       
        <Link href="/form" prefetch={false}>
          <div className="absolute w-60 h-48 hover:bg-yellow duration-300 clip-wedge rotate-180 origin-center transform hover:opacity-100"style={{ top: '35%', left: '-15%' }}></div>
        </Link>

       
        <Link href="/#" prefetch={false}>
          <div className="absolute w-48 h-48 hover:bg-yellow duration-300 clip-wedge rotate-[90deg] origin-center transform hover:opacity-100"style={{ top: '50%', left: '-40%' }}></div>
        </Link>

        
        <Link href="/camp" prefetch={false}>
          <div className="absolute w-48 h-48 hover:bg-yellow duration-300 clip-wedge rotate-[270deg] origin-center transform hover:opacity-100"style={{ top: '50%', left: '40%' }}></div>
        </Link>
      </div>
    </div>
  );
};

export default ClickableCircle;
