$("#blog-owl-carousel").owlCarousel({
  loop: false,
  margin: 20,
  autoplay: false,
  responsiveClass: true,
  navText: [
    `<img src="../assets/images/icon/left.png" alt="" class="img-fluid me-3">`,
    `<img src="../assets/images/icon/right.png" alt="" class="img-fluid">`,
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});