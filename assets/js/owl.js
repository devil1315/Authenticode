$("#owl-carousel").owlCarousel({
  loop: false,
  margin: 20,
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
      items: 2,
      nav: true,
    },
   
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
$("#serv-owl-carousel").owlCarousel({
  loop: false,
  margin: 20,
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

jQuery(document).ready(function () {
  jQuery("#project-logo").owlCarousel({
    loop: true,
    items: 6,
    autoplay: true,
    slideTransition: "linear",
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    stagePadding: 20,
    center: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  jQuery(".client-logo").trigger("play.owl.autoplay", [2000]);

  function setSpeed() {
    jQuery(".client-logo").trigger("play.owl.autoplay", [2000]);
  }

  setTimeout(setSpeed, 1000);
});

// $("#project-logo").owlCarousel({
//   loop: false,
//   margin: 1,
//   responsiveClass: true,
//   autoplay: true,
//   smartSpeed: 500,
//   autoplayHoverPause: true,

//   responsive: {
//     0: {
//       items: 1,
//       nav: true,
//     },
//     600: {
//       items: 2,
//       nav: false,
//     },
//     1000: {
//       items: 6,
//       nav: false,
//       loop: true,
//     },
//   },
// });

// $("#project-logo2").owlCarousel({
//   loop: false,
//   margin: 1,
//   responsiveClass: true,
//   autoplay: true,
//   smartSpeed: 500,
//   autoplayHoverPause: true,
//   rtl: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true,
//     },
//     600: {
//       items: 2,
//       nav: false,
//     },
//     1000: {
//       items: 6,
//       nav: false,
//       loop: true,
//     },
//   },
// });
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
$("#marketing-slide").owlCarousel({
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
