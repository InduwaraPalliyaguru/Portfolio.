/* ====================toggle icon navbar====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ====================scroll sections ative link====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(id);

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    /* ====================sticky navbar====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    /* ====================remove toggle icon and navbar when click navbar link (scroll)====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* ====================scroll reveal====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolli-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /* ====================typed js====================*/
    const typed = new Typed('.multiple-text', {
        strings: ['Full-Stack Software Engineer', 'Java Developer', 'Web Developer', 'UI/UX Enthusiast', 'Lifelong Learner'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    /* ====================Skill js====================*/


    document.addEventListener('DOMContentLoaded', function () {
        const progressBars = document.querySelectorAll('.progress-bar .progress');

        function animateProgress() {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%'; // Reset for animation
                setTimeout(() => {
                    bar.style.width = width; // Animate to the original width
                    bar.style.transition = 'width 1s ease-in-out'; // Add transition
                }, 10);
            });
        }

        // You might trigger this animation on page load or when the section is scrolled into view
        animateProgress();
    });