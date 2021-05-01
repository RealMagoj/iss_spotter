const { fetchMyIP, fetchCoordsByIP, fetchISSCoords, issCoords } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
  
//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned Coords for IP:' , data);
//     fetchISSCoords(data, (error, data) => {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
    
//       console.log('It worked! Returned Coords for ISS:' , data);
//     });
//   });
// });

issCoords((error, coords) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(coords);
});