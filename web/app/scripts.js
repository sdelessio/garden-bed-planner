import {
  draggableOptions,
  draggablePlotOptions,
  plotDroppableOptions,
} from "./draggable.js";

const sidePanelButton = document.getElementById("search-for-plants-button");
const sidePanelContainer = document.getElementById("side-panel-container");
const closePanelButton = document.getElementById("close-panel-button");
const inventoryGrid = document.querySelector(".inventory-grid");
const inventoryItems = inventoryGrid.querySelectorAll(".item");
const inventoryItemsMap = [...inventoryItems].map((el) => el);
const plotsContainerBody = document.getElementById("plots-container-body");
const plots = document.querySelectorAll(".plot");
const plotsMap = [...plots].map((el) => el);

const addToInventoryButtons = document.querySelectorAll(
  ".add-to-inventory-button"
);
const plantLength = inventoryGrid.querySelectorAll(".item").length;
const plotPagination = document.querySelector(".plot-pagination");
const paginationButtons = document.querySelectorAll(".plot-item");
const addNewPlotButtons = document.querySelectorAll(".add-plot-button");
const plotHeightInput = document.querySelector("#height-input");
const plotWidthInput = document.querySelector("#width-input");

function toggleSidePanel() {
  if (
    sidePanelContainer.style.transform === "translate(500px)" ||
    sidePanelContainer.style.transform === ""
  ) {
    sidePanelContainer.style.transform = "translate(0px)";
    sidePanelContainer.style.boxShadow = "0 19px 38px rgba(0, 0, 0, 0.3)";
    sidePanelContainer.style.zIndex = "4000000";
  } else {
    sidePanelContainer.style.transform = "translate(500px)";
    sidePanelContainer.style.boxShadow = "none";
  }
}

function closeSidePanel() {
  sidePanelContainer.style.transform = "translate(500px)";
  sidePanelContainer.style.boxShadow = "none";
}

//Change height of plot with height input
function changePlotHeight() {
  var value = jQuery(this).val();
  // Each inch is equal to 12 pixels
  var convertedValue = value * 12;
  jQuery(".plot.active").height(convertedValue);
  jQuery(".plot.active > .plot-grid > .gridlines").remove();
  editGrid(12);

}

//Change width of plot with width input
function changePlotWidth() {
  var value = jQuery(this).val();
  // Each inch is equal to 12 pixels
  var convertedValue = value * 12;
  jQuery(".plot.active").width(convertedValue);
  jQuery(".plot.active > .plot-grid > .gridlines").remove();
  editGrid(12);
}

function addPlantsToInventory() {
  // Find the id of the list-item parent of the number input
  const inventoryItemID = this.closest(".list-item").id;
  const thisNumberInput = document.querySelector(
    "#" + inventoryItemID + "-input-number"
  );
  let thisNumberInputValue = document.querySelector(
    "#" + inventoryItemID + "-input-number"
  ).value;
  const thisTotalPlants = document.querySelector(
    "#" + inventoryItemID + "-inventory-total"
  );
  for (let i = 0; i < thisNumberInputValue; i++) {
    // Create a new item with inventoryItemID
    const newItem = document.createElement("div");
    newItem.className = "item " + inventoryItemID;
    inventoryGrid.appendChild(newItem);
    inventoryItemsMap.push(newItem);
  }
  // Reset the input value back to 0 - TODO why is both thisNumberInputValue and thisNumberInput.value required?
  thisNumberInput.value = "0";
  thisNumberInputValue = 0;
  // Rerun draggable on items
  jQuery(".item").draggable(draggableOptions);
}

// Select the node that will be observed for mutations
const targetNode = document.getElementById("inventory-grid");

// Options for the observer (which mutations to observe)
const config = { childList: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.removedNodes) {
      for (let removedNode of mutation.removedNodes) {
        if (removedNode.classList.contains("item")) {
          const plantID = removedNode.getAttribute("class").split(" ")[1];
          console.log("A " + plantID + " node has been removed.");
          return;
        }
      }
    }
    if (mutation.type === "childList" && mutation.addedNodes) {
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.classList.contains("item")) {
          const plantID = addedNode.getAttribute("class").split(" ")[1];
          console.log("A " + plantID + " node has been added.");
          return;
        }
      });
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

function addNewPlot(e) {
  // Find the value of the plot button
  const targetID = e.target.value;
  const newPlot = document.createElement("div");
  const newPlotGrid = document.createElement("div");
  newPlot.className = "plot " + targetID + "-plot";
  newPlotGrid.className = "grid plot-grid h-100 w-100";
  newPlot.appendChild(newPlotGrid);
  plotsContainerBody.appendChild(newPlot);
  plotsMap.push(newPlot);
  jQuery(".plot").draggable(draggablePlotOptions);
  jQuery(".plot-grid").droppable(plotDroppableOptions);
  // Add gridlines to plot grid div with jQuery
  function createGrid(size) {
    var i,
      sel = jQuery(newPlotGrid),
      height = sel.height(),
      width = sel.width(),
      ratioW = Math.floor(width / size),
      ratioH = Math.floor(height / size);

    for (i = 0; i <= ratioW; i++) {
      // vertical grid lines
      jQuery("<div />")
        .css({
          top: 0,
          left: i * size,
          width: 1,
          height: height,
        })
        .addClass("gridlines gridlines-vertical")
        .appendTo(sel);
    }

    for (i = 0; i <= ratioH; i++) {
      // horizontal grid lines
      jQuery("<div />")
        .css({
          top: i * size,
          left: 0,
          width: width,
          height: 1,
        })
        .addClass("gridlines gridlines-horizontal")
        .appendTo(sel);
    }

    jQuery(".gridlines").show();
  }
  createGrid(12);
}

function editGrid(size) {
  var i,
    sel = jQuery(".plot.active > .plot-grid"),
    height = sel.height(),
    width = sel.width(),
    ratioW = Math.floor(width / size),
    ratioH = Math.floor(height / size);

  for (i = 0; i <= ratioW; i++) {
    // vertical grid lines
    jQuery("<div />")
      .css({
        top: 0,
        left: i * size,
        width: 1,
        height: height,
      })
      .addClass("gridlines gridlines-vertical")
      .appendTo(sel);
  }

  for (i = 0; i <= ratioH; i++) {
    // horizontal grid lines
    jQuery("<div />")
      .css({
        top: i * size,
        left: 0,
        width: width,
        height: 1,
      })
      .addClass("gridlines gridlines-horizontal")
      .appendTo(sel);
  }

  jQuery(".gridlines").show();
}

// Add active class to dynamically created plots
jQuery(document).on("click", ".plot", function (e) {
  var current = document.getElementsByClassName("active");
  // Add active class if no active plots exist
  if (current.length == 0) {
    jQuery(this).addClass("active");
    e.stopPropagation()
  }
  // Otherwise remove active class from current active plot and add it to clicked plot
  else {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  }


// Populate inputs with active class values
// let activeClassHeight = this.height();
let activeClassHeight = (jQuery(this).height()) / 12;
plotHeightInput.value = activeClassHeight;
let activeClassWidth = (jQuery(this).width()) / 12;
plotWidthInput.value = activeClassWidth;
});

// Bring items to front of page when dragged
jQuery(document).on("dragstart", ".item", function(e){
    console.log("hello");
});

jQuery(document).on("drag", ".item", function(e){
    console.log("hi");

});

jQuery(document).on("dragstop", ".item", function(e){
    console.log("hey");
    if (e.target.parentElement.classList.contains("plot-grid")) {
      e.target.style.position = "absolute"
    }
    if (e.target.parentElement.classList.contains("inventory-grid")) {
      e.target.style.position = "relative"
    }
});


sidePanelButton.addEventListener("click", toggleSidePanel);
closePanelButton.addEventListener("click", closeSidePanel);
plotHeightInput.addEventListener("input", changePlotHeight);
plotWidthInput.addEventListener("input", changePlotWidth);

addNewPlotButtons.forEach((addNewPlotButton) =>
  addNewPlotButton.addEventListener("click", addNewPlot)
);

addToInventoryButtons.forEach((addToInventoryButton) =>
  addToInventoryButton.addEventListener("click", addPlantsToInventory)
);
