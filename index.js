var map;

function initialize() {
  var map = new google.maps.Map(
    document.getElementById("map_canvas"), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  var layer = new google.maps.KmlLayer({
    // url: "http://www.google.com/maps/d/kml?mid=zNPjLbo835mE.k3TvWfqGG-AU",
    url: "http://www.google.com/maps/d/kml?forcekml=1&mid=1-mpfnFjp1e5JJ1YkSBjE6ZX_d9w",
    map: map
  })

}
google.maps.event.addDomListener(window, "load", initialize);
