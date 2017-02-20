$(document).ready(function() {
    // Add smooth scrolling to all anchor links
    $('a[href^="#"]').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (1500) specifies the number of milliseconds it takes to scroll to the specified area
            // Get top-position of target-element and set it as scroll target (scrollTop)
            $('html, body').animate({
                scrollTop: ($(hash).offset().top)
            }, 1500, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Set the link class to active if it's the currently shown
    $('section').mouseenter(function() {
        var id = $(this).attr('id');
        $('a').removeClass('active');
        $('[href=#' + id + ']').addClass('active');
    });
});
