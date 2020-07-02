$(document).ready(function () {




  var mq = window.matchMedia("(max-width: 992px)");
  if (mq.matches) {

    $('.nav-btn').click(function () {

      // displaying links on click
      $('.nav-links').slideToggle(1000);

      // changing nav button
      $('.nav-btn').toggleClass('turn');

    })
    $('.nav-link').click(function () {

      // hiding links on click
      $('.nav-links').slideToggle(0);

      // changing nav button
      $('.nav-btn').toggleClass('turn');

    })
  }




  $(window).scroll(function () {

    // transparent background
    let position = $(window).scrollTop();
    if (position >= 100) {
      $('nav, nav-header').addClass('navBackground')
    }
    else {
      $('nav, nav-header').removeClass('navBackground')
    }

  })

  // smooth scroll
  $('.nav-link,.hero-btn').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 82
    }, 1500);

  })


})



// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());