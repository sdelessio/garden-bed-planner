class Plant {
  constructor(title, img, space, id) {
    this.title = title;
    this.img = img;
    this.space = space;
    this.id = id;
  }
}

const app = new Vue({
  el: "#app",
  data: {
    quantity: 0,
    disabled: 0,
    search: "",
    plantList: [
      new Plant(
        "Heirloom Tomato",
        "tomato.jpeg",
        "1 square foot",
        "heirloom-tomato"
      ),
      new Plant(
        "Spinach",
        "spinach.jpg",
        "2 square feet",
        "spinach"
      ),
      new Plant(
        "Pepper",
        "pepper.jpeg",
        "1 square foot",
        "pepper"
      ),
    ],
  },
  methods: {
    addPlant(){
      this.quantity++;
    },
    subtractPlant(){
      this.quantity--;
    }
  },
  computed: {
    filteredList() {
      return this.plantList.filter((plant) => {
        return plant.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  },
});


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
