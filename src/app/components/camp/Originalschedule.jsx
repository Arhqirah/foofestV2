"use client";
import React, { useEffect, useState } from "react";
import { filterAct, mergeData } from "../../util/filter";
import { metalQuery } from "@/app/util/metalQuery";
import { rootUrl } from "../../lib/apiCall";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import ArtistCard from "../oldArtistCard";

const smallSize = "600";

function CampSchedule({ flatSchedule, mergedData}) {
    const flatScenes = flatSchedule;
    const allData = mergedData;
    const metal = metalQuery();

    const [daySelect, setDaySelect] = useState('mon');
    const [stage, setStage] = useState('Midgard')

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
                        <li key={singleDay}>
                            <Button variant={themeColor[stage]} onClick={() => handleDay(singleDay)}>{singleDay}</Button>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="flex w-full flex-row justify-center flex-wrap gap-y-8 gap-x-4">
                <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
                    {bandsPlaying.map((band, index) => (
                        <li key={band} className={`grid grid-cols-[minmax(300px,600px)] grid-rows-[minmax(200px,500px),auto] border-4 border-${themeColor[stage]}-dark hover:shadow-orange shadow-lg rounded-lg overflow-hidden`}>
                            <figure className="flex relative object-contain">
                                {band.logo.startsWith("http") 
                                    ?  
                                    (<Image className="h-auto object-cover" src={`${band.logo}${smallSize}x${smallSize}/?${metal}?${index}`} height={600} width={600} alt={`Picture of ${band.name}`} priority={false} style={{width: 'cover'}} />)
                                    :
                                    (<Image className="h-auto object-cover" src={`${rootUrl}/logos/${band.logo}`} height={600} width={600} alt={`Credits: ${band.logoCredits}`} priority={false} style={{width: 'fill'}}/>)
                                }
                                <figcaption className="absolute bottom-0 w-full text-orange text-lg">
                                    <Link href={`/bands/${band.slug}`}>
                                        {band.act}
                                    </Link>
                                </figcaption>
                            </figure>
                            <div className="flex flex-col flex-wrap">
                            <p className="flex flex-wrap m-4 p-4 gap-4"><strong>Spiller: </strong>{band.start} - {band.end}</p>
                            <p className="flex flex-wrap m-4 p-4 gap-4"><strong>Genre: </strong>{band.genre}</p>
                            </div>
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
                    <Image src={`/assets/img/${stage}Scene.webp`} alt={`This is ${stage}`} height={600} width={600} priority={false}/>
                </div>
            </article>
        </section>
    );
}

export default CampSchedule;
