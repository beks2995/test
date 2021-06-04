$(document).ready(function(){

    $("#team").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            1200:{
              items: 4
            },
            992: {
                items: 3
            },
            500: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    })

    let leads = $("#leads")
    leads.owlCarousel({
        items: 2,
        loop: true,
        center: true,
        margin: 70,
        dots: false,
        nav: false,
        navContainerClass: 'leadsNav'
    })
    // Go to the next item
    $('.nextBtn').click(function() {
        leads.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.prevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        leads.trigger('prev.owl.carousel', [300]);
    })

});