$(document).ready(function() {
  var apiKey = '70433fafb74c3e90db90f265a6c0dced',
      baseUrl = 'https://api.forecast.io/forecast/',
      pdxLat = 45.5200,
      pdxLong = -122.6819;

  function getWeather() {
    var callUrl = baseUrl + apiKey + "/" + pdxLat + "," + pdxLong + "?callback=?";
    $.getJSON(callUrl, function(d) {
      d.hourly.data.forEach(function(d) {
        $(".weather").append('<div class="row"><button class="btn btn-default btn-lg">' + d.time.getHours() + ':00 | ' d.temperature + '</button></div>')
      }); // end each
    }); // end getJSON
  }

  getWeather();

}); // end ready

// TEST
// var testTemp = parseInt(d.hourly.data[0].temperature);
// $("#test").html(testTemp);
