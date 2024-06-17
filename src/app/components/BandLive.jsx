"use client";
import { useEffect, useState, Suspense } from "react";
import { rootUrl, getAllBands, getAllSchedule } from "../lib/apiCall";
import LiveArtistCard from "./LiveArtistCard";

export default function BandLive() {
    const [dataSchedule, setDataSchedule] = useState(null);
    const [dataBands, setDataBands] = useState(null);
   
    useEffect(() => {
        const getData = async () => {
            const resSchedule = await getAllSchedule();
            setDataSchedule(resSchedule);
            const resBands = await getAllBands();
            setDataBands(resBands);
        };
        getData();
    }, []);

    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const date = new Date();
    const dayName = days[date.getDay()];
    const currentHour = date.getHours();

	const getOneBandLive = (schedule) => {
		return schedule.find((act) => {
			const startHour = parseInt(act.start.split(":")[0]);
			const endHour = parseInt(act.end.split(":")[0]);
			return currentHour >= startHour && currentHour < endHour;
		});
	};

	const getBandInfo = (bandName) => {
		if (bandName === "break") {
			return { name: "break", logo: "/assets/img/DummyArtist.webp" };
		}
		return dataBands.find((band) => band.name === bandName);
	};

	const getBandLogo = (bandInfo) => {
		if (bandInfo.logo && bandInfo.logo.startsWith("https")) {
			return "/assets/img/DummyArtist.webp";
		} else if (bandInfo.name === "break") {
			return `/img/${bandInfo.logo}`;
		} else {
			return `${rootUrl}/logos/${bandInfo.logo}`;
		}
	};

	const getNextBandLink = (nextAct, schedule) => {
		if (nextAct) {
			if (nextAct.act === "break") {
				return "/camp";
			} else {
				return `/bands/${getBandInfo(nextAct.act).slug}`;
			}
		} else {
			return "/camp";
		}
	};

    if (!dataSchedule || !dataBands) {
        return <div>Vent venligst!</div>;
    } 
	return (
		<Suspense fallback={<div>Vent, vi kigger!</div>}>
				{Object.keys(dataSchedule).map((scene) => {
					const schedule = dataSchedule[scene][dayName];
					const currentAct = getOneBandLive(schedule);
					const bandName = currentAct.act;
					const bandInfo = getBandInfo(bandName);
					const bandLogo = getBandLogo(bandInfo);
					const nextAct = schedule[schedule.indexOf(currentAct) + 1];
					const nextActLink = getNextBandLink(nextAct, schedule);

					if (currentAct && bandName) {
						return (
							<LiveArtistCard
								key={scene}
								slug={bandName === "break" ? "/camp" : `/bands/${bandInfo.slug}`}
								scene={scene}
								artist={currentAct.act}
								time={currentAct.end}
								src={bandLogo}
								logoCredits={bandInfo.logoCredits}
								nextTime={nextAct ? nextAct.start : "Imorgen"}
								nextBand={nextAct ? nextAct.act : "Tjekk Camp!"}
								nextSlug={nextActLink}
                                />
						);
					}
					return null;
				})}
		</Suspense>
	);
}