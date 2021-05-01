const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = (data) => {
  return request(`https://freegeoip.app/json/${JSON.parse(data).ip}`);
}

const fetchISSCoords = () => {
  return request(`http://api.open-notify.org/iss-now.json`);
}

const issCoords = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(data => console.log('fetchCoordsByIP', {latitude: JSON.parse(data).latitude, longitude: JSON.parse(data).longitude}))
  .then(fetchISSCoords)
  .then((data) => {
    return {latitude: JSON.parse(data).iss_position.latitude, longitude: JSON.parse(data).iss_position.longitude}
  });
}

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSCoords,
  issCoords
}