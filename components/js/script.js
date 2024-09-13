var swiper = new Swiper(".deptmySwiper", {
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    spaceBetween: 50,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
