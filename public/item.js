const itemElement = document.getElementById("item-container")


function loadItemData() {
    const url = new URL(window.location.href);

    const params = new URLSearchParams(url.search);
    
    const productCode = params.get('code');

    console.log({url, params, productCode})

    const selectedProduct = productos.find(item => item.id == productCode)

    const contentHtml = `
        <div class="col-md-6">
            <img src="../${selectedProduct.imagen}" alt="${selectedProduct.nombre}" class="img-fluid product-image">
        </div>
        <div class="col-md-6">
            <h1 class="card-title">${selectedProduct.nombre}</h1>
            <p class="price">$${selectedProduct.precio}</p>
            <p class="card-text">${selectedProduct.descripcion}</p>
            <ul>
                <li>Material: Poliéster y elastano</li>
                <li>Tallas disponibles: S, M, L, XL</li>
                <li>Colores: Negro, Azul, Rosa</li>
            </ul>
            <h5>Opiniones de Clientes</h5>
            <div class="mb-3">
                <small>⭐⭐⭐⭐⭐ - "Excelente calidad y muy cómodos!"</small><br>
                <small>⭐⭐⭐⭐ - "Me encantan, solo que la talla M es un poco ajustada."</small>
            </div>
        </div>
    `
    
    itemElement.innerHTML += contentHtml;
}

loadItemData()