import { useState } from "react";
import { rootUrl } from "../lib/apiCall";
import { metalQuery } from "../util/metalQuery";
import Image from "next/image";
import Link from "next/link";

export default function ArtistCard({aBand}) {
    const index = Math.floor(Math.random() * 12 + 1);
    const band = aBand;
    const metal = metalQuery();
    const smallSize = 600;
    const [imgSrc, setImgSrc] = useState(
        band.logo.startsWith('https') 
          ? `${band.logo}${smallSize}x${smallSize}/?${metal}?${index}`
          : `${rootUrl}/logos/${band.logo}`
      );
    const handleError = () => {
        setImgSrc('/assets/img/DummyArtist.webp');
      };
    return (
        <li key={band.act} className={`grid grid-cols-1 bg-black  hover:shadow-orange shadow-lg rounded-lg align-top h-full p-4`}>
            <Link href={`/bands/${band.slug}`} prefetch={false}>
                <figure className="w-full h-[400px] relative object-cover object-center">
                    <Image onError={handleError} className="h-full w-full object-cover object-center" src={imgSrc} height={600} width={600} alt={band.logoCredits ? band.logoCredits : band.name} priority={false} />
                    <figcaption className="grid grid-flow-col w-full absolute top-0 justify-between p-2">
                        <span className="bg-white text-black border border-black rounded p-2 h-fit text-sm">{band.genre ? band.genre : null}</span>
                        {band.start ? <span className="bg-white text-black border border-black rounded h-fit p-2">{band.start} - {band.end}</span> : null}
                    </figcaption>
                </figure>
                <h2 className="w-full h-fit p-2 text-center text-xl">
                    {band.act}
                </h2>
            </Link>
        </li>
    )
}