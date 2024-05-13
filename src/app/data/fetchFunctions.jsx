// TO DO:
// change to glitch and use supabase

export const host = 'http://localhost:8080/'

async function getBands() {
    const bandsResponse = await fetch(host + "bands");
    const bandsData = await bandsResponse.json();
  
    return await bandsData;
  }

async function getSchedule() {
    const scheduleResponse = await fetch(host + "schedule");
    const scheduleData = await scheduleResponse.json();

    return await scheduleData;
  }

export  {getBands, getSchedule}