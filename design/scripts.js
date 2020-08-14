// Toggle side panel with search button

const sidePanelButton = document.getElementById("toggle-search-drawer-button");
sidePanelButton.addEventListener("click", toggleSidePanel);
const sidePanel = document.getElementById("my-side-panel");
const sidePanelContainer = document.getElementById("side-panel-container");
const closePanelButton = document.getElementById("close-panel-button");
closePanelButton.addEventListener("click", closeSidePanel);

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

// Empty containers text

const inventoryItem = document
  .querySelector(".inventory-grid")
  .querySelectorAll(".item");
const plot = document.getElementById("plot-container").querySelectorAll(".plot");
const inventoryGrid = document.querySelector(".inventory-grid");
const plotContainer = document.getElementById("plot-container");
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
