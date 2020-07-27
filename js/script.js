
let viewMoreBtn = document.getElementById('show-more');


// Slick slider initializer

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// Slider initialiser for testimonials
$(document).ready(function () {
    $('.testimonial-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

// Simple light-box
var lightbox = new SimpleLightbox('.space a', { /* options */ });


// View more button functionality

function view() {
    let content = document.getElementsByClassName('moreBox')[0];
    if (content.style.display === "none") {
        content.style.display = "initial";
        viewMoreBtn.innerText = "View Less";

    } else {
        content.style.display = "none";
        viewMoreBtn.innerHTML = "View More";
    }
}


// Scroll reveal animation
$(document).ready(function () {
    window.sr = new ScrollReveal();
    sr.reveal('.service:nth-of-type(1), .about img', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.service:nth-of-type(2)', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.service:nth-of-type(3), .hero img', {
        duration: 1000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.about__detail, .form-container', {
        duration: 1000,
        origin: 'right',
        distance: '200px',
        opacity: 0,
        scale: 0.8,
    });
    sr.reveal('.skill-box__item:nth-of-type(1)', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skill-box__item:nth-of-type(2)', {
        duration: 1500,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skill-box__item:nth-of-type(3)', {
        duration: 1900,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skill-box__item:nth-of-type(4)', {
        duration: 2200,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skills__rating', {
        duration: 1000,
        //origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.credits-wrapper:nth-of-type(1), .credits-wrapper:nth-of-type(3)', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.credits-wrapper:nth-of-type(2), .credits-wrapper:nth-of-type(4)', {
        duration: 1000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });

    sr.reveal('.portfolio__detail, .client__detail, .testimonial__detail, .skills__detail, .contact__detail', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.gallery-animate, .customer-logos, .testimonial-wrapper', {
        duration: 1000,
        //origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.2
    });
    sr.reveal('.portfolio__title, .client__title, .testimonial__title, .about__title, .skills__title, .contact__title', {
        duration: 2500,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.viewmore', {
        duration: 3000,
        //distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.navbar', {
        duration: 1000,
        origin: 'top',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
});

// indicates the current section on scroll (makes the visited link functionality below obsolete)
$('body').scrollspy({ target: '.navbar-nav' });

/*// Functionality for visited links
const navLinks = document.getElementsByClassName('nav-item');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        let currentLink = document.querySelector('.active');
        currentLink.classList.toggle('active');
        let clickedLink = e.target.parentNode;
        clickedLink.classList.toggle('active');
    })
}*/