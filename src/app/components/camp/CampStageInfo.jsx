import React from 'react'
import Image from 'next/image';
const stageInfo = [
    {name: 'Midgard', theme: 'Hård og hårdere', info: 'Ikke rigtigt lorem ipsum men vi finder på noget.'},
    {name: 'Vanaheim', theme: 'Mere mellem!', info: 'Ikke rigtigt lorem ipsum men vi finder på noget.'},
    {name: 'Alfheim', theme: 'Blød og blødere', info: 'Ikke rigtigt lorem ipsum men vi finder på noget.'}
]
export default function CampStageInfo({stages, themeColor}) {
    const currentStage = stageInfo.find(s => s.name === stages);
  return (
    <article className="flex flex-col gap-12">
    <div>
        <h3>Det skal du vide om <strong className={`text-${themeColor[stages]}`}>{currentStage.name}</strong></h3>
        <h4>TEMA: {currentStage.theme}</h4>
    </div>
    <div className="grid gap-6 sm:grid-cols-2">
        <p>{currentStage.info}</p>
        <Image src={`/assets/img/${stages}Scene.webp`} alt={`This is ${currentStage.name}`} height={600} width={600} priority={false}/>
    </div>
</article>
  )
}