import React from 'react'

// ikke i brug lige pt
export default function CampPlayingNow({schedule, stage}) {
  function filterByTime(thisStage) {
    const timeNow = new Date().getHours();

    let lastTime = timeNow - 1;
    let nowTime = timeNow;
    let nextTime = timeNow + 1;

  
      // if (bandStartHour >= now || bandStartHour >= now) {
      //   console.log("It's playing now!");
      // } else if (last >= bandStartHour || last <= bandEndHour) {
      //   console.log("It just started!");
      // } else if (next >= bandStartHour || next <= bandEndHour) {
      //   console.log("It's about to start!");
      // }

    // for (let bands in thisStage) {
    //   console.log("bands:", Object.keys(bands[0]))
    //   for (let things in bands) {
    //     console.table("things:", things)
    //   }
    // }
    // console.log(thisStage[4].start === timeNow);
    // filterByStage(schedule, stage).map(band => {
    //   band.map((band, i) => {
    //     last = band.start === timeNow[i - 2];
    //     now = band.start === timeNow[i];
    //     next = band.start === timeNow[i + 2];
    //   })
      
    // })
    // return [last, now, next];
    }

  const filterByStage = (schedule,stage) => {
    return schedule.filter(band => band.stage === stage)
  }
  const currentStage = filterByStage(schedule, stage);
  const playingNow = filterByTime(currentStage)

  // console.log(filterByStage(schedule, 'Alfheim'))

  return (
    <div>
        <h2>Spiller lige nu: TBA</h2>
        <div className='flex flex-col gap-4'>
          {/* {playingNow.map((band) => {
            return (
              <p key={band}>{band}</p>
            )
          })} */}
        </div>
    </div>
  )
}
