"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function bandList({data}) {
    const [list, setList] = useState(20)
    const handleMore = () => {
      setList(list + 8);
    }
    const handleLess = () => {
      setList(list - 8);
    }
    return (
    <div className="flex flex-wrap flex-row h-fit w-fit gap-4 place-content-center">
      <ul className="flex items-center place-content-center flex-wrap gap-2">
          {data.slice(0, list).map((band, index) => {
            return (
              <li className="flex" key={index}>
                <Link className={`p-3 h-fit hover:underline hover:text-orange-light ${band.isBig ? 'text-lg' : 'text-md'}`} href={`/bands/${band.slug}`}>
                  {band.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* måske laves lidt penere og med animation? */}
        {list >= 30 && <Button variant="orange" onClick={handleLess} randomClass="text-lg p-8">Vis færre</Button>}
        {list >= 60 ? null : <Button variant="orange" onClick={handleMore} randomClass="text-lg p-8">Vis flere</Button>}
      </div>
    )
  }