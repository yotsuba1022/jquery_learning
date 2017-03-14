//Put all your jQuery code in this block. 
jQuery(document).ready(function($) {
	
	$('.button').click(function(event) {
		sparking(1);
		//slide();
	});

	$('.toggleButton').click(function(event) {
		$('h1,p').toggle();
	});
	
	$('.fadeButton').click(function(event) {
		fade();
	});

	$('.slideButton').click(function(event) {
		slideCommentByCss();
	});
});

function sparking(time) {
    for (i = 0; i < time; i++) {
        $('h1').fadeOut(1000);
        $('h1').fadeIn(1000);
    }
}

function slide() {
	$('h1').slideToggle();
}

function fade() {
	$('.text').fadeToggle(3000, function() {
	});
}

function slideComment() {
	$('.comment').slideToggle(1000, function() {
	});
}

function slideCommentByCss() {
	//It means that if the target element does not have active class, then add it, or remove it.
	$('.comment').toggleClass('active');
	//$('.comment').addClass('active');
	//$('.comment').removeClass('active');
}
