import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
async function FancyCampCounter({stage, index}) {
  const scene = ['Midgaard', 'Vanaheim', 'Alfheim']
  const color = ['text-green', 'text-gold', 'text-blue']
  return (

    <li className={`flex flex-col place-items-center gap-2`} key={stage.area}>
    <Suspense fallback={<p>Loading....</p>}>
      <Image src={`/assets/icons/${scene[index]}195.webp`} height={195} width={195} alt={stage.area}></Image>
      <h3 className={`${color[index]}`}>{stage.area}</h3>
      <p>{stage.available} pladser</p>
      <Link className="bg-orange w-fit py-2 px-4 rounded" href={`/camp`} prefetch={false}>Til {stage.area}</Link>
      </Suspense>
    </li>
  )
}
export default FancyCampCounter;