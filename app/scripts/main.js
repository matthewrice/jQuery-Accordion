(function($){
  'use strict';

  $('.accordion > li h1').click(function(event){  //the .click function expression calls event which stands for event handler.
    event.preventDefault();  //this may not be needed.  Not sure.

    var $section = $(this).parent();  //not sure what "this" stands for.  This references the parent element of the .sub-folders
    var $subFolders = $('.sub-folders');  //this variable declares a variable name for the html .sub-folders class.
    console.log($('.sub-folders'));

    $('.active').removeClass('active');  //this removes the .active class from the active .sub-folders
    $section.find('.sub-folders').addClass('active'); //this finds the parent element of the active .sub-folders.

    $subFolders.not('.active').slideUp(); //this finds the .sub-folders that aren't currently active and slides them up.
    $('.active').slideDown();  //this will slide down the active .sub-folders.
  });

}(jQuery));
