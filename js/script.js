$(document).ready(function() {

    $(".teamBlount").click(function(event) {
        $('html, body').animate({
            scrollTop: $(".scroll").offset().top
        }, 600);

        switch (event.currentTarget.className) {
            case "blountLink teamBlount img-rounded":
                $(".dicksonInfo, .dundasInfo, .smithInfo, .vasuInfo, .valerieInfo").css('display', "none");
                $(".blountInfo").fadeIn(1000);
                break;
            case "dicksonLink teamBlount img-rounded":
                $(".blountInfo, .dundasInfo, .smithInfo, .vasuInfo, .valerieInfo").css('display', "none");
                $(".dicksonInfo").fadeIn(1000);
                break;
            case "dundasLink teamBlount img-rounded":
                $(".blountInfo, .dicksonInfo, .smithInfo, .vasuInfo, .valerieInfo").css('display', "none");
                $(".dundasInfo").fadeIn(1000);
                break;
            case "smithLink teamBlount img-rounded":
                $(".blountInfo, .dicksonInfo, .dundasInfo, .vasuInfo, .valerieInfo").css('display', "none");
                $(".smithInfo").fadeIn(1000);
                break;
            case "vasuLink teamBlount img-rounded":
                $(".blountInfo, .dicksonInfo, .dundasInfo, .smithInfo, .valerieInfo").css('display', "none");
                $(".vasuInfo").fadeIn(1000);
                break;
            case "valerieLink teamBlount img-rounded":
                $(".blountInfo, .dicksonInfo, .dundasInfo, .smithInfo, .vasuInfo").css('display', "none");
                $(".valerieInfo").fadeIn(1000);
                break;
        }
    });


});
