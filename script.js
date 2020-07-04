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
      scrollTop: $(target).offset().top - 79
    }, 1000);

  })


  // isotopes
  var $grid = $('.shows-images-container').isotope({
    // options
    layoutMode:'fitRows'
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });



  // magnific pop up
  $('.wallpapers-center').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      // options for gallery
      enabled: true,
      enableEscapeKey:true
    }
  });



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
    slideBy: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    smartSpeed: 3000,
    // autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 2
      }
    },
  })




  // owl carousel for reviews
  $('.show-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    slideBy: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    smartSpeed: 3000,
    // autoHeight: true,
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