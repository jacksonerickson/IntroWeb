
//document.ready
$(function(){
    var mixer = mixitup('#mix-container');
    $("#lightgallery").lightGallery();
    $("#slideshow").slideshow({
        'width': 640,
        'height': 400,
        'pagination': false,
        'fadetime': 500,
        'delay': 2500
      });
});
