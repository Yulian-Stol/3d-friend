body.classList.add('active')

/* navigation */

const $window = $(window);

$window.on('scroll', onScroll);

function onScroll() {
    if ($window.scrollTop() < 200) {
        $('#menu').css('background', 'rgba(35,36,59,0.7)');
        $('.navbar-brand').css('color', 'white')
        $('.link-nav').css('color', 'white')
        $('.social img').css('border', '6px solid var(--accent-color)')
        $('.social img').css('padding', '0px')

    } else {
        $('#menu').css('background', 'white');
        $('.navbar-brand').css('color', 'rgba(35,36,59)')
        $('.link-nav').css('color', 'rgba(35,36,59)')
        $('.social img').css('border', '2px solid rgba(35,36,59)')
        $('.social img').css('padding', '4px')
    }
}

/* animation */



$window.on('scroll', scroll);
function scroll() {

    if ($window.scrollTop() >= 100) {
        $('.about-studio').slideDown(1000);
        $('.about-studio').css('display', 'flex')
    }
}

$window.on('scroll', scrolla);
function scrolla() {

    if ($window.scrollTop() >= 400) {
        $('.about-technology').slideDown(1000);
        $('.about-technology').css('display', 'flex')
    }
}

/* clock */

setInterval(updateClock, 1000);

function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}
