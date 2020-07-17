<template>
  <div class="container-fluid h-100" id="app">
    <div class="h-100" id="garden-bed-planner">
      <div class="row h-100">
        <div class="col-sm-8 p-0 h-100">
          <div class="h-100 flexbox" id="plot-container">
            <div class="plot-container-header">
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
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
                  type="number"
                  class="form-control"
                  placeholder="Height"
                  aria-label="Height"
                  aria-describedby="height-addon"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="height-addon">inches</span>
                </div>
              </div>
            </div>
            <!-- <p class="column-empty-text">
            No plots added. Click "+" button to add a plot
          </p> -->
            <div class="plot circular-plot">
              <div class="grid plot-grid h-100 w-100">
                <div class="item tomato"></div>
                <div class="item pepper"></div>
              </div>
            </div>
          </div>
          <div class="plot-container-footer">
            <div class="plot-pagination">
              <button type="button" class="btn rectangle"></button>
              <button type="button" class="btn triangle"></button>
              <button type="button" class="btn circle"></button>
            </div>
            <button
              type="button"
              class="btn"
              id="add-plot-button"
              data-toggle="modal"
              data-target="#add-plot-modal"
            >
              <i class="fa fa-plus"></i>
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              id="add-plot-modal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="addPlotModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title d-block text-center w-100"
                      id="addPlotModalLabel"
                    >
                      Add a plot
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body d-flex justify-content-between">
                    <button class="circle"></button>
                    <button class="rectangle"></button>
                    <button class="triangle"></button>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-primary">Okay</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 h-100">
          <div class="h-100 flexbox" id="inventory-container">
            <!-- <p class="column-empty-text">
            You have nothing in your inventory. Click search button to add plants
          </p> -->

            <div class="inventory-grid-wrapper h-100 w-100">
              <div class="inventory-grid grid h-100 w-100">
                <div class="item tomato"></div>
                <div class="item pepper"></div>
                <div class="item spinach"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item pepper"></div>
                <div class="item spinach"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item pepper"></div>
                <div class="item spinach"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item pepper"></div>
                <div class="item spinach"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
                <div class="item pepper"></div>
                <div class="item spinach"></div>
                <div class="item tomato"></div>
                <div class="item tomato"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidenav-container">
        <button type="button" class="btn" id="toggle-search-drawer-button">
          <i class="fa fa-search"></i>
        </button>
        <div id="mySidenav" class="sidenav">
          <div class="sidenav-header w-100 d-flex justify-content-end">
            <button
              type="button"
              class="mobile-only btn align-self-end"
              aria-label="Close sidenav"
              id="close-nav-button"
            >
              <span aria-hidden="true"><i class="fa fa-close"></i></span>
            </button>
          </div>
          <div class="input-group mb-3" id="search-bar-container">
            <input
              type="search"
              class="form-control search-plants-input"
              placeholder="&#xf002; Search for plants"
              aria-label="Search plants"
              aria-describedby="basic-addon2"
              id="search-bar"
            />
          </div>
          <div class="list-group">
            <div class="list-item">
              <div class="row">
                <div class="col-md-5 col-lg-3 col-xl-3">
                  <img class="img-fluid w-100" />
                </div>
                <div class="col-md-7 col-lg-9 col-xl-9">
                  <div>
                    <h2>Plant title</h2>
                    <p><b>Space required: </b> 1</p>
                  </div>
                  <div class="input-group plus-minus-input">
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-default btn-number minus-button"
                        disabled="disabled"
                        data-type="minus"
                        data-field="quant[1]"
                      >
                        <span class="fa fa-minus"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      class="form-control input-number"
                      value="1"
                      min="1"
                      max="10"
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-default btn-number plus-button"
                        data-type="plus"
                        data-field="quant[1]"
                      >
                        <span class="fa fa-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
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

.modal-content {
  background-color: #f4f8ef;
}

.modal-body > button {
  flex-grow: 1;
  margin: 5px;
}

.mobile-only {
  display: none;
}

.sidenav {
  height: 100%;
  width: 500px;
  z-index: 1;
  top: 0;
  transform: translate(500px);
  overflow-x: hidden;
  background-color: #f4f8ef;
  transition: 0.5s;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.sidenav-container {
  position: fixed;
  display: flex;
  flex-direction: row;
  right: 0;
  height: 100%;
  top: 0;
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

.grid {
  display: grid;
  gap: 10px 10px;
}

.inventory-grid-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  top: 0;
  position: absolute;
}

.inventory-grid {
  grid-template-columns:
    minmax(48px, max-content)
    repeat(auto-fill, 48px);
  grid-template-rows:
    minmax(48px, max-content)
    repeat(auto-fill, 48px);
}

.plot-grid {
  grid-template-columns:
    minmax(48px, max-content)
    repeat(auto-fill, 48px);
  grid-template-rows:
    minmax(48px, max-content)
    repeat(auto-fill, 48px);
}

.circular-plot {
  height: 500px;
  width: 500px;
  border-radius: 50%;
}

.plot {
  -webkit-box-shadow: 20px 1px 0px -1px rgba(35, 13, 31, 0.3);
  -moz-box-shadow: 20px 1px 0px -1px rgba(35, 13, 31, 0.3);
  box-shadow: 20px 1px 0px -1px rgba(35, 13, 31, 0.3);
  background-color: rgba(34, 13, 30, 0.65);
  border: 30px ridge #ec572c;
  padding: 10px;
}
.rectangular-plot {
  height: 500px;
  width: 500px;
}

.input-group-text {
  background-color: #acbc8a;
  color: #f4f8ef;
}
/*
.triangular-plot {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
} */

.plot-pagination > button {
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

.item {
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(34, 13, 30, 0.12), 0 1px 2px rgba(34, 13, 30, 0.24);
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.tomato {
  grid-column: auto / span 2;
  grid-row: auto / span 2;
  background-image: url("assets/tomato.jpeg");
}

.pepper {
  grid-column: auto / span 1;
  grid-row: auto / span 1;
  background-image: url("assets/pepper.jpeg");
}

.spinach {
  grid-column: auto / span 3;
  grid-row: auto / span 3;
  background-image: url("assets/spinach.jpg");
}

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

#plot-container {
  /* background: url("farmer.png"); */
  background-color: #acbc8a;
}

#plot-container,
#inventory-container {
  position: relative;
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

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

#add-plot-button {
  width: 60px;
  height: 60px;
  background-color: #ec572c;
  border-radius: 5px;
  color: #f4f8ef;
}

.plus-minus-input {
  border: 1px solid #ced4da;
  border-radius: 4px;
  max-width: 150px;
}

.plus-minus-input > .form-control {
  border-top: none;
  border-bottom: none;
  font-family: FontAwesome, "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
}

.column-empty-text {
  font-size: 22px;
  font-weight: bold;
}

@media (max-width: 576px) {
  .mobile-only {
    display: block;
  }
}
</style>
