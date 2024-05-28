"use client";
import React, { useState } from 'react'
import { getDay } from '@/app/util/filter';
import { metalQuery } from '@/app/util/metalQuery';
import ClickableCircle from '../ClickableCircle';
import FAQList from '../FaqList';
import CampSchedule from './CampSchedule';
import CampStageInfo from './CampStageInfo';
// skal modtage dataen og banke ud states m.m der kan sendes videre
// implementere noget der nævner hvor mange pladser der er tilbage?

function CampBase({bandsData, scheduleData}) {

  const bands = bandsData;
  const schedule = scheduleData;
  // const masterData = handleData(mergedData);

  const [stage, setStage] = useState('Midgard');
  const [day, setDay] = useState('mon');
  const [theme, setTheme] = useState('green');

  // handleSingleStage('navn på scene'), med breaks/cancellations - for at få fram en spilliste
  const handleSingleStage = (singleStage) => {
    const aStage = Object.keys(bands);
    setStage(aStage[singleStage]);
  }
// handleStageFilter('navn på scene') med filter over schedule hvis man ikke giddder breaks!
  const handleStageFilter = (filterOnStage) => {
    const newStage = schedule.filter(clickedStage => clickedStage.stage === filterOnStage && clickedStage.act !== 'break')
    setStage(newStage);
  }

  const handleDay = (newDay) => {
    const setday = getDay(newDay);
    setDay(setday.short);
  };
  const handleStage = (stage) => {
    setStage(stage);
  }

  // const handleDayFilter = (filterOnDay) => {
  //   const newDay = schedule.filter(clickedDay => clickedDay.day === filterOnDay && clickedStage.act !== 'break');
  // }
  const themeColor = {Midgard: 'green', Vanaheim: 'gold', Alfheim: 'blue'};

  return (
    <>
      {/* udskifte ClickableCircle når denne virker!! <FancyCampCircle onStageSelect={(newStage) => handleSingleStage(newStage)}></FancyCampCircle> */}
      <ClickableCircle></ClickableCircle>
      {/* fikse på noget tilfælde? <CampPlayingNow schedule={schedule} stage={stage}/> */}
      {/* backup? <CampDayButtons day={day} onClick={(day) => handleDay(day)}/> */}
      {/* backup? <CampStages stages={festivalStages} handleStage={(stage) => handleStage(stage)} theme={themeColor}></CampStages> */}
      <CampSchedule bands={bands} stage={stage} day={day} theme={theme} onSceneChange={(stage) => handleStage(stage)} onDayChange={(newDay) => handleDay(newDay)} metal={metalQuery}/>
      <CampStageInfo stages={stage} themeColor={themeColor}/>
      <FAQList></FAQList>
    </>
  )
}

export default CampBase;