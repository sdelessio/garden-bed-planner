Vue.component('inventory-list-plant', {
  template: '<div></div>',
  props: ['id']
})

const app = new Vue({
  el: "#garden-bed-planner",
  data: {
    quantity: 0,
    search: "",
    plantList: [
      {
        title: "Heirloom Tomato",
        img: "tomato.jpeg",
        space: "1 square foot",
        id: "heirloom-tomato",
        quantity: 0
      },
      {
        title: "Spinach",
        img: "spinach.jpg",
        space: "2 square feet",
        id: "spinach",
        quantity: 0
      },
      {
        title: "Pepper",
        img: "pepper.jpeg",
        space: "1 square foot",
        id: "pepper",
        quantity: 0
      },
    ],
  },
  methods: {
    addPlant(){
      // this.quantity++;
      console.log(this.plant);
    },
    subtractPlant(){
      if (this.quantity === 0) {
        alert("Negative quantity not allowed");
      } else {
      this.quantity--;
      }
    },
    addToInventory(){
      var className = document.getElementById("inventory-grid-container");
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
