import Section from "./components/Section";
import Image from "next/image";

export default function Loading() {
  return (
    <Section title={null} customStyle="mx-auto items-center justify-center h-[100dvh]">
      <Image src={"/assets/img/FooFestLogo.webp"} alt="logo" width={900} height={600}></Image>
      <h2>Vent venligst vi loader din side</h2>
    </Section>
  )
}