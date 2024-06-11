"use client";
import React, { useEffect, useState } from 'react'
import { getDay } from '@/app/util/filter';
import FAQList from '../FaqList';
import CampSchedule from './CampSchedule';
import CampStageInfo from './CampStageInfo';
import FancyCampCircle from '../FancyCampCircle';

export default function CampBase({bandsData, scheduleData}) {

  const bands = bandsData;
  const schedule = scheduleData;

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
  const handleDay = (newDay, newTheme) => {
    const setday = getDay(newDay);
    setDay(setday.short);
    setTheme(newTheme)
  };
  const handleStage = (newStage, newTheme) => {
    setStage(newStage);
    setTheme(newTheme)
  }
  const themeColor = {Midgard: 'green', Vanaheim: 'gold', Alfheim: 'blue'};

  return (
    <>
    <FancyCampCircle stageSelect={(aStage, aTheme) => handleStage(aStage, aTheme)}/>
    <CampSchedule bands={bands} stages={stage} day={day} theme={theme} themeColor={themeColor} onDayChange={(newDay, aTheme) => handleDay(newDay, aTheme)} />
    <CampStageInfo stages={stage} themeColor={themeColor}/>
    <FAQList />
    </>
  )
}