document.addEventListener("DOMContentLoaded", function () {
    // Mensaje de bienvenida al cargar la página
    setTimeout(() => {
        alert("Bienvenido a BODYLOGIC - Tu camino al Bienestar");
    }, 500);

    // Efecto de desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // centra la vista en el elemento
                });
            }
        });
    });

    // Añadir animación de aparición y animación de hover a las tarjetas de productos
    const productos = document.querySelectorAll('.productos .card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Agrega un pequeño retraso en la aparición para cada tarjeta
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100); // Cambia el retraso según el índice de la tarjeta
            }
        });
    }, { threshold: 0.1 });

    productos.forEach(producto => {
        producto.classList.add('fade-out'); // Estado inicial oculto
        observer.observe(producto);
        
        // Agrega animación de hover
        producto.addEventListener('mouseover', () => {
            producto.classList.add('hover-scale');
        });
        producto.addEventListener('mouseout', () => {
            producto.classList.remove('hover-scale');
        });
    });
});
