let cart = []; 
let total = 0;

function add(n, p) { 
    cart.push({ n, p }); 
    total += p; 
    update(); 
}

function update() {
    document.getElementById('count').innerText = cart.length;
    const list = document.getElementById('cartList');
    const wa = document.getElementById('waCheck');
    
    if (cart.length === 0) { 
        list.innerHTML = '<div class="text-center py-5 text-muted">El carrito está vacío.</div>'; 
        wa.style.display = "none"; 
    } else {
        list.innerHTML = '';
        cart.forEach(i => { 
            list.innerHTML += `<div class="d-flex justify-content-between mb-3 border-bottom pb-3">
                <div><div class="fw-bold text-dark small">${i.n}</div></div>
                <strong class="text-primary">$${i.p.toLocaleString()}</strong>
            </div>`; 
        });
        wa.style.display = "block";
    }
    
    document.getElementById('totalPrice').innerText = `$${total.toLocaleString()}`;
    
    let m = "Hola Nataly! Quiero pagar mi selección de Dental Logic:%0A";
    cart.forEach(p => m += `- ${p.n}%0A`);
    m += `TOTAL: $${total}`;
    wa.href = `https://wa.me/56959530948?text=${m}`;
}
