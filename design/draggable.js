var jq = $.noConflict();
jq(document).ready(function () {
  jq(".item").draggable({
    cursor: "move",
    opacity: 0.5,
    grid: [10, 10],
    snap: ".gridlines",
    revert: "invalid"
  });
  jq(".inventory-grid").droppable({
    accept: ".item",
    tolerance: "touch"
  });
  jq(".plot-grid").droppable({
    accept: ".item",
    tolerance: "touch"
  });
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
  // jq(".plot-grid").droppable({
  //   tolerance: 'touch',
  //   drop: function (event, ui) {
  //       var target = jq(".item");
  //       if(target.parent('.inventory-grid').length){
  //           jq(".plot-grid").append(ui.draggable.clone());
  //       }
  //       else {
  //           jq(".plot-grid").append(ui.draggable);
  //       }
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
      $('<div />').css({
            'top': 0,
            'left': i * size,
            'width': 1,
            'height': height
      })
        .addClass('gridlines gridlines-vertical')
        .appendTo(sel);
    }

    for (i = 0; i <= ratioH; i++) { // horizontal grid lines
      $('<div />').css({
            'top': i * size,
            'left': 0,
            'width': width,
            'height': 1
      })
        .addClass('gridlines gridlines-horizontal')
        .appendTo(sel);
    }

    $('.gridlines').show();
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
