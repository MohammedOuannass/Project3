function initMap() {
  var location = {
    lat: 41.8789,
    lng: -87.6359
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  var contentString = '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">Sears Tower</h1>' +
    '<div id="bodyContent">' +
    '<img src="media/towermarker.jpg" width="200px">' +
    '<p>The Sears Tower is a 110-story, 1,450-foot skyscraper in Chicago, Illinois.</p>' +
    '</div>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}