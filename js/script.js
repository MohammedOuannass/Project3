// Custom Marker
var markerLocation = {lat: 41.8789, lng: -87.6359};

var markerIcon = {
  url: 'media/towermarker.png',
  size: new google.maps.Size(64, 64),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 64),
  scaledSize: new google.maps.Size(32, 32)
};

var marker = new google.maps.Marker({
  position: markerLocation,
  map: map,
  icon: markerIcon,
  title: 'Willis Tower'
});
