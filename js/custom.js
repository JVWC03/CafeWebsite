// custom.js

// Mobile menu toggle for overlay
function openNav() {
  const overlay = document.getElementById("myNav");
  overlay.style.width = overlay.style.width === "100%" ? "0" : "100%";
}

// Close overlay when clicking on a link
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.overlay a');
  const overlay = document.getElementById("myNav");
  links.forEach(link => {
    link.addEventListener('click', function() {
      overlay.style.width = "0";
    });
  });
});

// Optional: Initialize Bootstrap tooltips or carousels
$(document).ready(function(){
  $('.carousel').carousel();
});

// Google Maps placeholder function
function myMap() {
  const mapProp= {
    center:new google.maps.LatLng(53.267, -6.124), // Bray coords
    zoom:12,
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
