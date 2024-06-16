"use client";
import { useEffect, useState } from "react";
import { metalQuery } from "../util/metalQuery";
import { rootUrl } from "../lib/apiCall";
import Image from "next/image";
import Link from "next/link";

export default function ArtistSlug({bandSlug, filteredbandSlug, themeColor, smallSizes, bandNumber}) {
    const metal = metalQuery();
    const [index, setIndex] = useState(null)
    const [imgSrc, setImgSrc] = useState(
        bandSlug.logo.startsWith('https') 
          ? `${bandSlug.logo}${smallSizes}x${smallSizes}/?${metal}?${index}`
          : `${rootUrl}/logos/${bandSlug.logo}`
      );
      useEffect(() => {
        setIndex(bandNumber);
      })
    const handleError = () => {
        setImgSrc('/assets/img/DummyArtist.webp');
      };
return (
<article className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <figure className={`w-full h-full border-2 border-${themeColor[filteredbandSlug[0].stage]}`}>
                <Image onError={handleError} className="h-full w-full object-cover object-center" src={imgSrc} height={500} width={500} alt={bandSlug.logoCredits ? bandSlug.logoCredits : bandSlug.name} priority={false} />
            </figure>
            <div className="grid h-fit gap-6">
              <div className="flex flex-row flex-wrap gap-x-10">
                <div>
                  <h3>Genre</h3>
                  <h4 className="align-center">{bandSlug.genre}</h4>
                </div>
              </div>
              <div>
                <h3>Members</h3>
                <ul className="flex flex-wrap gap-4">
                  {bandSlug.members.map((m) => {
                    return (<li key={m}>{m}</li>)
                  })}
                </ul>
              </div>
              <div>
              <h3>Spiller på: </h3>
                <ul className="align-center flex flex-row gap-2">{filteredbandSlug.map((band) => {
                  return (
                    <li key={band.day} className={`text-${themeColor[band.stage]} border p-2`}>
                      <h4>{band.stage}</h4>
                      <h5>{band.start} - {band.end}</h5>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p>{bandSlug.bio}</p>
          </div>
          <Link href={'../camp'} className="bg-orange px-4 w-fit rounded text-lg">Tilbage til camp</Link>
        </article>
)}