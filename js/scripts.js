$(document).ready(function() {
  var apiKey = '70433fafb74c3e90db90f265a6c0dced',
      baseUrl = 'https://api.forecast.io/forecast/',
      pdxLat = 45.5200,
      pdxLong = -122.6819;

  function getWeather() {
    var callUrl = baseUrl + apiKey + "/" + pdxLat + "," + pdxLong + "?callback=?";
    $.getJSON(callUrl, function(d) {
      var testTemp = d.hourly.data[0].temperature;
      console.log();
    });
  }

  getWeather();

}); // end ready
