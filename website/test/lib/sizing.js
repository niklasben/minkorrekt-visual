$(function() {

    // Set variables
    var windowheight = $(window).height();
    var headerheight = $("nav").height();
    var footerheight = $("footer").height();

    // Calculate needed height for sections and store value in variable
    var sectionheight = windowheight - headerheight - footerheight + 7;

    // Set body padding-top to header height minus 9px
    $("body").css({
        "padding-top": headerheight - 9 + "px"
    });

    // Set the section height to the div height minux header height and footer height
    $(".container-tr").css({
        "height": sectionheight + "px"
    });

    // Resize the height if the window is resized
    $(window).resize(function() {
        $(".container-tr").css({
            "height": sectionheight + "px"
        });
    });
});
