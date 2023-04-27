//Custom map marker
var mapIframe = document.querySelector("#map-container iframe");

mapIframe.addEventListener("load", function() {
  var mapDoc = mapIframe.contentDocument;
  var marker = new mapDoc.defaultView.google.maps.Marker({
    position: { lat: 41.878876, lng: -87.638490 },
    map: mapDoc.defaultView.google.maps.Map,
    icon: {
      url: 'media/towermarker.png',
      scaledSize: new mapDoc.defaultView.google.maps.Size(50, 50)
    }
  });
});

//Street View
var mapIframe = document.querySelector("#map-container iframe");

mapIframe.addEventListener("load", function() {
  var mapDoc = mapIframe.contentDocument;
  var panorama = new mapDoc.defaultView.google.maps.StreetViewPanorama(
    mapDoc.getElementById('map-container'),
    {
      position: { lat: 41.878876, lng: -87.638490 },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
      panControl: true,
      zoomControl: true
    }
  );
  mapDoc.defaultView.google.maps.Map.setStreetView(panorama);
});

//Direction Services
var mapIframe = document.querySelector("#map-container iframe");

mapIframe.addEventListener("load", function() {
  var mapDoc = mapIframe.contentDocument;
  var directionsService = new mapDoc.defaultView.google.maps.DirectionsService();
  var directionsRenderer = new mapDoc.defaultView.google.maps.DirectionsRenderer();
  directionsRenderer.setMap(mapDoc.defaultView.google.maps.Map);
  directionsService.route({
    origin: 'Chicago, IL',
    destination: 'Los Angeles, CA',
    travelMode: 'DRIVING',
    unitSystem: mapDoc.defaultView.google.maps.UnitSystem.IMPERIAL,
    avoidTolls: true
  }, function(response, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
});
