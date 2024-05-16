import { getBands, getSchedule } from "../data/fetchFunctions"
import Section from "../components/Section";
import Link from "next/link"
import ArtistCard from '@/app/components/ArtistCard';

const artists = [
  {
    image: '/assets/img/DummyArtist.webp',
    name: 'DummyArtist',
    genre: 'Indie Rock',
    performanceDate: 'June 12, 2024, 8:00 PM',
    description: 'Award-winning indie rock sensation known for electrifying performances.'
  

  },
  {
    image: '/assets/img/DummyArtist.webp',
    name: 'DummyArtist',
    genre: 'Indie Rock',
    performanceDate: 'June 12, 2024, 8:00 PM',
    description: 'Award-winning indie rock sensation known for electrifying performances.'
  

  },
  {
    image: '/assets/img/DummyArtist.webp',
    name: 'DummyArtist',
    genre: 'Indie Rock',
    performanceDate: 'June 12, 2024, 8:00 PM',
    description: 'Award-winning indie rock sensation known for electrifying performances.'
  

  },
  {
    image: '/assets/img/DummyArtist.webp',
    name: 'DummyArtist',
    genre: 'Indie Rock',
    performanceDate: 'June 12, 2024, 8:00 PM',
    description: 'Award-winning indie rock sensation known for electrifying performances.'
  

  },
];
async function Camp(params) {
  const {slug} = params
  const camp = await getSchedule();
  return (
    <>
    <Section>
    <h2>Camp page</h2>
    <Link prefetch={false} href={`./#`}>Check a band</Link>
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-4">
      {artists.map((artist, index) => (
        <ArtistCard
          key={index}
          image={artist.image}
          name={artist.name}
          genre={artist.genre}
          performanceDate={artist.performanceDate}
          description={artist.description}
          
        />
      ))}
    </div>
    </Section>
    </>
  )
}

export default Camp