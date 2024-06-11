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
  const smallSizes = 800;
  return (
    <>
      <Section title={null} customStyle={`!m-0 !p-0 w-full !max-w-[1920px] place-self-center -mb-48 -z-1`}>
        <div className="-mt-12 place-self-center w-full h-[400px] bg-[url('/assets/img/DummyHeader.webp')] object-cover bg-cover bg-top bg-no-repeat md:bg-center ">
        <h2 className="text-center">{bandSlug.name}</h2>
        </div>
      </Section>
      <Divider customStyle="z-10 -mt-4" />
      <Section title={null} customStyle={`m-0 p-0 w-full max-w-[1600px] place-self-center place-items-center`}>
        <article className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <figure className={`w-full h-full border-2 border-${themeColor[filteredbandSlug.stage] || "green"}`}>
              {bandSlug.logo.startsWith("http") ?  
                (<Image className="h-full w-full object-cover object-center"  src={`${bandSlug.logo}${smallSizes}x${smallSizes}`} height={600} width={600} alt={`This is ${bandSlug.name}`} priority={false}></Image>)
                :
                (<Image className="h-full w-full object-cover object-center" src={`${rootUrl}/logos/${bandSlug.logo}`} height={600} width={600} alt={`${bandSlug.logoCredits ? bandSlug.logoCredits : bandSlug.name}`} priority={false}></Image>)
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
          </div>
          <div>
            <p>{bandSlug.bio}</p>
          </div>
          <Link href={'../camp'} className="bg-orange px-4 w-fit rounded text-lg">Tilbage til camp</Link>
        </article>
      </Section>
    </>
  )
}

export default bandPage;