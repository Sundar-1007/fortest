var iconbtn = $('.box .iconbtn');

iconbtn.on('click', function () {
  $(iconbtn).toggleClass('active not-active');
});

$(iconbtn).click(function () {
  $('.nav-link-holder').toggleClass('active')
  $('.nav-links-container').toggleClass('active')
  $('.navbar-overflow').toggleClass('active');
  $('body').toggleClass('active');
})
$('.navbar-overflow').click(function () {
  $(iconbtn).toggleClass('active not-active')
  $('.nav-link-holder').toggleClass('active')
  $('.navbar-overflow').toggleClass('active')
  $('.nav-links-container').toggleClass('active')
  $('body').removeClass('active');

})

$('.search-box').click(function () {
  $('.search-box').toggleClass('active');
  $('.search-container').fadeToggle("slow");

})

var prevScrollpos = window.pageYOffset;
$(window).on('scroll', function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    $('.navbar').addClass('fixed');
  } else {
    // Scrolling down
    if (currentScrollPos > 200) {
      $('.navbar').removeClass('fixed');
    }
    else {
      $('.navbar').addClass('fixed');
    }
  }
  prevScrollpos = currentScrollPos;
});

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $('.navbar').addClass('scroll');
    $('header').removeAttr("data-aos");
  } else {
    $('.navbar').removeClass('scroll');
  }
});

$(document).ready(function() {
  // Show/hide the button based on the user's scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#go-top-btn').fadeIn();
    } else {
      $('#go-top-btn').fadeOut();
    }
  });
  
  // Scroll to the top of the page when the button is clicked
  $('#go-top-btn').click(function() {
    $('html, body').animate({scrollTop : 0} , 100);
    return false;
  });
});

AOS.init();
