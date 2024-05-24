"use client";
import { useEffect, useState } from "react";
import { filterAct, mergeData } from "../../util/filter";
import { metalQuery } from "@/app/util/metalQuery";
import { rootUrl } from "../../lib/apiCall";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import ArtistCard from "../ArtistCard";

const smallSize = "600";

function CampSchedule({ flatSchedule, mergedData, stage, setStage }) {
    const flatScenes = flatSchedule;
    const allData = mergedData;
    const metal = metalQuery();

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
        setDaySelect(setday);
    };
    const handleStage = (stage) => {
        setStage(stage);
    }

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const festivalStages = ['Midgard', 'Vanaheim', 'Alfheim']
    const themeColor = {
        Midgard: 'green',
        Vanaheim: 'gold',
        Alfheim: 'blue',
    };

    const bandsPlaying = allData[stage]?.[daySelect]?.filter(band => band.act !== 'break') || [];

    return (
        <section className="flex flex-col gap-12">
            <article className="flex flex-col text-center">
                <ul className="flex flex-row justify-center flex-wrap gap-4">   
                    {festivalStages.map((singleStage, i) => (
                        <li key={i}>
                            <Button variant={themeColor[singleStage]} onClick={() => handleStage(singleStage)}>{singleStage}</Button>
                        </li>
                    ))}
                </ul>
            </article>
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
            <article className="flex w-full flex-row justify-center flex-wrap gap-y-8 gap-x-4">
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full">
                    {bandsPlaying.map((band, index) => (
                        // opdatere ArtistCard
                        <li key={index} className={`max-w-xs mx-auto border-4 border-${themeColor[stage]}-dark hover:shadow-orange shadow-lg rounded-lg overflow-hidden`}>
                            <figure className="relative w-full">
                                {band.logo.startsWith("http") 
                                    ?  
                                    (<Image src={`${band.logo}/${smallSize}x${smallSize}/?${metal}?${index}`} height={600} width={600} alt={band.name} priority={false} />)
                                    :
                                    (<Image src={`${rootUrl}/logos/${band.logo}`} height={600} width={600} alt={band.logoCredits} priority={false} />)
                                }
                                <figcaption className="absolute bottom-0 w-full text-orange text-lg">{band.act}</figcaption>
                            </figure>
                            <p><strong>Spiller: </strong><br/>{band.start} - {band.end}</p>
                            <p><strong>Genre: </strong><br/>{band.genre}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="flex flex-col gap-12">
                <div>
                    <h3>Det skal du vide om {stage}</h3>
                    <h4>TEMA: HVAD SKAL DENNE SCENEN?</h4>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat deserunt quia, placeat quibusdam ad dicta, corrupti aspernatur maxime quae vel omnis iste expedita corporis minus dolorem sint, explicabo recusandae.</p>
                    <Image src={`/assets/img/${stage}Scene.webp`} height={600} width={600} priority={false} />
                </div>
            </article>
        </section>
    );
}

export default CampSchedule;
