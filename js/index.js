//Navbar logic
// When the user scrolls the page, execute myFunction
window.onscroll = () => {
  stickyNav()
};

// Get the navbar // Get the offset position of the navbar
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const stickyNav = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("et-hero-tabs-container--sticky");
  } else {
    navbar.classList.remove("et-hero-tabs-container--sticky");
  }
};

