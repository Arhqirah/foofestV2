import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
export default async function FancyCampCounter({stage, pos}) {
  const scene = ['Midgaard', 'Vanaheim', 'Alfheim']
  const color = ['text-green', 'text-gold', 'text-blue']
  return (
    <li className={`flex flex-col place-items-center gap-2`} key={stage.area}>
        <figure className="justify-center">
          <Image src={`/assets/icons/${scene[pos]}195.webp`} height={195} width={195} alt={stage.area}></Image>
          <figcaption className="justify-center">
            <h3 className={`text-center ${color[pos]}`}>{stage.area}</h3>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-2 items-center">
        <p className="text-center">{stage.available} <span className="text-sm">ledige pladser</span></p>
        {stage.available > 0 ?  
      <Link className="bg-orange w-fit py-2 px-4 rounded" href={`/camp`} prefetch={false}>Til {stage.area}</Link>
      :   
      <Button disabled variant="grey">{stage.area} er fuld!</Button>
      }
        </div>
    </li>
  )
}