"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function bandList({bands}) {
  const [bigBands, setBigBands] = useState([]);
  const [otherBands, setOtherBands] = useState([]);
  useEffect(() => {
    const big = bands.filter(bigband => bigband.isBig === true);
    const small = bands.filter(smallband => smallband.isBig === false);
    setBigBands(big);
    setOtherBands(small);
  }, [])
    return (
      <article className="w-full p-2 flex flex-wrap flex-row gap-4 text-pretty xl:w-3/4">
      <ul className="flex flex-wrap justify-center">
        {bigBands.map((band, index, array) => {
          return (
            <React.Fragment key={band.slug}>
              <li>
                <Link href={`/bands/${band.slug}`} className="text-black hover:text-white text-3xl transition text-stroke-1 hover:text-stroke-0" prefetch={false}>{band.name}</Link>
              </li>
              {index !== array.length -1 && (<li className="align-center text-white hover:text-white-light text-3xl font-normal mx-2">/</li>)}
            </React.Fragment>
          ) 
        })}
      </ul>
      <ul className="flex grow flex-wrap justify-center gap-2 text-md">
        {otherBands.map((band, index, array) => {
          const bandKey = band.slug + index;
          return (
            <React.Fragment key={bandKey}>
              <li>
                <Link href={`/bands/${band.slug}`} className="text-white hover:text-white-dark transition-colors" prefetch={false}>{band.name}</Link>
              </li>
              {index !== array.length -1 && (<li className=" text-white hover:text-white-light text-md font-normal mx-2">/</li>)}
            </React.Fragment>
          ) 
        })}
      </ul>
      </article>
    )
  }