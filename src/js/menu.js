export default function runMenu() {
    const menuElem = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = menuElem.querySelectorAll('.menu__link, .social-list__link');
    const menuClose = menuElem.querySelector('.menu__close');
    const hamburger = document.querySelector('.hamburger');
    const socials = document.querySelector('.socials');

    function closeMenu() {
        menuElem.classList.remove('menu--active');
        menuOverlay.classList.remove('menu-overlay--active');
        socials.classList.remove('socials--hidden');
    }

    hamburger.addEventListener('click', () => {
        menuElem.classList.add('menu--active');
        menuOverlay.classList.add('menu-overlay--active');
        socials.classList.add('socials--hidden');

        menuClose.addEventListener('click', closeMenu);
        menuLinks.forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

    });
}

