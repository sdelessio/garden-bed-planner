// import {draggableOptions} from './draggable.js';

const sidePanelButton = document.getElementById("toggle-search-drawer-button");
sidePanelButton.addEventListener("click", toggleSidePanel);
const sidePanel = document.getElementById("my-side-panel");
const sidePanelContainer = document.getElementById("side-panel-container");
const closePanelButton = document.getElementById("close-panel-button");
closePanelButton.addEventListener("click", closeSidePanel);
const inventoryItem = document
  .querySelector(".inventory-grid")
  .querySelectorAll(".item");
const plot = document.getElementById("plot-container").querySelectorAll(".plot");
const inventoryGrid = document.querySelector(".inventory-grid");
const plotContainer = document.getElementById("plot-container");
const addToInventoryButtons = document.querySelectorAll('.add-to-inventory-button');
const plantLength = inventoryGrid.querySelectorAll('.item').length;

function toggleSidePanel() {
  if (
    sidePanel.style.transform === "translate(500px)" ||
    sidePanel.style.transform === ""
  ) {
    sidePanel.style.transform = "translate(0px)";
    sidePanel.style.boxShadow = "0 19px 38px rgba(0, 0, 0, 0.3)";
    sidePanelButton.style.transform = "translate(0px)";
    sidePanelContainer.style.zIndex = "4";
  } else {
    sidePanel.style.transform = "translate(500px)";
    sidePanel.style.boxShadow = "none";
    sidePanelButton.style.transform = "translate(500px)";
    sidePanelContainer.style.zIndex = "";
  }
}

function closeSidePanel() {
  sidePanel.style.transform = "translate(500px)";
  sidePanel.style.boxShadow = "none";
  sidePanelButton.style.transform = "translate(500px)";
}

//Add empty inventory text if there are no items in the inventory-grid
if (inventoryItem.length == 0) {
  const tag = document.createElement("p");
  tag.className = "column-empty-text";
  const text = document.createTextNode(
    "You have nothing in your inventory. Click search button to add plants"
  );
  tag.appendChild(text);
  inventoryGrid.appendChild(tag);
}
//Add empty plot text if there are no plots in the plot container
if (plot.length == 0) {
  const tag = document.createElement("p");
  tag.className = "column-empty-text";
  const text = document.createTextNode(
    "No plots added. Click "+" button to add a plot"
  );
  tag.appendChild(text);
  plotContainer.appendChild(tag);
}

function addPlantsToInventory() {
  // Find the id of the list-item parent of the number input
  const inventoryItemID = this.closest('.list-item').id;
  const thisNumberInput = document.querySelector('#' + inventoryItemID + '-input-number');
  let thisNumberInputValue = document.querySelector('#' + inventoryItemID + '-input-number').value;
  for (let i=0;i<thisNumberInputValue;i++) {
    // Create a new item with inventoryItemID
    const newItem = document.createElement('div');
    newItem.className = 'item ' + inventoryItemID;
    inventoryGrid.appendChild(newItem);
  }
  // Reset the input value back to 0 - TODO why is both thisNumberInputValue and thisNumberInput.value required?
  thisNumberInput.value = "0";
  thisNumberInputValue = 0;
  // Rerun draggable on items
  jQuery(".item").draggable(draggableOptions);
}

addToInventoryButtons.forEach(addToInventoryButton => addToInventoryButton.addEventListener('click', addPlantsToInventory));
