import { rootUrl } from "../lib/apiCall";
import { metalQuery } from "../util/metalQuery";
import Image from "next/image";
import Link from "next/link";

function ArtistCard({aBand, pos}) {
    const index = pos;
    const band = aBand;
    const metal = metalQuery();
    const smallSize = 400;

    return (
        <article className={`grid grid-cols-1 hover:shadow-orange shadow-lg rounded-lg`}>
            <figure className="flex relative object-contain h-[min(400px,600px)] w-full">
                {band.logo.startsWith("http") 
                    ?  
                    (<Image src={`${band.logo}${smallSize}x${smallSize}/?${metal}?${index}`} height={600} width={600} alt={`Picture of ${band.act}`} priority={false} />)
                    :
                    (<Image src={`${rootUrl}/logos/${band.logo}`} height={600} width={600} alt={`${band.logoCredits ? band.logoCredits : band.name}`} priority={false}/>)
                }
                <figcaption >
                </figcaption>
            </figure>
            <div className="flex flex-col flex-wrap">
                    <Link className="w-full h-fit text-center text-orange text-lg " href={`/bands/${band.slug}`} prefetch={false}>
                        {band.act}
                    </Link>
                {band.start ? <p className="flex flex-wrap m-2 p-2 gap-4"><strong>Spiller: </strong>{band.start} - {band.end}</p> : null}
                <p className="flex flex-wrap m-2 p-2 gap-4"><strong>Genre: </strong>{band.genre ? band.genre : null}</p>
            </div>
        </article>
    )
}

export default ArtistCard