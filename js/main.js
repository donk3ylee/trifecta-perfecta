//Function to open/close the navbar on small screens when user clicks on the hamburger

const headerSmall = document.getElementById('header-small');
const menuLine = document.getElementsByClassName('menu-lines')[0];
const menuX = document.getElementsByClassName('menu-x')[0];

function openCloseNav() {
  if (headerSmall.style.display === "block") {
    headerSmall.style.display = "none";
    menuLine.style.display = "block";
    menuX.style.display = 'none';
  } else {
    headerSmall.style.display = "block";
    menuLine.style.display = "none";
    menuX.style.display = 'block';
  }
}

//Function to make the small screen navbar disappear if the user changes to bigger screen even if it has been opened on the small one. It also checks if the hamburger has the lines or X and makes sure it is correctly displayed after resizing of the screen
function removeNav(x) {
  if (x.matches) {
    headerSmall.style.display = "none";
    menuLine.style.display = "block";
    menuX.style.display = 'none';
} else {
  headerSmall.style.display = "none";
}
}

var x = window.matchMedia("(max-width: 767px)")
removeNav(x)
x.addListener(removeNav)


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
