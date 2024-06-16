"use client";
import { useState } from "react";
import { rootUrl } from "../lib/apiCall";
import { metalQuery } from "../util/metalQuery";
import Image from "next/image";
import Link from "next/link";

function ArtistCardSmall({aBand, aSchedule}) {
    const index = Math.floor(Math.random() * 20 + 1);
    const band = aBand;
    const metal = metalQuery();
    const smallSize = 200;
    const stage = 'Midgard';

    const themeColor = {
        Midgard: 'green',
        Vanaheim: 'gold',
        Alfheim: 'blue',
    };
    const [imgSrc, setImgSrc] = useState(
        band.logo.startsWith('https') 
          ? `${band.logo}${smallSize}x${smallSize}/?${metal}?${index}`
          : `${rootUrl}/logos/${band.logo}`
      );
    const handleError = () => {
        setImgSrc('/assets/img/DummyArtist.webp');
      };
  return (
      <li className={`grid border-4 border-${themeColor[stage]}-dark hover:shadow-orange shadow-lg rounded-lg overflow-hidden text-center`}>
        <Link href={`/bands/${band.slug}`}>
        <figure className="flex relative object-contain">
            <Image onError={handleError} className="h-auto object-cover" src={imgSrc} height={200} width={200} alt={band.logoCredits ? band.logoCredits : band.name} priority={false} />
            <figcaption className="absolute top-0 right-0 p-2">
                <span className="flex bg-white text-black border border-black rounded justify-left p-2 gap-4 text-sm">{band.genre ? band.genre : null}</span>
            </figcaption>
        </figure>
        <div className="flex flex-col flex-wrap justify-start">
                <h4>{band.name}</h4>
            {band.start ? <p className="flex flex-wrap m-4 p-4 gap-4">{band.start} - {band.end}</p> : null}
        </div>
            </Link>
    </li>
  )
}

export default ArtistCardSmall;