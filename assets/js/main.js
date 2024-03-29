/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        icon = toggle.querySelector("i")

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            icon.classList.toggle('bx-menu')
            icon.classList.toggle('bx-x')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', {
    delay: 200
});
sr.reveal('.home__img', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
    delay: 400
});
sr.reveal('.about__text', {
    delay: 400
});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', {
    interval: 200
});
sr.reveal('.skills__img', {
    delay: 600
});

/*SCROLL WORK*/
sr.reveal('.work__img', {
    interval: 200
});

/*SCROLL CONTACT*/
sr.reveal('.contact__input', {
    interval: 200
});

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');
    if (theme) {
        const chk = document.getElementById('chk');

        if (chk && theme === 'dark') {
            chk.click();
        }
    }
});
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const prefersDarkScheme = e.matches ? "dark" : "light";
        document.body.classList.toggle("dark", prefersDarkScheme === "dark");
    });


floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});

const modalScriptSource = '/assets/js/modal.js';
const hasModalScript = !!document.querySelector(`script[src="${modalScriptSource}"]`);

if(!hasModalScript) {
    const modalScript = document.createElement('script');
    modalScript.src = modalScriptSource;
    document.body.append(modalScript);
}
