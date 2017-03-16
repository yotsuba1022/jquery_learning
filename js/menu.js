jQuery(document).ready(function($) {
	$('.menu li').click(function(event) {
		$(this).toggleClass('active');
	});
});