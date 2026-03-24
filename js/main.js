// 1. Estado del carrito (Persistencia con localStorage)
let carrito = JSON.parse(localStorage.getItem('dental-logic-cart')) || [];

// 2. Referencias al DOM
const contadorBadge = document.getElementById('cart-count');
const botonesAgregar = document.querySelectorAll('.btn-add-cart');

// 3. Función para actualizar la interfaz del Navbar
function actualizarUI() {
    contadorBadge.innerText = carrito.length;
    localStorage.setItem('dental-logic-cart', JSON.stringify(carrito));
}

// 4. Lógica de Interacción Personalizada
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Obtenemos el nombre del producto desde la tarjeta (DOM traversal)
        const nombreProducto = e.target.closest('.card-body').querySelector('.card-title').innerText;
        const idProducto = e.target.getAttribute('data-id');

        // Agregar al array
        carrito.push({ id: idProducto, nombre: nombreProducto });

        // Feedback Visual Técnico
        const textoOriginal = e.target.innerText;
        e.target.innerHTML = "🚀 Instalar " + idProducto;
        e.target.classList.replace('btn-dark', 'btn-info');
        e.target.classList.add('text-dark', 'fw-bold');

        // Notificación en consola (opcional, muy de dev)
        console.log("Sistema " + nombreProducto + " vinculado al carrito.");

        // Revertir el botón tras un breve momento
        setTimeout(() => {
            e.target.innerText = textoOriginal;
            e.target.classList.replace('btn-info', 'btn-dark');
            e.target.classList.remove('text-dark', 'fw-bold');
        }, 1200);

        actualizarUI();
    });
});

// 5. Inicializar al cargar
document.addEventListener('DOMContentLoaded', actualizarUI);
