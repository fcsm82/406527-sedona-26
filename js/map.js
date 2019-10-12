// Initialize and add the map
function initMap() {
  // The location of sedona
  var sedona = {lat: 34.871002, lng: -111.760826};
  // The map, centered at sedona
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: sedona});
  // The marker, positioned at sedona
  var marker = new google.maps.Marker({position: sedona, map: map});
}
