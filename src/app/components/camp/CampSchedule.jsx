"use client";
import React, { useEffect, useState } from "react";
import { filterAct, mergeData } from "../../util/filter";
import { metalQuery } from "@/app/util/metalQuery";
import { rootUrl } from "../../lib/apiCall";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import ArtistCard from "../ArtistCard";

const smallSize = "600";

function CampSchedule({bands, stage, day, theme, onSceneChange, onDayChange, metal}) {

    const allBands = bands
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const festivalStages = ['Midgard', 'Vanaheim', 'Alfheim']

    const bandsPlaying = allBands[stage]?.[day]?.filter(band => band.act !== 'break') || [];

    return (
        <section className="flex flex-col gap-12 w-full">
            <article className="flex flex-col text-center">
                <h1 className={`text-${theme}`}>{stage}</h1>
                <ul className="flex flex-row justify-center flex-wrap gap-4">
                    {weekDays.map((singleDay, i) => (
                        <li key={i}>
                            <Button variant={theme} onClick={() => onDayChange(singleDay)}>{singleDay}</Button>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="flex w-full flex-row justify-center flex-wrap gap-y-8 gap-x-4">
                <ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
                    {bandsPlaying.map((band, index) => (
                        <li key={index} className={`grid border-4 border-${theme}-dark hover:shadow-orange shadow-lg rounded-lg overflow-hidden`}>
                            <ArtistCard aBand={band} />
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}

export default CampSchedule;
