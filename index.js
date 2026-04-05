// index.js
// Funcionalidades interactivas para el tutorial de GTA V

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------
    // Botón "volver arriba" dinámico
    // ------------------------------

    // Crear el botón desde JavaScript
    const btnTop = document.createElement('button');
    btnTop.classList.add('btn-top');
    btnTop.type = 'button';
    btnTop.setAttribute('aria-label', 'Volver al inicio de la página');
    btnTop.textContent = '↑ Arriba';

    // Añadir el botón al body
    document.body.appendChild(btnTop);

    // Mostrar / ocultar según el scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 300) {
            btnTop.classList.add('visible');
        } else {
            btnTop.classList.remove('visible');
        }
    });

    // Scroll suave al inicio al hacer clic
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ------------------------------------
    // Menú hamburguesa en pantallas móviles
    // ------------------------------------

    const btnHamburguesa = document.querySelector('.btn-hamburguesa');
    const nav = document.querySelector('nav');

    if (btnHamburguesa && nav) {
        // Alternar visibilidad del nav al hacer clic
        btnHamburguesa.addEventListener('click', () => {
            const navVisible = nav.classList.toggle('nav-visible');

            // Actualizar atributo aria-pressed para accesibilidad
            btnHamburguesa.setAttribute('aria-pressed', navVisible ? 'true' : 'false');
        });
    }
});

