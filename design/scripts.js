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
