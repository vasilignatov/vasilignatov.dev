export const mobileNav = () => {
    const navLinks = document.querySelectorAll('.mobile-nav__link');
    const menuIcon = document.querySelector('.header__bars');
    const menu = document.querySelector('.mobile-nav');

    let isMobileNavOpen = false;

    window.addEventListener('resize', (ev) => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            document.body.style.overflowY = 'auto';
            menu.style.display = 'none';
        }
    })

    menuIcon.addEventListener('click', (ev) => {
        // only execute when mo
            isMobileNavOpen = !isMobileNavOpen;

            if (isMobileNavOpen) {
                document.body.style.overflowY = 'hidden';
                menu.style.display = 'flex';
            } else {
                document.body.style.overflowY = 'auto';
                menu.style.display = 'none';
            }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            document.body.style.overflowY = 'auto';
            menu.style.display = 'none';
        });
    })


}