const { fetchMyIP, fetchCoordsByIP, fetchISSCoords, issCoords } = require('./iss-promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(data => console.log({latitude: JSON.parse(data).latitude, longitude: JSON.parse(data).longitude}))
//   .then(fetchISSCoords)
//   .then(data => console.log({latitude: JSON.parse(data).iss_position.latitude, longitude: JSON.parse(data).iss_position.longitude}));

issCoords()
  .then(data => console.log(data))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });