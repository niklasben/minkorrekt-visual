$(function() {

    // Set variables
    var windowheight = $(window).height();
    var contentwidth = $(".content").width();
    var navbarwidth = $(".sidebar").width();

    // Calculate needed height for sections and store value in variable
    var sectionheight = windowheight - 68;
    // Calculate needed width for .cell and store value in variable
    var cellwidth = contentwidth / 3;

    // Set the section height to window height minus margin
    $(".content").css({
        "min-height": sectionheight + "px"
    });
    $(".cell").css({
        "min-height": sectionheight + "px"
    });
    // Set the width of .todorow to the width of .content
    /* $(".todorow").css({
        "min-width": contentwidth + "px"
    });
    $(".todorow").css({
        "max-width": contentwidth + "px"
    });
    // Set the cell width to the content width divided by 3
    $(".cell").css({
        "min-width": cellwidth + "px"
    });
    $(".cell").css({
        "max-width": cellwidth + "px"
    }); */

    // Resize the height and width if the window is resized
    $(window).resize(function() {
        $(".content").css({
            "min-height": sectionheight + "px"
        });
        $(".cell").css({
            "min-height": sectionheight + "px"
        });
    });
    console.log('sectionheight ' + sectionheight);
    // console.log(cellwidth);
});
