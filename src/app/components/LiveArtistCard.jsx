import Link from "next/link";
import Image from "next/image";

export default function LiveArtistCard({slug,scene,artist,time,src,nextTime,nextBand,nextSlug}) {
	return (
		<li className="w-[280px] md:w-[320px]">
			<Link href={`${slug}`}>
				<article className="h-[48] w-64 md:w-80 md:h-56 grid grid-rows-2">
					<p className="mx-6 mt-4 text-gray-300 col-start-1 row-start-1 z-20">
						{scene}
					</p>
					<div className="mx-6 mb-4 col-start-1 row-start-2 z-20 self-end">
						<h3 className="capitalize text-black hover:text-white transition text-stroke-1 hover:text-stroke-0">{artist}</h3>
						<p className="">Til {time}</p>
					</div>
					<Image
						className="col-start-1 col-end-2 row-start-1 row-end-3 object-cover z-0 brightness-50 rounded-lg border-2 border-gray-dark h-full w-full"
						width={320}
						height={320}
						src={src}
						alt={`${artist}`}
					/>
				</article>
			</Link>
			<div className="grid">
				<Link href={nextSlug}>
					<p className=" text-sm border-2 border-grey-dark w-fit py-2 px-3 mt-2 rounded-lg">
						&#8594; {nextTime}{" "}
						<span className="capitalize">{nextBand}</span>
					</p>
				</Link>
			</div>
		</li>
	);
}