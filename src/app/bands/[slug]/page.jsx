import {rootUrl, getBandsBySlug, getFlatSchedule} from "@/app/lib/apiCall";
import Link from "next/link";
import Image from "next/image";
import Section from "@/app/components/Section";
import Divider from "@/app/components/Divider";

async function bandPage({params}) {
  const { slug } = params;
  const bandSlug = await getBandsBySlug(slug);
  const schedule = await getFlatSchedule();
  const filteredbandSlug = schedule.filter((s) => s.act === bandSlug.name);
  const themeColor = {Midgard: 'green', Vanaheim: 'gold', Alfheim: 'blue'};
  const smallSizes = ["600", "600"];
  return (
    <>
      <Section title={null} customStyle={`!m-0 !p-0 w-full max-w-[1600px] place-self-center place-items-center -mb-48 -z-1`}>
        <figure className="flex relative w-full">
          <div className="w-full h-full aspect-video">
{/*         Hvis vi vil bruge noget andet som header i stede for dummy?    
              {bandSlug.logo.startsWith("http") 
              ? (<Image src={`${bandSlug.logo}${bigSizes[1]}x${bigSizes[0]}`} fill={true} alt={bandSlug.name} priority={true}></Image>)
              : (<Image src={`${rootUrl}/logos/${bandSlug.logo}`} fill={true} alt={bandSlug.logoCredits} priority={true}></Image>)
              }  */}
              <Image src="/assets/img/DummyHeader.webp" alt="Vores flotte dummy!" height={900} width={1440} priority={true}/>
          </div>
          <div className="absolute bottom-2 text-center w-full">
          <h2 className="text-orange">{bandSlug.name}</h2>
          </div> 
        </figure>
      </Section>

      <Divider customStyle="z-100"></Divider>

      <Section title={null} customStyle={`m-0 p-0 w-full max-w-[1600px] place-self-center place-items-center`}>
        <article className="flex flex-col gap-6">
          <div className="flex flex-col flex-wrap">
            <div>
              <h3>Spiller på: </h3>
                <ul className="align-center flex flex-row gap-2">{filteredbandSlug.map((band) => {
                  return (
                    <li key={band.day} className={`text-${themeColor[band.stage]} border p-2`}>
                      <h4>{band.stage}</h4>
                      <h5>{band.start} - {band.end}</h5>
                    </li>
                    )
                  })}
                </ul>
            </div>
            
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className={`w-full object-fill border-2 border-${themeColor[filteredbandSlug[0].stage]}`}>
              {bandSlug.logo.startsWith("http") ?  
                (<Image src={`${bandSlug.logo}${smallSizes[0]}x${smallSizes[1]}`} height={800} width={800} alt={`This is ${bandSlug.name}`} priority={false}></Image>)
                :
                (<Image src={`${rootUrl}/logos/${bandSlug.logo}`} height={800} width={800} alt={`${bandSlug.logoCredits ? bandSlug.logoCredits : bandSlug.name}`} priority={false}></Image>)
              } 
            </figure>
            <div className="grid h-fit gap-6">
              <div className="flex flex-row flex-wrap gap-x-10">

              <div>
                <h3>Genre</h3>
                <h4 className="align-center">{bandSlug.genre}</h4>
              </div>
              </div>
              <div>
                <h3>Members</h3>
                <ul className="flex flex-wrap gap-4">
                  {bandSlug.members.map((m) => {
                    return (<li key={m}>{m}</li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p>{bandSlug.bio}</p>
          </div>
          <Link href={'../camp'} className="bg-orange px-4 m-4 w-fit rounded text-lg">Tilbage til camp</Link>
        </article>
      </Section>
    </>
  )
}

export default bandPage;