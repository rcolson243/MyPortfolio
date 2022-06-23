const btnMenuHamburger = document.querySelector('.block-menu-hamburger');
const blockMenuItems  = document.querySelector('.block-menu');
const navMenuItem = document.querySelectorAll('.nav-menu-item')

btnMenuHamburger.addEventListener('click', () => {
    //blockMenuItems.classList.toggle('block-menu-visible');
    blockMenuItems.style.display = 'block';
})

for(let i = 0; i < navMenuItem.length; i++) {
    navMenuItem[i].addEventListener('click', () => {
        blockMenuItems.style.display = 'none';
    })
}





// la modale menu items se ferme automatiquement
Window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        blockMenuItems.classList.remove('block-menu-visible');
    };
}) 