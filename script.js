// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // // Smooth scroll for nav links
    // document.querySelectorAll('.nav-links a').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const section = document.querySelector(this.getAttribute('href'));
    //         section.scrollIntoView({ behavior: 'smooth' });
            
    //         navLinks.classList.remove('active');
    //         hamburger.classList.remove('toggle');
    //     });
    // });
});