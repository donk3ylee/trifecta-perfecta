//Google Maps API in About Us page
// Initialize and add the map
function initMap() {
  // The location of the bakery
  const bakeryLocation = { lat: 52.62145224678766, lng: 1.280472649413193 }; 
  // The map, centered at the bakery
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: bakeryLocation,
  });
  // The marker, positioned at the bakery
  const marker = new google.maps.Marker({
    position: bakeryLocation,
    map: map,
  });
}
