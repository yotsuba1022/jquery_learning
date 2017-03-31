jQuery(document).ready(function($) {
	$('.wrap').on('click', 'h1', function(event) {
		event.preventDefault();
		alert('It works');
		$('.box').remove();
	});
	// $('h1').click(function(event) {
	// 	alert('It works.');
	// });
	$('.box1').html('<h1>用jQuery動態產生的</h1>');

	$('img').attr('width','80');
	
	$('.remove').click(function(event) {
		$(this).parent().parent().remove();
	});

	$('.top a').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, '10000');
	});
});