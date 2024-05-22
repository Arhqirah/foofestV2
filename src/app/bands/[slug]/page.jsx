import {rootUrl, unsplashUrl, getBandsBySlug } from "@/app/lib/apiCall";
import Image from "next/image";
import Section from "@/app/components/Section";
import Divider from "@/app/components/Divider";

async function bandPage({params}) {
  const { slug } = params;
  const data = await getBandsBySlug(slug);
  const bigSizes = ["1440", "1024"];
  const smallSizes = ["720", "576"];
  return (
    <>
      <Section title={null} customStyle={`!m-0 !p-0 w-full max-w-[1600px] place-self-center place-items-center`}>
        <figure className="flex z-0 relative h-[50dvh] w-full max-h-[1/2]">
          <div className="w-full h-full aspect-square xsm:aspect-video">
              {data.logo.startsWith("http") 
              ? (<Image src={`${data.logo}${bigSizes[1]}x${bigSizes[0]}`} fill={true} alt={data.name} priority={true}></Image>)
              : (<Image src={`${rootUrl}/logos/${data.logo}`} fill={true} alt={data.logoCredits} priority={true}></Image>)
              } 
          </div>
          <div className="absolute bottom-2 text-center w-full z-1">
          <h2 className="text-orange">{data.name}</h2>
          </div> 
        </figure>
      </Section>

      <Divider></Divider>

      <Section title={null} customStyle={`m-0 p-0 w-full max-w-[1600px] place-self-center place-items-center`}>
        <article className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="w-full object-fill">
              {data.logo.startsWith("http") ?  
                (<Image src={`${data.logo}${smallSizes[0]}x${smallSizes[1]}`} height={800} width={800} alt={data.name} priority={false}></Image>)
                :
                (<Image src={`${rootUrl}/logos/${data.logo}`} height={800} width={800} alt={data.logoCredits} priority={false}></Image>)
              } 
            </figure>
            <div className="grid h-fit gap-6">
              <div>
                <h3>Genre</h3>
                <h4 className="align-center">{data.genre}</h4>
              </div>
              <div>
                <h3>Members</h3>
                <ul className="flex flex-wrap gap-4">
                  {data.members.map((m) => {
                    return (<li key={m}>{m}</li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p>{data.bio}</p>
          </div>
          <div></div>
        </article>
      </Section>
    </>
  )
}

export default bandPage;