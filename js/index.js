
/* navigation */

const $window = $(window);

$window.on('scroll', onScroll);

function onScroll() {
  if($window.scrollTop() < 100) {
    $('#menu').css('background', 'rgba(35,36,59,0.7)');
    $('.navbar-brand').css('color', 'white')
    $('.link-nav').css('color', 'white')

  } else {
    $('#menu').css('background', 'white');
    $('.navbar-brand').css('color', 'rgba(35,36,59)')
    $('.link-nav').css('color', 'rgba(35,36,59)')

  }
}

/* animation */

$window.on('scroll', scroll);
function scroll() {
    
    if($window.scrollTop() >= 100) {
     $('.about-studio').slideDown(1000);
     $('.about-studio').css('display', 'flex')
    }  
}

$window.on('scroll', scrolla);
function scrolla() {
    
    if($window.scrollTop() >= 400) {
     $('.about-technology').slideDown(1000);
     $('.about-technology').css('display', 'flex')
    }  
}