import React from "react";
import CampBase from "../components/camp/CampBase";
import CampStages from "../components/camp/CampStages"
import CampSchedule from "../components/camp/CampSchedule";
import Section from "../components/Section";
import { getFlatSchedule } from "../lib/apiCall";
import { mergeData, getDay } from "../util/filter";


async function Camp() {
    const flatSchedule = await getFlatSchedule();
    const mergedData = await mergeData();

    return (
        <Section title={null} customStyle="flex flex-col place-items-center place-self-center gap-y-12">
            <CampBase bandsData={mergedData} scheduleData={flatSchedule} />
            {/* <Originalschedule mergedData={mergedData} flatSchedule={flatSchedule} /> */}
            
        </Section>
    );
}

export default Camp;
