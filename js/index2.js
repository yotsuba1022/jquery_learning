jQuery(document).ready(function($) {
    $('.close').click(function(event) {
        event.preventDefault();
        $('.box').slideUp();
    });
});
