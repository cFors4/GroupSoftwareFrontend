// 4th decimal place
// this is valid up to 11m
var isAtLoc = function(curLang, curLong, locLang, locLong) {
  if (curLang.toFixed(4) === locLang.toFixed(4) && curLong.toFixed(4) === locLong.toFixed(4)) {
    return true;
  }
  return false;
}

name = localStorage.getItem("studentName");
var updateDatabase = function(lat, long) {
  firebase.database().ref('players/' + name + '/playerCoordinates').set({
    lat: lat,
    lng: long
  });
  console.log('real time database updated with location');
}


var updateStream = window.setInterval(() => {
  navigator.geolocation.getCurrentPosition(x => {
    document.getElementById('lang').innerHTML = x.coords.latitude;
    document.getElementById('long').innerHTML = x.coords.longitude;
    updateDatabase(x.coords.latitude, x.coords.longitude);
  });
}, 30000)

module.exports = isAtLoc;