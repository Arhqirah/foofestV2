import Section from "./components/Section";
import Image from "next/image";
import "react-credit-cards-2";


function Loading() {
  return (
    <div className="flex flex-col">
       <Section  title={null} customStyle="items-center justify-center">
    <Image src={"/assets/img/FooFestLogo.webp"} alt={"logo"} width={900} height={600}></Image>
    <h2>Vent venligst vi loader din side</h2>
  </Section>
    </div>
  )
}

export default Loading;