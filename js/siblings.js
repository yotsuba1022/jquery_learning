jQuery(document).ready(function($) {
	$('.menu li').click(function(event) {
		$(this).addClass('active').siblings().removeClass('active');
	});
});