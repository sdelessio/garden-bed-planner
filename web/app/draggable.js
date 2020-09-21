var jq = jQuery.noConflict();

var draggableOptions = {
  opacity: 0.5,
  snap: ".gridlines",
  revert: "invalid",
  scroll: true
};
var draggablePlotOptions = {
  opacity: 0.5,
  revert: "invalid"
};
var inventoryDroppableOptions = {
  accept: ".item",
  tolerance: "touch",
  drop: function (event, ui) {
    var dropped = ui.draggable;
    var droppedOn = jq(this);
    jq(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
  },
};
var plotDroppableOptions = {
  accept: ".item",
  tolerance: "touch",
  drop: function (event, ui) {
    var dropped = ui.draggable;
    var droppedOn = jq(this);
    var leftPositon = ui.offset.left - jq(droppedOn).offset().left;
    var topPositon = ui.offset.top - jq(droppedOn).offset().top;
    jq(dropped).detach().css({
        top: topPositon + "px",
        left: leftPositon + "px",
      }).appendTo(droppedOn);
  },
};

jq(document).ready(function () {
  function makeItemsDraggable() {
    jq(".item").draggable(draggableOptions);
    jq(".plot").draggable(draggableOptions);
  }
  jq(".inventory-grid").droppable(inventoryDroppableOptions);
  jq(".plot-grid").droppable(plotDroppableOptions);
  jq(".delete-area").droppable({
    accept: ".item, .plot",
    activeClass: "dropArea",
    hoverClass: "dropAreaHover",
    tolerance: "touch",
    drop: function (event, ui) {
      ui.draggable.remove();
    },
  });

  makeItemsDraggable();
});

export { draggableOptions, draggablePlotOptions, plotDroppableOptions };
