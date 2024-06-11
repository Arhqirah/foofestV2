"use client";
import React, {useEffect, useState} from "react";
import ArtistCard from "../ArtistCard";
import CampDays from "./CampDays";
import Button from "../Button";

export default function CampSchedule(props) {
    const {bands, stages, day, theme, onDayChange, themeColor} = props;
    const allBands = bands;
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const bandsPlaying = allBands[stages]?.[day]?.filter(band => band.act !== 'break') || [];
    
    return (
        <section className="flex flex-col gap-12 w-full">
            <article className="flex flex-col text-center">
                <h1 className={`text-${theme}`}>{stages}</h1>
                <CampDays theme={theme} stages={stages} themeColor={themeColor} onDayChange={onDayChange} weekDays={weekDays} />
            </article>
            <article className="flex w-full flex-row justify-center flex-wrap gap-y-8 gap-x-4">
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {bandsPlaying.map(band => (
                            <ArtistCard key={band.act} aBand={band} />
                    ))}
                </ul>
            </article>
        </section>
    );
}
