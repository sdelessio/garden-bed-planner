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
    drop: function (event, ui) {
        jq(".inventory-grid").append(ui.draggable);
    },
    accept: ".item"
  });
  jq(".plot-grid").droppable({
    drop: function (event, ui) {
        var target = jq(".item");
        if(target.parent('.inventory-grid').length){
            jq(".plot-grid").append(ui.draggable.clone());
        }
        else {
            jq(".plot-grid").append(ui.draggable);
        }
    },
    accept: ".item"
  });

  function createGrid(size) {
    var i,
    sel = $('.plot-grid'),
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
        .addClass('gridlines')
        .appendTo(sel);
    }

    for (i = 0; i <= ratioH; i++) { // horizontal grid lines
      $('<div />').css({
            'top': i * size,
            'left': 0,
            'width': width,
            'height': 1
      })
        .addClass('gridlines')
        .appendTo(sel);
    }

    $('.gridlines').show();
}

createGrid(10);

});