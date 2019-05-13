$(window).scroll(function() {
var theta = $(window).scrollTop() / 100 % Math.PI;
$('#hireme').css({ transform: 'rotate(-' + theta + 'rad)' });
});

$(document).ready(function () {
    $(".icon").click(function () {
        $("#hamburger").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});