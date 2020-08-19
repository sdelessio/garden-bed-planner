var jq = jQuery.noConflict();
var draggableOptions = {
  cursor: "move",
  opacity: 0.5,
  grid: [10, 10],
  snap: ".gridlines",
  revert: "invalid"
};
var droppableOptions = {
  accept: ".item",
  tolerance: "touch"
};

jq(document).ready(function () {
  function makeItemsDraggable() {
  jq(".item").draggable(draggableOptions);
  }
  jq(".inventory-grid").droppable(droppableOptions);
  jq(".plot-grid").droppable(droppableOptions);

  makeItemsDraggable();

  // jq(".inventory-grid").droppable({
  //   tolerance: 'touch',
  //   drop: function (event, ui) {
  //       var target = jq(".item");
  //     if(target.parent('.plot-grid').length){
  //         jq(".inventory-grid").append(ui.draggable.clone());
  //     }
  //     else {
  //         jq(".inventory-grid").append(ui.draggable);
  //     }
  //   },
  //   accept: ".item"
  // });

  function createGrid(size) {
    var i,
    sel = jq('.plot-grid'),
        height = sel.height(),
        width = sel.width(),
        ratioW = Math.floor(width / size),
        ratioH = Math.floor(height / size);

    for (i = 0; i <= ratioW; i++) { // vertical grid lines
      jq('<div />').css({
            'top': 0,
            'left': i * size,
            'width': 1,
            'height': height
      })
        .addClass('gridlines gridlines-vertical')
        .appendTo(sel);
    }

    for (i = 0; i <= ratioH; i++) { // horizontal grid lines
      jq('<div />').css({
            'top': i * size,
            'left': 0,
            'width': width,
            'height': 1
      })
        .addClass('gridlines gridlines-horizontal')
        .appendTo(sel);
    }

    jq('.gridlines').show();
}

createGrid(12);

// Change height of plot with height input
jq("#height-input").on('input', function(){
  var value = jq(this).val();
  // Each inch is equal to 12 pixels
  convertedValue = value * 12;
  jq(".rectangular-plot").height(convertedValue);
  jq(".gridlines").remove();
  createGrid(12);
});

//Change width of plot with width input
jq("#width-input").on('input', function(){
  var value = jq(this).val();
  // Each inch is equal to 12 pixels
  convertedValue = value * 12;
  jq(".rectangular-plot").width(convertedValue);
  jq(".gridlines").remove();
  createGrid(12);
});


});
