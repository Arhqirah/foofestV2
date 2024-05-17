import {getAllAvailableSpots, getAllSchedule} from "../lib/apiCall"
import Section from "../components/Section";
import FancyNav from "../components/FancyNav";

async function Camp() {
// const spots = await getAllAvailableSpots();
// const stages = await getAllSchedule();
// console.log(stages)
const s = ['Midgaard', 'Vanaheim', 'Jotunheim']

  return (
    <>
    <FancyNav></FancyNav>
    <Section title={null}>
    <h2>Camp page</h2>
    </Section>
    <Section title="Tilgænglige">
      <Camp></Camp>
    </Section>
    </>
  )
}

export default Camp;
