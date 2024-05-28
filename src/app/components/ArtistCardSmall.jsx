import { rootUrl } from "../lib/apiCall";
import { metalQuery } from "../util/metalQuery";
import Image from "next/image";
import Link from "next/link";

function ArtistCardSmall({aBand, pos}) {
    const index = pos;
    const band = aBand;
    const metal = metalQuery();
    const smallSize = 600;
    const stage = 'Midgard';

    const themeColor = {
        Midgard: 'green',
        Vanaheim: 'gold',
        Alfheim: 'blue',
    };

  return (
    <div className={`grid grid-cols-[minmax(150px,300px)] grid-rows-[minmax(100px,200px),auto] border-4 border-${themeColor[stage]}-dark hover:shadow-orange shadow-lg rounded-lg overflow-hidden text-center`}>
    <figure className="flex relative object-contain">
        {band.logo.startsWith("http") 
            ?  
            (<Image className="h-auto object-cover" src={`${band.logo}${smallSize}x${smallSize}/?${metal}?${index}`} height={300} width={300} alt={`Picture of ${band.name}`} priority={false} style={{height: 'cover'}} />)
            :
            (<Image className="h-auto object-cover" src={`${rootUrl}/logos/${band.logo}`} height={300} width={300} alt={`Credits: ${band.logoCredits}`} priority={false} style={{height: 'cover'}}/>)
        }
        <figcaption className="absolute bottom-0 w-full text-orange text-lg">
            <Link href={`/bands/${band.slug}`}>
                {band.name}
            </Link>
        </figcaption>
    </figure>
    <div className="flex flex-col flex-wrap justify-items-center">
        {band.start ? <p className="flex flex-wrap m-4 p-4 gap-4"><strong>Spiller: </strong>{band.start} - {band.end}</p> : null}
        <p className="flex justify-left mx-4 gap-4 text-sm"><strong>Genre: </strong>{band.genre ? band.genre : null}</p>
    </div>
</div>
  )
}

export default ArtistCardSmall;