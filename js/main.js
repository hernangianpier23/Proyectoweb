/* Menu barra plomo scroll*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.barra').addClass('barranueva');
        } else {
            $('.barra').removeClass('barranueva');
        }
    });
});

/* Menu barra plomo scroll*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('barranueva');
        } else {
            $('.header').removeClass('barranueva');
        }
    });
});