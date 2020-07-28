var sideNavButton = document.getElementById("toggle-search-drawer-button");
sideNavButton.addEventListener("click", toggleSidenav);
var sideNav = document.getElementById("mySidenav");
var sideNavContainer = document.getElementById("sidenav-container");
var closeNavButton = document.getElementById("close-nav-button");
closeNavButton.addEventListener("click", closeSideNav);

function toggleSidenav() {
  if (
    sideNav.style.transform === "translate(500px)" ||
    sideNav.style.transform === ""
  ) {
    sideNav.style.transform = "translate(0px)";
    sideNav.style.boxShadow = "0 19px 38px rgba(0, 0, 0, 0.3)";
    sideNavButton.style.transform = "translate(0px)";
    sideNavContainer.style.zIndex = "4";
  } else {
    sideNav.style.transform = "translate(500px)";
    sideNav.style.boxShadow = "none";
    sideNavButton.style.transform = "translate(500px)";
    sideNavContainer.style.zIndex = "";
  }
}

function closeSideNav() {
  sideNav.style.transform = "translate(500px)";
  sideNav.style.boxShadow = "none";
  sideNavButton.style.transform = "translate(500px)";
}
