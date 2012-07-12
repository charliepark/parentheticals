/*global $:false, jQuery:false */ // for JSHint checking
  
jQuery.fn.parentheticals = function(){
  "use strict";

  // assign all of the anchors and footnotes a value

  var i=0;
  $('[data-anchor=x]').each(function(){
    $(this).attr('data-anchor', i);
    i++;
  });
  i=0;
  $('[data-footnote=x]').each(function(){
    $(this).attr('data-footnote', i);
    i++;
  });  

  // for each "aside" element with the data attribute "footnote"
  $('[data-footnote]').each(function(){

    // get the original anchor reference
    var originalId = $(this).attr('data-footnote');

    // clean it up so it's just a numeral (e.x. "0a" => 0)
    var id = parseInt(originalId, 10);

    // we have 5 colors we're cycling through
    // (feel free to change it, but be sure to do it both here and in the CSS)
    var colorId = id%5;

    // find the anchor that referenced this footnote
    var anchor = $('[data-anchor='+originalId+']');

    // and style it
    anchor.addClass('color'+colorId);

    // (also, style the footnote itself) and attach it to the referring anchor
    $(this).appendTo(anchor).addClass('color'+colorId);
  });  
};
