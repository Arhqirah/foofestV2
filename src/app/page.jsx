import {getBands, getSchedule} from "./data/fetchFunctions";
import Link from "next/link";
import Section from "./components/Section";
import Divider from "./components/Divider";
import Image from "next/image";
import"react-credit-cards-2"
import { Fragment } from "react";

export default async function LandingPage() {
  const bands = await getBands();
  const schedule = await getSchedule();
  const midgard = schedule.Midgard.tue;
return (
  <div className="flex flex-col">
  <Section  title={null} customStyle="items-center justify-center">
    <Image src={"/assets/img/FooFestLogo.webp"} alt={"logo"} width={900} height={600}></Image>
  <p>Til Valhalla og tilbage, festivalen der varer evigt</p>
  <Link className="bg-black-light border-orange border-2 hover:bg-black rounded-full w-fit py-2 px-4 text-xl m-2 mt-6 pt-4 pb-4" href="./form" prefetch={false}>KØB BILLETTER</Link>
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
      </div>
  );
}
