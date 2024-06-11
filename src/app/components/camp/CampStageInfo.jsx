"use client";
import React from 'react'
import Image from 'next/image';
const stageInfo = [
    {name: 'Midgard', 
      theme: 'Hård og hårdere', 
      info: 'Træd ind i Midgard, hvor den nordiske mytologi møder moderne musik i en eksplosiv fusion. Under temaet "Hård og hårdere" byder vi på en række optrædener, der vil teste grænserne for intensitet og rå kraft. Her vil metal, rock og andre tunge genrer dominere scenen, og publikum kan forvente et line-up, der er lige så frygtløst som det er fængslende. Midgard-scenen er skabt til dem, der tør tage imod musikkens rå kraft med åbne arme, og som søger en musikalsk oplevelse, der er både udfordrende og berusende. Gør dig klar til en nat i Midgard, hvor kun de stærkeste toner overlever.'},
    {name: 'Vanaheim', 
      theme: 'Mere mellem!', 
      info: 'Træd ind i Vanaheim, et sted hvor de fine nuancer og subtile skønheder i musikken får lov at blomstre. Med temaet "Mere mellem" præsenterer Vanaheim en række kunstnere, der bevæger sig elegant mellem genrer og skaber nye, spændende lydlandskaber. Her vil du opleve alt fra indie-folk til eksperimentel elektronisk musik, hvor hver optræden er en unik oplevelse, der binder tråde mellem det velkendte og det ukendte. Vanaheim er scenen for dem, der søger dybde og diversitet i musikken, og som ønsker at lade sig forføre af lyde, der ligger lige mellem det umiddelbare og det uventede. Lad dig opsluge af Vanaheims betagende verden, hvor hver sang er en ny opdagelse.'},
    {name: 'Alfheim', 
      theme: 'Blød og blødere', 
      info: 'Forestil dig et sted, hvor musikkens blideste nuancer skaber en verden af ro og velvære. Det er Alfheim, en scene dedikeret til temaet "Blød og blødere". Her kan du fordybe dig i en musikalsk atmosfære, der emmer af harmoni og afslapning. Oplev kunstnere, der leverer alt fra akustiske folkemelodier til sfærisk pop, designet til at berolige sindet og løfte sjælen. Alfheim er det ideelle sted at finde indre ro midt i festivalens mange indtryk. Kom og oplev en lydrejse, hvor hver tone og hvert strøg på guitaren skaber en følelse af inderlig fred og skønhed.'}
]
export default function CampStageInfo({stages, themeColor}) {
    const currentStage = stageInfo.find(s => s.name === stages);
    return (
      <article id="campInfo" className="flex flex-col gap-12 w-full p-8 lg:p-0 lg:w-3/4">
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