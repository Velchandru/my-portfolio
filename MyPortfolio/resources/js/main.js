const showMenu = (ptoggleId, pNavId) => {
    const toggle = document.getElementById(ptoggleId),
        nav = document.getElementById(pNavId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');


const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //active link
    navLink.forEach(e => e.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(e => e.addEventListener('click', linkAction));

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

scrollReveal.reveal('.home__title', {});
scrollReveal.reveal('.button', { delay: 200 });
scrollReveal.reveal('.home__img', { delay: 400 });
scrollReveal.reveal('.home__social-icon', { delay: 200 });

scrollReveal.reveal('.about__img', {});
scrollReveal.reveal('.about__subtitle', { delay: 200 });
scrollReveal.reveal('.about__text', { delay: 400 });

scrollReveal.reveal('.skills__subtitle', {});
scrollReveal.reveal('.skills__text', { delay: 200 });
scrollReveal.reveal('.skills__data', { interval: 200 });
scrollReveal.reveal('.skills__img', { delay: 400 });

scrollReveal.reveal('.work__img', { interval: 200 });

scrollReveal.reveal('.contact__input', { interval: 200 });