var jq = jQuery.noConflict();
var draggableOptions = {
  opacity: 0.5,
  snap: ".gridlines",
  revert: "invalid"
};
var draggablePlotOptions = {
  opacity: 0.5,
  revert: "invalid",
  cancel: false
};
var droppableOptions = {
  accept: ".item",
  tolerance: "touch"
};

jq(document).ready(function () {
  function makeItemsDraggable() {
  jq(".item").draggable(draggableOptions);
  jq(".plot").draggable(draggableOptions);
  }
  jq(".inventory-grid").droppable(droppableOptions);
  jq(".plot-grid").droppable(droppableOptions);
  jq(".delete-area").droppable({
    accept: '.item, .plot',
    activeClass: 'dropArea',
    hoverClass: 'dropAreaHover',
    tolerance: "touch",
    drop: function(event, ui) {
        ui.draggable.remove();
    }
});

  makeItemsDraggable();
});

export {draggableOptions, draggablePlotOptions, droppableOptions};
