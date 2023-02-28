export async function getAllEvents() {
     const key = 'paBdVONZfprSreofrQSnKo4iCkCYpRB6'
      const response = await fetch(
         `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${key}`
        );
      const data = response.json();
      return data;
    }
