"use client";
import { useEffect, useState } from "react";
import { filterAct, mergeData } from "../util/filter";
import { rootUrl } from "../lib/apiCall";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import ArtistCard from "./ArtistCard";

const smallSizes = ["720", "576"];

function CampSchedule({ flatSchedule, mergedData, stage, setStage }) {
    const flatScenes = flatSchedule;
    const allData = mergedData;

    const [daySelect, setDaySelect] = useState('mon');

    function getDay(chooseDay = null) {
        const week = {
            'Monday': 'mon',
            'Tuesday': 'tue',
            'Wednesday': 'wed',
            'Thursday': 'thu',
            'Friday': 'fri',
            'Saturday': 'sat',
            'Sunday': 'sun'
        };
        return week[chooseDay];
    }

    useEffect(() => {
        if (!stage) {
            setStage(Object.keys(allData)[0]);
        }
    }, [allData, setStage]);

    const handleDay = (day) => {
        const setday = getDay(day);
        console.log("clicked: ", day);
        setDaySelect(setday);
    };

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const themeColor = {
        Midgard: 'green',
        Vanaheim: 'gold',
        Alfheim: 'blue',
    };

    const bandsPlaying = allData[stage]?.[daySelect]?.filter(band => band.act !== 'break') || [];

    return (
        <section className="flex flex-col gap-12">
            <article className="flex flex-col text-center">
                <h1 className={`text-${themeColor[stage]}`}>{stage}</h1>
                <ul className="flex flex-row justify-center flex-wrap gap-4">
                    {weekDays.map((singleDay, i) => (
                        <li key={i}>
                            <Button variant={themeColor[stage]} onClick={() => handleDay(singleDay)}>{singleDay}</Button>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="flex flex-row flex-wrap gap-y-8 gap-x-4">
                <div>
                    {bandsPlaying.map((band, index) => (
                        <div key={index}>
                            <h3>{band.act}</h3>
                            <p>{band.start} - {band.end}</p>
                            <figure className="w-full object-fill">
                                {band.logo.startsWith("http") ?  
                                    (<Image src={`${band.logo}${smallSizes[0]}x${smallSizes[1]}`} height={800} width={800} alt={band.name} priority={false} />)
                                    :
                                    (<Image src={`${rootUrl}/logos/${band.logo}`} height={800} width={800} alt={band.logoCredits} priority={false} />)
                                }
                            </figure>
                            <p><strong>Genre:</strong> {band.genre}</p>
                        </div>
                    ))}
                </div>
            </article>
            <article className="flex flex-col gap-12">
                <div>
                    <h3>Det skal du vide om NAVN PÅ SCENEN</h3>
                    <h4>TEMA: HVAD SKAL DENNE SCENEN?</h4>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat deserunt quia, placeat quibusdam ad dicta, corrupti aspernatur maxime quae vel omnis iste expedita corporis minus dolorem sint, explicabo recusandae.</p>
                    <Image src={`/assets/img/AlfheimScene.webp`} height={600} width={600} priority={false} />
                </div>
            </article>
        </section>
    );
}

export default CampSchedule;
