//Put all your jQuery code in this block. 
jQuery(document).ready(function($) {
	$('.button').click(function(event) {
		sparking(1);
	});
	
});

function sparking(time) {
    for (i = 0; i < time; i++) {
        $('h1').fadeOut(1000);
        $('h1').fadeIn(1000);
    }
}
