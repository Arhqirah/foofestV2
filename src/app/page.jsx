import {getAllBands, getAllAvailableSpots} from "./lib/apiCall";
import ArtistCardSmall from "./components/ArtistCardSmall";
import Link from "next/link";
import Section from "./components/Section";
import Divider from "./components/Divider";
import Image from "next/image";
import BandList from "./components/BandList";
import ClickableCircle from "./components/ClickableCircle";
import FancyCampCounter from "./components/FancyCampCounter";

export default async function LandingPage() {
  const data = await getAllBands();
  const stageSpots = await getAllAvailableSpots();


return (
  <div className="flex w-full flex-col  place-items-center">
  <Section  title={null} customStyle="flex flex-col items-center justify-center">
    <Image src={"/assets/img/FooFestLogo.webp"} alt="FooFest 2024 logotype" width={900} height={600} priority={true}></Image>
    <p>Til Valhalla og tilbage, festivalen der varer evigt</p>
    <Link className="bg-black-light border-orange border-2 hover:bg-black rounded-full w-fit py-2 px-4 text-xl m-2 mt-6 pt-4 pb-4" href="/form" prefetch={false}>KØB BILLETTER</Link>
  </Section>
  <Divider></Divider>
      <Section title="PROGRAM" customStyle="place-items-center">
        <BandList data={data}/>
        <div className="flex flex-col justify-items-center h-fit w-fit gap-4 place-content-center">
              <h2 className="text-center text-orange my-8">Spiller lige nu</h2>
          <ul className="flex flex-wrap place-content-center  gap-2 align-top">
            {/* skal bruge mergeData i filter.jsx for at få frem band der spiller lige nu på hvert scene (filtreret, en live-feed helt enkelt. der skal vises break også hvis det nu er såden)  */}
            {/* måske lave til flere sider som pagination? */}
            {data.slice(50,53).map((band, index) => <ArtistCardSmall key={index} aBand={band} pos={index}></ArtistCardSmall>)}
          </ul>
          </div>
      </Section>
      <Section title="FIND DIN CAMP" customStyle="place-items-center">
      {/* <ClickableCircle></ClickableCircle> */}

      <ul className="flex flex-row justify-around flex-wrap gap-12">
        {stageSpots.map((stage,index) => <FancyCampCounter key={index} stage={stage} index={index}/>)}
      </ul>
      </Section>
      </div>
  );
}
