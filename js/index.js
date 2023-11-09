$(function() {
    $('.slider-blog__inner').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});