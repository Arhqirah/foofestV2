import CampBase from "../components/camp/CampBase";
import CampStages from "../components/camp/CampStages"
import Section from "../components/Section";
import { getFlatSchedule } from "../lib/apiCall";
import { mergeData } from "../util/filter";

async function Camp() {
    const flatSchedule = await getFlatSchedule();
    const mergedData = await mergeData();

    return (
        <Section title={null}>
            {/* <CampBase schedule={flatSchedule} bands={mergedData}></CampBase> */}
            <CampStages flatSchedule={flatSchedule} mergedData={mergedData} />
        </Section>
    );
}

export default Camp;
