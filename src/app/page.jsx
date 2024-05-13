import {getBands, getSchedule} from "./data/fetchFunctions";
import Link from "next/link";
import Section from "./components/Section";
import Divider from "./components/Divider";

export default async function LandingPage() {
  const bands = await getBands();
  const schedule = await getSchedule();
  const midgard = schedule.Midgard.tue;
return (
  <>
  <Section>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
    <h4>Heading4</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perferendis iusto ducimus totam fugit sint pariatur, debitis minus ipsum, molestias quas enim dolores magni eligendi impedit? Magnam exercitationem sint atque.</p>
  </Section>
  <Divider></Divider>
      <Section>
        <div className="flex flex-wrap flex-row h-fit w-fit gap-4">
        {bands.map((band) => {
          return (
            <Link key={band.name} className="bg-green w-fit py-2 px-4 rounded" href={`./camp/${band.slug}`} prefetch={false}>{band.name}</Link>
          )
        })}
        </div>
      </Section>
      <Section>
        {/*  */}
        {/* <h3>The bands</h3>
        {midgard.map((m) => {
          return (
            <>
              <h4>{m.act}</h4>
              <br/>
              <p>Start: {m.start}  || End:{m.end}</p>
            </>
        )
        })} */}
        <Link className="bg-orange w-fit py-2 px-4 rounded" href="./camp" prefetch={false}>To camp</Link>
      </Section>
      </>
  );
}
