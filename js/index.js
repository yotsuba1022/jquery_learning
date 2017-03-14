//Put all your jQuery code in this block. 
$(document).ready(function() {
    sparking(5);
});

function sparking(time) {
    for (i = 0; i < time; i++) {
        $('h1').fadeOut(1000);
        $('h1').fadeIn(1000);
    }
}
