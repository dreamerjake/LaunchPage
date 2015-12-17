/*
var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
}
$(document).ready(main);


$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 0.25)
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5)
    });
});


$(document).ready(function() {
	$('td').hide()
});
*/

$(document).ready(function() {
	$('img').fadeTo(0, 0.7)
    $('img').mouseenter(function() {
        /* $(this).width(280).height(280) */
        $(this).fadeTo(0, 1.0)

    });
    $('img').mouseleave(function() {
    	/* $(this).width(256).height(256) */
        $('img').fadeTo(100, 0.7)
    });
    $("#clockDisplay").click(function() {
    	$("#clockDisplay").css("color", "red")
    });
});

/* Dropdown Menu Stuff */
$(function () {
  $('.click-nav > ul').toggleClass('no-js js');
  $('.click-nav .js ul').hide();
  $('.click-nav .js').click(function(e) {
    $('.click-nav .js ul').slideToggle(200);
    $('.clicker').toggleClass('active');
    e.stopPropagation();
  });
  $(document).click(function() {
    if ($('.click-nav .js ul').is(':visible')) {
      $('.click-nav .js ul', this).slideUp();
      $('.clicker').removeClass('active');
    }
  });
});