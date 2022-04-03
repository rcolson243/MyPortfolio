const btnMenuHamburger = document.querySelector('.block-menu-hamburger');
const blockMenuItems  = document.querySelector('.block-menu');

btnMenuHamburger.addEventListener('click', () => {
    blockMenuItems.classList.toggle('block-menu-visible');

})

// la modale menu items se ferme automatiquement
Window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        blockMenuItems.classList.remove('block-menu-visible');
    };
}) 