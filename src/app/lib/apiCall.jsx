// export const rootUrl = "http://localhost:8080";
export const rootUrl = "https://doubledebuggers-foofest.glitch.me";

export async function getAllBands() {
  const res = await fetch(`${rootUrl}/bands`);
  return await res.json();
}

export async function getBandsBySlug(slug) {
  const res = await fetch(`${rootUrl}/bands/${slug}`);
  return await res.json();
}

export async function getAllSchedule() {
  const res = await fetch(`${rootUrl}/schedule`);
  return await res.json();
}

export async function getFlatSchedule() {
  const data = await getAllSchedule();
  const nextSchedule = [];
  for (let stage in data) {
    for (let day in data[stage]) {
      nextSchedule.push(
        ...data[stage][day].map((act) => {
          return {
            ...act,
            day,
            stage,
          };
        })
      );
    }
  }
  return nextSchedule;
}

export async function getAllEvents() {
  const res = await fetch(`${rootUrl}/events`);
  return await res.json();
}
export async function getAllAvailableSpots() {
  const res = await fetch(`${rootUrl}/available-spots`);
  return await res.json();
}

export async function reserveSpot(areaAmount, amountAmount) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    area: areaAmount,
    amount: amountAmount,
  });

  let response = await fetch(`${rootUrl}/reserve-spot`, {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
  });

  return await response.json();
}

export async function completeReservation(id) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    id: id,
  });

  let response = await fetch(`${rootUrl}/fullfill-reservation`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });
  return await response.json();
}
