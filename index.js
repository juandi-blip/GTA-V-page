

document.addEventListener('DOMContentLoaded', () => {
    const btnTop = document.createElement('button');
    btnTop.classList.add('btn-top');
    btnTop.type = 'button';
    btnTop.setAttribute('aria-label', 'Volver al inicio de la página');
    btnTop.textContent = '↑ Arriba';

    document.body.appendChild(btnTop);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 300) {
            btnTop.classList.add('visible');
        } else {
            btnTop.classList.remove('visible');
        }
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    const btnHamburguesa = document.querySelector('.btn-hamburguesa');
    const nav = document.querySelector('nav');

    if (btnHamburguesa && nav) {
        btnHamburguesa.addEventListener('click', () => {
            const navVisible = nav.classList.toggle('nav-visible');
            btnHamburguesa.setAttribute('aria-pressed', navVisible ? 'true' : 'false');
        });
    }
});

