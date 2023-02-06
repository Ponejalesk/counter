const btnMobile = document.getElementById('btnmobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventdefault()
    const nav = document.getElementById('nav-bar');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expended', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);