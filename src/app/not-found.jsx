import Section from "./components/Section";
import Image from "next/image";
function NotFound() {
  return (
    <Section  title={null} customStyle="mx-auto items-center justify-center">
    <Image src={"/assets/img/FooFestLogo.webp"} alt={"logo"} width={900} height={600}></Image>
    <h2>ERROR 404</h2>
    <p>Siden kunne ikke findes, har du kigget i Valhalla?</p>
    </Section>
  )
}

export default NotFound;