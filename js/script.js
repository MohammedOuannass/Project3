function initMap() {
  var location = {lat: 41.8789, lng: -87.6359};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: location
  });
}
