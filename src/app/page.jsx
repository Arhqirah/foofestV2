import {getAllBands, getAllSchedule, getFlatSchedule, getAllAvailableSpots} from "./lib/apiCall";
import Link from "next/link";
import Section from "./components/Section";
import Divider from "./components/Divider";
import Image from "next/image";

export default async function LandingPage() {
  const data = await getAllBands();
  const stages = await getAllSchedule();
  const spots = await getAllAvailableSpots();
// console.log(stages)
const s = ['Midgaard', 'Vanaheim', 'Alfheim']
const c = ['text-green', 'text-gold', 'text-blue']


return (
  <div className="flex flex-col">
  <Section  title={null} customStyle="items-center justify-center">
    <Image src={"/assets/img/FooFestLogo.webp"} alt={"logo"} width={900} height={600}></Image>
  <p>Til Valhalla og tilbage, festivalen der varer evigt</p>
  </Section>
  <Divider></Divider>
      <Section title="PROGRAM" customStyle="place-items-center">
        <div className="flex flex-wrap flex-row h-fit w-fit gap-4">
          <ul className="flex items-center place-content-center flex-wrap gap-2">
            {data.map((band) => {
              return (
                <li className="flex" key={band.name}>
                  <Link className={`p-3 h-fit hover:underline hover:text-orange-light ${band.isBig ? 'text-lg' : 'text-md'}`} href={`/bands/${band.slug}`}>
                    {band.name}
                  </Link>
                </li>
            )
            })}
          </ul>
        </div>
      </Section>
      <Section title="FIND DIN CAMP" customStyle="place-items-center">
      <ul className="flex flex-row place-self-center flex-wrap gap-12">
      {spots.map((stage,index) => {
        return (
        <li className={`flex flex-col place-items-center gap-2`} key={stage.area}>
          <Image src={`/assets/icons/${s[index]}195.webp`} height={195} width={195} alt={stage.area}></Image>
          <h3 className={`${c[index]}`}>{stage.area}</h3>
          <p>{stage.available} pladser</p>
          <Link className="bg-orange w-fit py-2 px-4 rounded" href={`/camp`} prefetch={false}>Til {stage.area}</Link>
        </li>
        )
      })}
    </ul>
        {/* HER SKAL VI LAVE VORES FLOTTE TING! */}
      </Section>
      </div>
  );
}