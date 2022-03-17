var map;

function initialize() {
  var map = new google.maps.Map(
    document.getElementById("map_canvas"), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  var layer = new google.maps.KmlLayer({
    // url: "http://www.google.com/maps/d/kml?mid=zNPjLbo835mE.k3TvWfqGG-AU",
    url: "https://www.google.com/maps/d/u/1/kml?mid=1aFpKFTFbz5SMt3ob-JKEPiiZY9O-Nurq",
    map: map
  })

}
google.maps.event.addDomListener(window, "load", initialize);
