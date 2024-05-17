import {getAllBands, getAllSchedule, getFlatSchedule, getAllAvailableSpots} from "./lib/apiCall";
import Link from "next/link";
import Section from "./components/Section";
import Divider from "./components/Divider";
import Image from "next/image";
import "react-credit-cards-2";
import { Fragment } from "react";
import ClickableCircle from "./components/ClickableCircle";
import FancyCampCounter from "./components/FancyCampCounter";

export default async function LandingPage() {
  const data = await getAllBands();
  const stages = await getAllSchedule();
  const stageSpots = await getAllAvailableSpots();

return (
  <div className="flex flex-col">
  <Section  title={null} customStyle="items-center justify-center">
    <Image src={"/assets/img/FooFestLogo.webp"} alt={"logo"} width={900} height={600}></Image>
    <p>Til Valhalla og tilbage, festivalen der varer evigt</p>
    <Link className="bg-black-light border-orange border-2 hover:bg-black rounded-full w-fit py-2 px-4 text-xl m-2 mt-6 pt-4 pb-4" href="./form" prefetch={false}>KØB BILLETTER</Link>
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
      <ClickableCircle></ClickableCircle>

      <ul className="flex flex-row place-self-center flex-wrap gap-12">
        {stageSpots.map((stage,index) => {
          return (
            <FancyCampCounter key={index} stage={stage} index={index}/>
          )
         })}
      </ul>
      </Section>
      </div>
  );
}