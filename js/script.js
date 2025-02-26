// saat hamburger-menu di klik
const navbarNav = document.querySelector('.Navbar-nav')

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}