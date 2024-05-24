import { getAllBands, getAllSchedule } from "../lib/apiCall";

export function getDay(choseDay = null) {
    const theDate = new Date();
    const week = {
      'sun': 'Sunday',
      'mon': 'Monday',
      'tue': 'Tuesday',
      'wed': 'Wednesday',
      'thu': 'Thursday',
      'fri': 'Friday',
      'sat': 'Saturday'
    }
    const shortDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = () => {
      if (choseDay != null) {
        return choseDay;
      } else {
        return theDate.getDay();
      }
    }
    const short = shortDays[today];
    const long = week[short];
  
    return {
      short: short, long: long
    }
  };

// filtrere væk breaks og cancellations
// send nogen data (exempelvis getFlatSchedule)
export function filterAct(data) {
    const bands = [];
      data.map((band) => {
        if (band.act !== 'break' || band.act !== 'cancelled') {
          bands.push(band);
        } else console.log("no push, it is for ", getDay().short)
      });
      return bands;
  };

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
          }
        });
      }
    }
    return schedule;
  };