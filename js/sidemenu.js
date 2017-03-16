jQuery(document).ready(function($) {
    $('.header').click(function(event) {
        $('body').toggleClass('open');
    });

    $('.shake').click(function(event) {
        $('.top').addClass('shake');
        setTimeout(function(){
        	$('.top').removeClass('shake');
        }, 1000);
    });
});
