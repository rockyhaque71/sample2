$(document).ready(function(){
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    });
    $(window).scroll(function(){
        const scroller = $(this).scrollTop();

        if(scroller > 400) {
            $('.back_to_top').fadeIn(500);
        }
        else {
            $('.back_to_top').fadeOut(500);
        }

        if (scroller > 200) {
            $('.navbar').addClass('bg_on_scroll');
        }
        else {
            $('.navbar').removeClass('bg_on_scroll');
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    // spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});