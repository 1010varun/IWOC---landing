$(document).ready(function() {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $("#window").position();
        if (y > x.top) {
            $('nav').fadeIn().css({"position":"fixed","top":"0"});
        } else {
            $('nav').css({"position" : "static"});
        }
        });
});