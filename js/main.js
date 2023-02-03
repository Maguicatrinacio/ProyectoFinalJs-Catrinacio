const contenedorProductos = document.getElementById('contenedor-productos');
const abrirCarrito = document.getElementById("abrirCarrito");
const micarritoContenedor = document.getElementById("micarrito-contenedor")

let carrito =JSON.parse(localStorage.getItem('carrito')) || [];
    
    productos.forEach((producto) => {
        let cardProducto = document.createElement ("div");
        cardProducto.className = "card";
        cardProducto.innerHTML = `
            <img src = "${producto.img}">
            <h3> ${producto.nombre} </h3>
            <p class="precio"> $${producto.precio}</p>
        `;
        contenedorProductos.append(cardProducto);

        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "buttonComprar"

        cardProducto.append(comprar);

        comprar.addEventListener("click",() => {
            carrito.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
            });
            console.log(carrito);
        });
    });

abrirCarrito.addEventListener("click", () => {
    micarritoContenedor.innerHTML = "";
    micarritoContenedor.style.display ="flex"
    const miCarritoHeader = document.createElement("div");
    miCarritoHeader.className = "micarrito-header"
    miCarritoHeader.innerHTML =`
    <h1 class="micarrito-header-title"> Carrito </h1>
    `;
    micarritoContenedor.append(miCarritoHeader);

    const micarritoButton = document.createElement("h2");
    micarritoButton.innerText = "x";
    micarritoButton.className ="micarrito-header-button";

    micarritoButton.addEventListener("click", () =>{
        micarritoContenedor.style.display = "none";
    });

    miCarritoHeader.append(micarritoButton);

    carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "micarrito-content"
    carritoContent.innerHTML = `
        <img src= "${producto.img}">
        <h3> ${producto.nombre}</h3>
        <p> $${producto.precio}</p>
    `;
    micarritoContenedor.append(carritoContent);
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalComprado = document.createElement("div");
    totalComprado.className = "total-content";
    totalComprado.innerHTML = `total a pagar: $${total}`;
    micarritoContenedor.append(totalComprado);
}); 









