import { Suspense } from "react";
import CampStages from "../components/CampStages";
import { getFlatSchedule } from "../lib/apiCall";
import { mergeData } from "../util/filter";

async function Camp() {
    const flatSchedule = await getFlatSchedule();
    const mergedData = await mergeData();

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <CampStages flatSchedule={flatSchedule} mergedData={mergedData} />
        </Suspense>
    );
}

export default Camp;
