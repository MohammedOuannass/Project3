var map;

function initMap() {
  var willisTower = {lat: 41.878876, lng: -87.635915};
  map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 15,
    center: willisTower
  });
  var markerIcon = {
    url: 'media/towermarker.png',
    size: new google.maps.Size(64, 64),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 64),
    scaledSize: new google.maps.Size(32, 32)
  };
  var marker = new google.maps.Marker({
    position: willisTower,
    map: map,
    icon: markerIcon,
    title: 'Willis Tower'
  });
}
