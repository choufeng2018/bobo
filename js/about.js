getHeader("about")




$(function () {

    var init_about = function () {
        var aboutus_height = $(".about-right").height();
        $(".about-main").css({"height": aboutus_height});

        var cont_height = $(".cont-left").height();
        $(".contact-main").css({"height": cont_height});


    }






    init_about();
    getFooter(true);
    getFixed();
})


