jQuery(document).ready(function($) {
	$('.addToCart').click(function(event) {
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
	});
});