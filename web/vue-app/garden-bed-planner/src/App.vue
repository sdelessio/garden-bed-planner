<template>
  <div class="container-fluid h-100" id="app">
    <div class="row h-100">
      <div class="col-sm-8 p-0 h-100">
        <div class="h-100" id="plot-container">
          <div class="plot-container-header">
            <div class="input-group">
              <input
                min="0"
                type="number"
                class="form-control"
                id="width-input"
                placeholder="Length"
                aria-label="Length"
                aria-describedby="length-addon"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="length-addon">inches</span>
              </div>
            </div>
            <div class="input-group">
              <input
                min="0"
                type="number"
                class="form-control"
                id="height-input"
                placeholder="Height"
                aria-label="Height"
                aria-describedby="height-addon"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="height-addon">inches</span>
              </div>
            </div>
          </div>
          <div class="plot rectangular-plot">
            <div class="grid plot-grid h-100 w-100" id="plot-grid">
              <div class="pepper item"></div>
            </div>
          </div>
        </div>
        <div class="plot-container-footer">
          <div class="plot-pagination">
            <button type="button" class="btn rectangle plot-item"></button>
            <button type="button" class="btn triangle plot-item"></button>
            <button type="button" class="btn circle plot-item"></button>
          </div>
          <button
            type="button"
            class="btn"
            id="add-plot-button"
            data-toggle="modal"
            data-target="#add-plot-modal"
          >
            Add new plot <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col-sm-4 h-100">
        <div class="h-100" id="inventory-container">
          <div class="inventory-grid-wrapper h-100 w-100">
            <div
              class="inventory-grid h-100 w-100"
              id="inventory-grid-container"
            >
              <!-- <inventory-list-plant v-for="plant in plantList" :class="plant.id + ' item'"/> -->
              <div class="pepper item"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="delete-area"><i class="fa fa-trash"></i></div>
      <div class="side-panel-container" id="side-panel-container">
        <button type="button" class="btn" id="toggle-search-drawer-button">
          <i class="fa fa-search"></i>
        </button>
        <div id="my-side-panel" class="side-panel">
          <div class="side-panel-header w-100 d-flex justify-content-end">
            <button
              type="button"
              class="mobile-only btn align-self-end"
              aria-label="Close side panel"
              id="close-panel-button"
            >
              <span aria-hidden="true"><i class="fa fa-close"></i></span>
            </button>
          </div>
          <div class="input-group mb-3" id="search-bar-container">
            <input
              type="search"
              v-model="search"
              class="form-control search-plants-input"
              placeholder="&#xf002; Search for plants"
              aria-label="Search plants"
              aria-describedby="basic-addon2"
              id="search-bar"
            />
          </div>
          <div class="list-group">
            <div class="list-item" :key="plant.key" :id="plant.id" v-for="plant in plants">
              <plant :plant="plant"></plant>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plants from "@/plants.json";
import Plant from "@/components/Plant.vue";

export default {
  name: "App",
  components: {
    Plant
  },
  data() {
    return {
      search: "",
      plants
    };
  },
  computed: {
    filteredList() {
      return this.plantList.filter((plant) => {
        return plant.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  height: 100%;
  background-color: #f4f8ef;
  font-family: "Nunito", sans-serif;
  color: #101a0f;
}

#garden-bed-planner {
  /* font-size: 22px; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

/* Add a plot modal */

.modal-content {
  background-color: #f4f8ef;
}

.modal-body > button {
  flex-grow: 1;
  margin: 5px;
}

#add-plot-modal > .modal-dialog > .modal-content > .modal-body > button {
  height: 200px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  border: none;
  box-shadow: 0 1px 3px rgba(34, 13, 30, 0.12), 0 1px 2px rgba(34, 13, 30, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.plot-pagination > .plot-item{
  background-color: #fff;
  height: 55px;
  width: 55px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 1px 3px rgba(34, 13, 30, 0.12), 0 1px 2px rgba(34, 13, 30, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.rectangle {
  background-image: url("https://www.clipartmax.com/png/middle/118-1180008_red-square-clip-art-f9ylxu-clipart-square-red.png");
}

.triangle {
  background-image: url("https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Red_triangle_with_thick_white_border.svg/1200px-Red_triangle_with_thick_white_border.svg.png");
}

.circle {
  background-image: url("https://www.sticker.com/picture_library/product_images/colored-stickers/fluorescent-pink-paper-circle-stickers.png");
}

/* Side panel */

.side-panel {
  height: 100%;
  width: 500px;
  top: 0;
  transform: translate(500px);
  overflow-x: hidden;
  background-color: #f4f8ef;
  transition: 0.5s;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.side-panel-container {
  position: fixed;
  display: flex;
  flex-direction: row;
  right: 0;
  height: 100%;
  top: 0;
}

#search-bar {
  height: 75px;
  font-family: FontAwesome, "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
}

/* #search-bar-container > .input-group-append > span {
  width: 75px;
  border-radius: 0px;
  background-color: #ec572c;
  border: none;
} */

.list-group {
  padding: 0px 15px;
}

.list-item {
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(34, 13, 30, 0.12), 0 1px 2px rgba(34, 13, 30, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 10px;
}

.list-item > .row {
  align-items: center;
}

.btn-number {
  border-radius: 0px;
}

.minus-button {
  background-color: #ec572c;
  color: #f4f8ef;
}

.plus-button {
  color: #f4f8ef;
  background-color: #acbc8a;
}

.plus-minus-input {
  /* border: 1px solid #ced4da;
  border-radius: 4px; */
  max-width: 6em;
}

.plus-minus-input > .form-control {
  /* border-top: none;
  border-bottom: none; */
  font-family: FontAwesome, "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
}

.add-to-inventory-button {

}

/* Plots */

.circular-plot {
  height: 500px;
  width: 500px;
  border-radius: 50%;
  overflow: hidden;
}

.plot {
  -webkit-box-shadow: 20px 1px 0px -1px rgba(35, 13, 31, 0.3);
  -moz-box-shadow: 20px 1px 0px -1px rgba(35, 13, 31, 0.3);
  box-shadow: 20px 1px 0px -1px rgba(35, 13, 31, 0.3);
  background-color: rgba(34, 13, 30, 0.65);
  border: 30px ridge #ec572c;
  /* padding: 10px; */
}
.rectangular-plot {
  /* default 60in by 60 in */
  height: 720px;
  width: 720px;
}

/*
.triangular-plot {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
} */

/* Plot size inputs */

.input-group-text {
  background-color: #acbc8a;
  color: #f4f8ef;
}

.placeholder {
  border: 1px solid black;
  height: 100px;
  width: 100px;
}

.delete-area {
  height: 10vh;
  width:  10vh;
  position: absolute;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content:center;
  transition: .1s ease-in;
}

.dropArea {
  display: flex;
  background: rgba(225, 51, 51, 0.8);
  bottom: 15px;
}


.delete-area > i::before {
  color: #fff;
  font-size: 5vh;
  opacity: 0;
  transition: .2s ease-in;
}

.dropArea > i::before {
  opacity: 1;
}


.dropAreaHover {   background: rgba(225, 51, 51, 1); }

/* Grids */

.inventory-grid-wrapper {
  overflow-y: scroll;
}

.grid {
  position: relative;
}

.inventory-grid > .item {
  position: absolute;
}

.plot-grid > .item {
  position: absolute;
}

.gridlines {
  display: none;
  position: absolute;
  background-color: rgba(244, 248, 239, 0.5);
}

/* Grid items */

.item {
  margin: 5px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(34, 13, 30, 0.12), 0 1px 2px rgba(34, 13, 30, 0.24);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  touch-action: none;
  user-select: none;
  z-index: 3;
  cursor: move;
}

.plot-item {
  cursor: move !important;
}

/* 12 pixels is equal to one inch */

.heirloom-tomato {
  /* grid-column: auto / span 2;
  grid-row: auto / span 2; */
  background-image: url("assets/tomato.jpeg");
  width: 72px !important;
  height: 72px !important;
}

.pepper {
  /* grid-column: auto / span 1;
  grid-row: auto / span 1; */
  background-image: url("assets/pepper.jpeg");
  width: 72px !important;
  height: 72px !important;
}

.spinach {
  /* grid-column: auto / span 3;
  grid-row: auto / span 3; */
  background-image: url("assets/spinach.jpg");
  width: 72px !important;
  height: 72px !important;
}

#plot-container {
  /* background: url("farmer.png"); */
  background-color: #acbc8a;
  /* overflow: scroll; */
  padding: 50px;
}

/* Plot and inventory containers */

#plot-container,
#inventory-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.plot-container-footer,
.plot-container-header {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgba(245, 249, 240, 0.5);
}

.plot-container-footer {
  bottom: 0;
  justify-content: space-between;
}

.plot-container-header {
  top: 0;
  justify-content: flex-start;
  height: 55px;
}

.plot-container-header > .input-group {
  margin: 5px;
  max-width: 200px;
}

/* Toggle modals and sidebar buttons */

#add-plot-button {
  /* width: 60px; */
  height: 60px;
  background-color: #ec572c;
  border-radius: 5px;
  color: #f4f8ef;
  font-size: 1.5em;
}

#toggle-search-drawer-button {
  position: relative;
  transform: translate(500px);
  height: 80px;
  align-self: center;
  background-color: #ec572c;
  color: #f4f8ef;
  z-index: 1000;
  transition: 0.5s;
  width: 40px;
  border-bottom-left-radius: 80px;
  border-top-left-radius: 80px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  font-size: 1.5em;
}

.column-empty-text {
  font-size: 22px;
  font-weight: bold;
}

.mobile-only {
  display: none;
}

@media (max-width: 576px) {
  .mobile-only {
    display: block;
  }
}
</style>
