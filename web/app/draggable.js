var jq = jQuery.noConflict();

var draggableOptions = {
  opacity: 0.5,
  snap: ".gridlines",
  revert: "invalid",
};
var draggablePlotOptions = {
  opacity: 0.5,
  revert: "invalid",
  cancel: false,
  autoscroll: 1,
};
// var droppableOptions = {
//   accept: ".item",
//   tolerance: "touch",
//   drop: function(event, ui) {
//     var dropped = ui.draggable;
//     var droppedOn = jq(this);
//     var item = dropped.detach();
//     var offset = droppedOn.offset();
// var inventoryContainerLeftOffset = jq('#inventory-grid').offset().left;
// var inventoryContainerTopOffset = jq('#inventory-grid').offset().top;
//     if (jq(this).hasClass('plot-grid')){
//       dropped.css('left', (ui.position.left + inventoryContainerLeftOffset - jq(this).offset().left) +'px');
//       dropped.css('top', (ui.position.top + inventoryContainerTopOffset - jq(this).offset().top) +'px');
//     }
//     if (jq(this).hasClass('inventory-grid')){
//       dropped.css('left', 0 +'px');
//       dropped.css('top', 0 +'px');
//     }
//     var item = dropped.detach();
//     droppedOn.append(item);
//
//     // var currentPos = item.position();
//     // console.log(currentPos);
//     // var parentPos = jq(this).offset();
//     // console.log(parentPos);
//   }
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
