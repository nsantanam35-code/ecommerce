// 1. Inicializar el estado recuperando de localStorage
let carrito = JSON.parse(localStorage.getItem('dental-logic-cart')) || [];

// 2. Función maestra para actualizar la interfaz
const actualizarContador = () => {
    const contadorBadge = document.getElementById('cart-count');
    if (contadorBadge) {
        contadorBadge.innerText = carrito.length;
    }
    localStorage.setItem('dental-logic-cart', JSON.stringify(carrito));
};

// 3. Delegación de Eventos (Escucha global de clics)
document.addEventListener('click', (event) => {
    // Verificamos si lo que se clickeó es el botón de compra
    const boton = event.target.closest('.btn-add-cart');
    
    if (boton) {
        // Evitar que el enlace o botón recargue la página
        event.preventDefault();
        
        const idProducto = boton.getAttribute('data-id');
        carrito.push(idProducto);
        
        // Feedback Visual
        const originalText = boton.innerText;
        boton.innerText = "¡Añadido! 🛒";
        boton.classList.replace('btn-dark', 'btn-success');
        
        setTimeout(() => {
            boton.innerText = originalText;
            boton.classList.replace('btn-success', 'btn-dark');
        }, 700);
        
        actualizarContador();
        console.log("Carrito actualizado:", carrito);
    }
});

// 4. Cargar contador al iniciar la página
document.addEventListener('DOMContentLoaded', actualizarContador);
