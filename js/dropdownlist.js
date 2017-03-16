jQuery(document).ready(function($) {
	$('.dropdown').click(function(event) {
		event.preventDefault();
		$('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	});

	$('.showbox').click(function(event) {
		$('.box1').delay(0).slideDown(1000, function() {
		});
		$('.box2').delay(1000).slideDown(1000, function() {
		});
		$('.box3').delay(2000).slideDown(1000, function() {
		});
	});
});