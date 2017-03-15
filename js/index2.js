jQuery(document).ready(function($) {
    $('.close').click(function(event) {
        event.preventDefault();
        $('.box').slideUp();
    });

    $('.changebox').click(function(event) {
    	$('.box').css({
    		'width': '500px',
    		'height': '200px'
    	});
    });
});
