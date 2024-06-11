import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
async function FancyCampCounter({stage, pos}) {
  const scene = ['Midgaard', 'Vanaheim', 'Alfheim']
  const color = ['text-green', 'text-gold', 'text-blue']
  return (

    <li className={`flex flex-col place-items-center gap-2`} key={stage.area}>
      <Suspense fallback={<p>Loading....</p>}>
        <figure className="justify-center">
          <Image src={`/assets/icons/${scene[pos]}195.webp`} height={195} width={195} alt={stage.area}></Image>
          <figcaption className="justify-center">
            <h3 className={`text-center ${color[pos]}`}>{stage.area}</h3>
          </figcaption>
        </figure>
        <p>{stage.available} pladser</p>
        <Link className="bg-orange w-fit py-2 px-4 rounded" href={`/camp`} prefetch={false}>Til {stage.area}</Link>
      </Suspense>
    </li>
  )
}
export default FancyCampCounter;