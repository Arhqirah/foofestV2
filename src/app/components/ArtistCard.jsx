// components/ArtistCard.js
import Image from 'next/image';
import Link from 'next/link';

const ArtistCard = ({ image, name, genre, performanceDate, description }) => {
  return (
    <div className="max-w-xs mx-auto border-4 border-blue-darkest hover:shadow-orange shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gold-light">{name}</h2>
        <p className="text-white-dark">{genre}</p>
        <p className="text-grey-dark text-sl">{performanceDate}</p>
        <p className="text-white-dark mt-2 text-sm">{description}</p>
        <button className="mt-4 py-2 px-4 bg-orange text-white rounded hover:bg-orange-darker">Læs mere om Artisten</button>
      </div>
    </div>
  );
};

export default ArtistCard;
