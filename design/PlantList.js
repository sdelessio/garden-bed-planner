class Plant {
  constructor(title, img, space, id, quantity) {
    this.title = title;
    this.img = img;
    this.space = space;
    this.id = id;
    this.quantity = quantity;
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
        "heirloom-tomato",
        0
      ),
      new Plant(
        "Spinach",
        "spinach.jpg",
        "2 square feet",
        "spinach",
        0
      ),
      new Plant(
        "Pepper",
        "pepper.jpeg",
        "1 square foot",
        "pepper",
        0
      ),
    ],
  },
  methods: {
    addPlant(){
      // this.quantity++;
    },
    subtractPlant(){
      if (this.quantity === 0) {
        alert("Negative quantity not allowed");
      } else {
      this.quantity--;
      }
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
