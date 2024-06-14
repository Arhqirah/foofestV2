import React, {Fragment} from "react";
import {getAllBands, getAllAvailableSpots, getFlatSchedule} from "./lib/apiCall";
import ArtistCardSmall from "./components/ArtistCardSmall";
import Link from "next/link";
import Section from "./components/Section";
import Divider from "./components/Divider";
import Image from "next/image";
import BandList from "./components/BandList";
import FancyCampCounter from "./components/FancyCampCounter";
import FancyCampCircle from "./components/FancyCampCircle";
import FAQList from "./components/FaqList";

export default async function LandingPage() {
  const bands = await getAllBands();
  const stageSpots = await getAllAvailableSpots();
  const schedule = await getFlatSchedule();

return (
  <div className="flex w-full flex-col place-items-center">
    <Section  title={null} customStyle="flex flex-col items-center justify-center mb-20">
      <Image src={"/assets/img/FooFestLogo.webp"} alt="FooFest 2024 logotype" width={900} height={600} priority={true} />
      <p>Til Valhalla og tilbage, festivalen der varer evigt</p>
      <Link className="bg-black-light border-orange border-2 hover:bg-black rounded-full w-fit py-2 px-6 text-xl m-2 mt-6 pt-4 pb-4" href="/form" prefetch={false}>KØB BILLETTER</Link>
    </Section>
  <Divider />
    <Section title="PROGRAM" customStyle="place-items-center gap-y-8 my-20">
      <BandList bands={bands}/>
      <div className="flex flex-col w-full h-fit gap-4">
        <h3 className="text-center text-orange my-4">Spiller lige nu</h3>
        <ul className="flex flex-wrap justify-center gap-2 align-top">
          {bands.slice(50,53).map(band => (
          <Fragment key={band.name}>
          <h4>{''}</h4>
          <ArtistCardSmall aBand={band} />
          </Fragment> 
          ))}
        </ul>
      </div>
    </Section>
    <Section title="FIND DIN CAMP" customStyle="place-items-center my-20">
      <FancyCampCircle href="/camp" />
      <ul className="flex flex-row justify-around flex-wrap gap-12">
      {stageSpots.map((stage,index) => <FancyCampCounter key={stage} pos={index} stage={stage}/>)}
      </ul>
    </Section>
    <FAQList />
  </div>
  );
}
