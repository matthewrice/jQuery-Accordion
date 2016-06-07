(function($){
  'use strict';

  $(function() {
    var $myHeading = $('.my-heading');
    $myHeading.find(".sub-folders").not('.accordion').hide();
    $myHeading.find(".sub-folders").eq(0).show();

    $myHeading.find(".accordion").click(function(){
        $myHeading.find('.accordion').not(this).siblings().fadeOut(500);
        $(this).siblings().fadeToggle(500);
    }).eq(0).trigger('click');
});

}(jQuery));
