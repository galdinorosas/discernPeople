$(document).ready(function() {

    $(".teamBlount").click(function(event) {
        $('html, body').animate({
            scrollTop: $(".scroll").offset().top
        }, 1500);

        switch (event.currentTarget.className) {
            case "blountLink teamBlount img-rounded":
                $(".dicksonInfo, .dundasInfo").css('display', "none");
                $(".blountInfo").fadeIn(1000);
                break;
            case "dicksonLink teamBlount img-rounded":
                $(".blountInfo, .dundasInfo").css('display', "none");
                $(".dicksonInfo").fadeIn(1000);
                break;
            case "dundasLink teamBlount img-rounded":
                $(".blountInfo, .dicksonInfo").css('display', "none");
                $(".dundasInfo").fadeIn(1000);
                break;
        }
    });


});
