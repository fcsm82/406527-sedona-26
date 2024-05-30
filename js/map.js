function initMap() {
  const sedona = {lat: 34.871002, lng: -111.760826};

  const mapOptions = {zoom: 10, center: sedona};
  const mapElement = document.getElementById('map');
  const map = new google.maps.Map(mapElement, mapOptions);

  const markerOptions = {position: sedona, map: map};
  const marker = new google.maps.Marker(markerOptions);
}
