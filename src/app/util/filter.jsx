import { getAllBands, getAllSchedule } from "../lib/apiCall";

// send ind en string og få ud den modsatte også!
export function getDay(chosenDay) {
  const week = {
      'Monday': 'mon',
      'Tuesday': 'tue',
      'Wednesday': 'wed',
      'Thursday': 'thu',
      'Friday': 'fri',
      'Saturday': 'sat',
      'Sunday': 'sun'
  };
  const weekReverse = Object.fromEntries(
      Object.entries(week).map(([full, abbr]) => [abbr, full])
  );
  return {short: week[chosenDay], full: weekReverse[chosenDay], weekShort: week, weekLong: weekReverse};
}

// filtrere væk breaks og cancellations
// send nogen data (exempelvis getFlatSchedule)
export function filterAct(data) {
    const bands = [];
      data.map((band) => {
        if (band.act !== 'break' || band.act !== 'cancelled') {
          bands.push(band);
        } else console.log("no push ", this)
      });
      return bands;
  };

  // slår sammen en ny array til hver i et objekt {stages: [], dayList: []}
  function handleData(data) {
    const stages = Object.keys(data);
    const daySet = new Set();
    for (let stage in data) {
        for (let day in data[stage]) {
            if(!daySet.has(day))
            daySet.add(day)
        }
    }
    const dayArray = Array.from(daySet);
    const dayList = dayArray.map(day => ({
        name: getDay(day),
        value: day,
    }))
    return {stages, dayList};
}

// loop gennem all data
export async function mergeData() {
  const bands = await getAllBands();
  const schedule = await getAllSchedule();
    for (let stage in schedule) {
      for (let day in schedule[stage]) {
        schedule[stage][day].forEach((bandPlaying) => {
          const isMatching = bands.find((thisArtist) => thisArtist.name === bandPlaying.act);
          if (isMatching) {
            bandPlaying.logo = isMatching.logo;
            bandPlaying.bio = isMatching.bio;
            bandPlaying.members = isMatching.members;
            bandPlaying.genre = isMatching.genre;
            bandPlaying.slug = isMatching.slug;
            bandPlaying.credit = isMatching.logoCredits;
          }
        });
      }
    }
    return schedule;
  };