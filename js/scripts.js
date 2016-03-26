$(document).ready( function() {
  $('.menujs').smint({
  	'scrollSpeed' : 800
  });

  $('.menu-bar').click(function(){
    $( ".menu-mobile-bar" ).slideToggle( "slow", function() {
    // Animation complete.
      });
  });
});
