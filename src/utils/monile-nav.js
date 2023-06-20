export const mobileNav = () => {
    const navLinks = document.querySelectorAll('.mobile-nav__link');
    const menuIcon =  document.querySelector('.header__bars');
    const menu = document.querySelector('.mobile-nav');
    
    let isMobileNavOpen = true;


   menuIcon.addEventListener('click', (ev) => {
        isMobileNavOpen = !isMobileNavOpen;

        if (isMobileNavOpen) {
            document.body.style.overflowY = 'auto';
            menu.style.display = 'none';
        } else {
            document.body.style.overflowY = 'hidden';
            menu.style.display = 'flex';
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = true;
            document.body.style.overflowY = 'auto';
            menu.style.display = 'none';
        });
    })
        
    
}