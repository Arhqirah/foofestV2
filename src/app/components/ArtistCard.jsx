import { rootUrl } from "../lib/apiCall";
import { metalQuery } from "../util/metalQuery";
import Image from "next/image";
import Link from "next/link";

function ArtistCard({aBand, pos}) {
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
    <article className={`grid grid-cols-[minmax(300px,600px)] border-4 border-${themeColor[stage]}-dark hover:shadow-orange shadow-lg rounded-lg`}>
        <figure className="flex relative object-contain">
            {band.logo.startsWith("http") 
                ?  
                (<Image className="h-auto object-cover" src={`${band.logo}${smallSize}x${smallSize}/?${metal}?${index}`} height={600} width={600} alt={`Picture of ${band.name}`} priority={false} style={{height: 'auto'}} />)
                :
                (<Image className="h-auto object-cover" src={`${rootUrl}/logos/${band.logo}`} height={600} width={600} alt={`Credits: ${band.logoCredits}`} priority={false} style={{height: 'auto'}}/>)
            }
            <figcaption className="absolute bottom-0 w-full h-fit text-center text-orange text-lg ">
                <Link href={`/bands/${band.slug}`} prefetch={false}>
                    {band.act}
                </Link>
            </figcaption>
        </figure>
        <div className="flex flex-col flex-wrap">
            {band.start ? <p className="flex flex-wrap m-4 p-4 gap-4"><strong>Spiller: </strong>{band.start} - {band.end}</p> : null}
            <p className="flex flex-wrap m-4 p-4 gap-4"><strong>Genre: </strong>{band.genre ? band.genre : null}</p>
        </div>
    </article>
  )
}

export default ArtistCard