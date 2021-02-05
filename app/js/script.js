const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    console.log('Click Hamburger');

    if(header.classList.contains('open')) {
        // Close Hamburger Menu
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElms.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else {
        // Open Hamburger Menu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElms.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }  
});