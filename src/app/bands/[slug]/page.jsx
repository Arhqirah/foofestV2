import { getBandsBySlug, getFlatSchedule } from "@/app/lib/apiCall";
import ArtistSlug from "@/app/components/ArtistSlug";
import Section from "@/app/components/Section";
import Divider from "@/app/components/Divider";

export default async function bandPage({params}) {
  const bandNumber = Math.floor(Math.random() * 12 + 1);
  const { slug } = params;
  const bandSlug = await getBandsBySlug(slug);
  const schedule = await getFlatSchedule();
  const filteredbandSlug = schedule.filter((s) => s.act === bandSlug.name);
  const themeColor = {Midgard: 'green', Vanaheim: 'gold', Alfheim: 'blue'};
  const smallSizes = 800;
  return (
    <>
      <Section title={null} customStyle={`!m-0 !p-0 w-full !max-w-[1920px] place-self-center -mb-48 -z-1`}>
        <div className="flex border-orange border-t-4 justify-center items-end -mt-12 w-full h-[300px] bg-[url('/assets/img/DummyHeaderV2.webp')] object-cover bg-cover bg-center bg-no-repeat">
        <h2 className="bg-clip-text bg-black stroke-black stroke-1 text-3xl font-extrabold px-2">{bandSlug.name}</h2>
        </div>
      </Section>
      <Divider customStyle="z-10 -mt-4" />
      <Section title={null} customStyle={`w-full p-4 w-full max-w-3/4 mx-auto lg:w-3/4 md:p-2`}>
        <ArtistSlug bandSlug={bandSlug} filteredbandSlug={filteredbandSlug} themeColor={themeColor} smallSizes={smallSizes} bandNumber={bandNumber}/>
      </Section>
    </>
  )
}