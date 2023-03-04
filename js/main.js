const contenedorProductos = document.getElementById('contenedor-productos');
const abrirCarrito = document.getElementById("abrirCarrito");
const micarritoContenedor = document.getElementById("micarrito-contenedor")
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito =JSON.parse(localStorage.getItem('carrito')) || [];

const getProductos = async () => {
    const response = await fetch ("./productos.json");
    const data = await response.json();

    data.forEach((producto) => {
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
            const repetir = carrito.some((repetirProducto) => repetirProducto.id === producto.id);
    
            if (repetir){
                carrito.map((prod) => {
                    if (prod.id === producto.id){
                        prod.cantidad++;
                    };
                });
            } else {
            carrito.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
            Toastify({
                text: "Se agregó un nuevo producto a tu carrito",
                duration: 2000,
                gravity: "bottom",
                className: "info",
                style: {
                    background: "rgb(49, 45, 45)",
                    color: "white"
                }
            }).showToast();

            carritoNumero();
            saveLocal();  
            };
            saveLocal();
        });
    });
    
}
getProductos();



const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};










