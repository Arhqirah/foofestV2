"use client";
import React, { useState } from 'react'
import ClickableCircle from '../ClickableCircle';
import CampStages from '../camp/CampStages'
import FAQList from '../FaqList';
// skal modtage dataen og banke ud states m.m der kan sendes videre
// implementere noget der nævner hvor mange pladser der er tilbage?
function CampComponent({schedule, bands}) {

  const [stage, setStage] = useState('Midgard');
  const [day, setDay] = useState('mon');
  const [theme, setTheme] = useState('green');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const festivalStages = ['Midgard', 'Vanaheim', 'Alfheim']
  const themeColor = {
      Midgard: 'green',
      Vanaheim: 'gold',
      Alfheim: 'blue',
  };

  return (
    <div>
      <h3>CampComponent</h3>
      <ClickableCircle stage={stage} setStage={setStage}></ClickableCircle>
      <h2>{stage}</h2>
      <CampStages stage={stage} setStage={setStage}></CampStages>
      <CampSchedule></CampSchedule>
      <FaqList></FaqList>
      </div>
  )
}

export default CampComponent