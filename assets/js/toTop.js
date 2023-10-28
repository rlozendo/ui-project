'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the "to top" link
    var toTopLink = document.getElementById('totop');

    // Function to scroll to the top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }

    // Function to toggle a class when scrolled down 200px from the top
    function toggleClassOnScroll() {
        if (window.scrollY >= 200) {
            toTopLink.classList.add('scrolled-down');
        } else {
            toTopLink.classList.remove('scrolled-down');
        }
    }

    // Add a click event listener to the "to top" link
    toTopLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        scrollToTop(); // Scroll to the top
    });

    // Add a scroll event listener to toggle the class on scroll
    window.addEventListener('scroll', toggleClassOnScroll);
});
