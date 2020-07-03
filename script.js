$(document).ready(function () {


  var mq = window.matchMedia("(max-width: 992px)");
  if (mq.matches) {

    $('.nav-btn').click(function () {

      // displaying links on click
      $('.nav-links').slideToggle(800);

    })

    $('.nav-link').click(function () {

      // hiding links on click
      $('.nav-links').slideToggle(800);

    })
  }


  // transparent background
  $(window).scroll(function () {

    let position = $(window).scrollTop();
    if (position >= 100) {
      $('nav, nav-header').addClass('navBackground')
    }
    else {
      $('nav, nav-header').removeClass('navBackground')
    }

  })


  // smooth scroll
  $('.nav-link,.hero-btn,.about-btn').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 80
    }, 1000);

  })


  // accordion
  $(".service-info").accordion({
    collapsible: true,
    active:false
  });


  // owl carousel for reviews
  $('.reviews-center').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    slideBy: 2,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 2
      }
    },
  })

})



// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());